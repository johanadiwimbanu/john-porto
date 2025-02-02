import { useRef } from 'react';
import './App.css';
import Hyperspeed from './components/Hyperspeed';
import { getRandomHyperspeedPresets } from './utils/HyperspeedPresets';
import Crosshair from './components/Crosshair';
import Welcome from './components/Welcome';

function App() {
  const containerRef = useRef(null);

  const effectOptions = getRandomHyperspeedPresets();

  return (
    <div id='App' ref={containerRef}>
      <Crosshair containerRef={containerRef} color='#ffffff' />
      <Welcome />
      <Hyperspeed effectOptions={effectOptions} />
    </div>
  );
}

export default App;
