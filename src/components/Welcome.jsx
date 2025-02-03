import PropTypes from 'prop-types';
import ShinyButton from './ShinyButton';
import TrueFocus from './TrueFocus';

const Welcome = ({ action }) => {
  return (
    <div className='text-white flex flex-col gap-2 items-center justify-around text-center w-full'>
      <h1 className='text-7xl md:text-8xl font-black px-4 md:px-0'>
        Hi, I&apos;m Johan Adi Wimbanu
      </h1>
      <TrueFocus
        sentence='Web Developer'
        manualMode={false}
        blurAmount={5}
        borderColor='aqua'
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <p className='text-2xl'>Turning Ideas into Digital Experiences</p>
      <p className='text-lg py-4 px-4 md:px-0 w-full bg-black/5 backdrop-blur-2xl'>
        Full-stack Developer specializing in creating innovative web solutions
        that make an impact
      </p>

      <ShinyButton
        variant='default'
        onClick={() => {
          action();
        }}
        disabled={false}
        className='mt-4'
      >
        Lock on and Hit!
      </ShinyButton>
    </div>
  );
};

Welcome.propTypes = {
  action: PropTypes.func,
};

export default Welcome;
