import { useRef, useState } from 'react';
import './App.css';
import Hyperspeed from './components/Hyperspeed';
import { getRandomHyperspeedPresets } from './utils/HyperspeedPresets';
import Crosshair from './components/Crosshair';
import Welcome from './components/Welcome';
import { motion, AnimatePresence } from 'framer-motion';
import EntranceTour from './components/EntranceTour';

function App() {
  const containerRef = useRef(null);
  const [isTourBegins, setIsTourBegins] = useState(false);

  const effectOptions = getRandomHyperspeedPresets();
  return (
    <div id='App' ref={containerRef}>
      <Crosshair containerRef={containerRef} color='#ffffff' />
      <AnimatePresence mode='wait'>
        <div className='z-10 w-full'>
          {isTourBegins ? (
            <EntranceTour goBack={() => setIsTourBegins(false)} />
          ) : (
            <motion.div
              key='welcome'
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Welcome action={() => setIsTourBegins(true)} />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
      <Hyperspeed effectOptions={effectOptions} />
    </div>
  );
}

export default App;
