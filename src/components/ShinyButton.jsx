import ShinyText from './ShinyText';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ShinyButton = ({
  children,
  onClick,
  variant = 'default',
  icon: Icon,
  className = '',
  disabled = false,
}) => {
  // Mapping untuk variasi warna border
  const variantStyles = {
    default: 'border-cyan-300',
    purple: 'border-purple-300',
    orange: 'border-orange-300',
    green: 'border-green-300',
    yellow: 'border-yellow-300',
  };

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
        scale: [0.6, 0.8, 1],
      }}
      transition={{
        duration: 0.6,
        ease: 'easeIn',
      }}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      className={`
        cursor-pointer 
        inline-flex 
        items-center 
        gap-2
        border 
        ${variantStyles[variant]}
        bg-black/5 
        backdrop-blur-2xl 
        outline-white 
        px-4 
        py-2 
        rounded-lg 
        text-xl
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
        group
        transition-all
        duration-300
        hover:shadow-sm hover:shadow-white/70
      `}
    >
      {Icon && (
        <Icon
          className='w-5 h-5 
            ${variantStyles[variant]}
            group-hover:translate-x-[-2px] transition-transform
            '
        />
      )}
      <ShinyText
        text={children}
        className='text-lg'
        disabled={disabled}
        speed={3}
      />
    </motion.button>
  );
};

ShinyButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'purbple', 'orange', 'green', 'yellow']),
  icon: PropTypes.elementType,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ShinyButton;
