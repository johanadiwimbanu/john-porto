import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TrueFocus = ({
  sentence = 'True Focus',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(' ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  // Handlers for manual mode (hover)
  const handleMouseEnter = (index) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div className='focus-container' ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className={`focus-word text-5xl ${manualMode ? 'manual' : ''} ${
              isActive && !manualMode ? 'active' : ''
            }`}
            style={{
              filter: manualMode
                ? isActive
                  ? `blur(0px)`
                  : `blur(${blurAmount}px)`
                : isActive
                ? `blur(0px)`
                : `blur(${blurAmount}px)`,
              '--border-color': borderColor,
              '--glow-color': glowColor,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className='focus-frame'
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={{
          '--border-color': borderColor,
          '--glow-color': glowColor,
        }}
      >
        <span className='corner top-left'></span>
        <span className='corner top-right'></span>
        <span className='corner bottom-left'></span>
        <span className='corner bottom-right'></span>
      </motion.div>
    </div>
  );
};

TrueFocus.propTypes = {
  sentence: PropTypes.string,
  manualMode: PropTypes.bool,
  blurAmount: PropTypes.number,
  borderColor: PropTypes.string,
  glowColor: PropTypes.oneOfType([
    PropTypes.string, // Bisa hex, rgb, atau rgba
    (props, propName, componentName) => {
      const value = props[propName];
      const isValid =
        /^#([0-9A-F]{3}){1,2}$/i.test(value) || // Hex
        /^rgba?\(\d{1,3},\s?\d{1,3},\s?\d{1,3}(,\s?(0|1|0?\.\d+))?\)$/i.test(
          value
        ); // RGB & RGBA

      if (!isValid) {
        return new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a valid hex, RGB, or RGBA color.`
        );
      }
    },
  ]),
  animationDuration: PropTypes.number,
  pauseBetweenAnimations: PropTypes.number,
};

export default TrueFocus;
