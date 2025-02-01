import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import Hyperspeed from './components/Hyperspeed';
import {
  DistortionOptions,
  HyperspeedPresets,
} from './constant/HyperspeedPresets';
import TrueFocus from './components/TrueFocus';
import Crosshair from './components/Crosshair';
import ShinyText from './components/ShinyText';

function App() {
  const [fov, setFov] = useState(90);
  const containerRef = useRef(null);
  const presets = ['one', 'two', 'three', 'four', 'five', 'six'];

  useEffect(() => {
    const interval = setInterval(() => {
      setFov((prev) => (prev === 100 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getRandomPreset = () => {
    const randomIndex = Math.floor(Math.random() * presets.length);
    return presets[randomIndex];
  };

  const getRandomDistortion = () => {
    const values = Object.values(DistortionOptions);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  };

  const options = {
    ...HyperspeedPresets[getRandomPreset()],
    distortion: getRandomDistortion(),
    fov,
  };

  const effectOptions = useMemo(
    () => ({
      ...options,
      fov,
    }),
    [fov]
  );

  return (
    <div id='App' ref={containerRef}>
      <Crosshair containerRef={containerRef} color='#ffffff' />
      <div className='text-white z-10 flex flex-col gap-2 items-center justify-around text-center w-full'>
        <h1 className='text-8xl font-black'>Hi, I'm Johan Adi Wimbanu</h1>
        <TrueFocus
          sentence='Web Developer'
          manualMode={false}
          blurAmount={5}
          borderColor='aqua'
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <p className='text-2xl'>Turning Ideas into Digital Experiences</p>
        <p className='text-lg py-4 rounded-lg w-full bg-black/5 backdrop-blur-2xl'>
          Full-stack Developer specializing in creating innovative web solutions
          that make an impact
        </p>
        <button className='cursor-pointer border-2 inline-block bg-black/5 backdrop-blur-2xl border-cyan-300 outline-white px-4 py-2 rounded-lg shiny-button text-xl'>
          <ShinyText text='Can you hit me ?' disabled={false} speed={3} />
        </button>
      </div>
      <Hyperspeed effectOptions={effectOptions} />
    </div>
  );
}

export default App;
