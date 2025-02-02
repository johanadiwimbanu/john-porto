import ShinyText from './ShinyText';
import TrueFocus from './TrueFocus';

const Welcome = () => {
  return (
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
      <p className='text-lg py-4 w-full bg-black/5 backdrop-blur-2xl'>
        Full-stack Developer specializing in creating innovative web solutions
        that make an impact
      </p>
      <button className='cursor-pointer border inline-block bg-black/5 backdrop-blur-2xl border-cyan-300 outline-white px-4 py-2 rounded-lg shiny-button text-xl'>
        <ShinyText text='Lock on and Hit!' disabled={false} speed={3} />
      </button>
    </div>
  );
};

export default Welcome;
