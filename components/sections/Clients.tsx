'use client'

import { AirbnbIcon, GoogleIcon, MicrosoftIcon, FedexIcon } from '@/components/'
import { motion } from 'framer-motion'

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}
const transitionHover = {
  type: 'spring',
  stiffness: 400,
  damping: 17
}

export const Clients: React.FC = () => {
  return (
    <section id='clients' className='pt-20 pb-32'>
      <div className='text-h2 font-light leading-snug text-neutral-2 text-center
          md:w-2/4 md:text-left
          '>
        <h2>Some of <b className='text-neutral-1'>the clients I have designed for</b></h2>
      </div>
      <motion.div variants={containerVariant}
        initial='hidden'
        whileInView='show'
        className='grid sm:grid-cols-2 sm:grid-rows-2 gap-16
          lg:flex lg:justify-between lg:flex-row pt-24'>
        <motion.div
          whileHover={{ scale: 1.2, transition: transitionHover }}
          variants={itemVariant}
          className='mx-auto'>
          <AirbnbIcon />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, transition: transitionHover }}
          variants={itemVariant}
          className="mx-auto">
          <GoogleIcon />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, transition: transitionHover }}
          variants={itemVariant}
          className='mx-auto'>
          <MicrosoftIcon />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, transition: transitionHover }}
          variants={itemVariant}
          className='mx-auto'>
          <FedexIcon />
        </motion.div>
      </motion.div>
    </section>
  )
}
