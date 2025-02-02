import { motion } from 'framer-motion';
import {
  Sparkles,
  Rocket,
  Code,
  Mail,
  MousePointer2,
  MousePointer,
  ArrowLeft,
} from 'lucide-react';
import ShinyText from './ShinyText';

const EntranceTour = ({ goBack }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className='flex items-center justify-center px-0 md:px-8 w-full py-4'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='mx-auto w-full'>
        <motion.div className='w-full py-6' variants={itemVariants}>
          <motion.div className='text-center w-full' variants={itemVariants}>
            <motion.h1
              className='text-fluid-4xl px-12 md:text-fluid-6xl font-black text-transparent bg-clip-text text-white leading-tight flex items-center justify-center gap-4'
              variants={itemVariants}
            >
              {/* <Sparkles className='w-12 h-12 text-cyan-300' /> */}
              Welcome to My Portfolio
              {/* <Rocket className='w-12 h-12 text-purple-400' /> */}
            </motion.h1>

            <motion.p
              className='px-12 py-2 mt-2 md:mt-6 w-full bg-black/5 backdrop-blur-2xl text-fluid-lg md:text-fluid-xl text-gray-200 font-medium'
              variants={itemVariants}
            >
              Selamat datang di ruang kreatif saya!&nbsp;
              <span className='text-cyan-300'>
                Di sini, Anda akan menemukan perjalanan, karya, dan visi saya
                dalam dunia Web Development
              </span>
              <span className='animate-pulse'> ✨</span>
            </motion.p>
          </motion.div>

          <motion.div
            className='mt-2 px-12 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6'
            variants={itemVariants}
          >
            {[
              {
                icon: <Sparkles className='w-8 h-8' />,
                title: 'Keahlian',
                description: 'Eksplorasi kemampuan teknis saya',
              },
              {
                icon: <Code className='w-8 h-8' />,
                title: 'Proyek',
                description: 'Lihat koleksi karya yang pernah saya buat',
              },
              {
                icon: <Mail className='w-8 h-8' />,
                title: 'Kolaborasi',
                description: 'Mari bekerja sama dalam proyek menarik',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className='backdrop-blur-2xl bg-black/5 p-6 rounded-lg backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group'
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className='text-cyan-300 group-hover:scale-105 transition-transform duration-300'>
                  {item.icon}
                </div>
                <h3 className='mt-4 text-fluid-lg md:text-fluid-xl font-bold text-white'>
                  {item.title}
                </h3>
                <p className='mt-2 text-gray-300'>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className='flex justify-center flex-col items-center text-white'>
          <p className='md:text-fluid-lg text-gray-300 font-medium animate-bounce transition delay-1000'>
            Scroll to Explore
          </p>

          <motion.button
            onClick={() => goBack()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group px-6 py-2 mt-4 rounded-full backdrop-blur-md bg-black/5 border border-orange-400 
                   transition-all duration-300 flex items-center gap-2'
          >
            <ArrowLeft className='w-4 h-4 text-orange-400 group-hover:translate-x-[-2px] transition-transform' />
            <span className='text-gray-200 font-medium'>Go Back</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default EntranceTour;
