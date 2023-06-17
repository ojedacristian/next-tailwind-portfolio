'use client'

import { type Work } from '@/interfaces/interfaces'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from './icons'
import { motion } from 'framer-motion'
// import { useRef } from 'react'

interface WorkCardProps {
  align: boolean
  work: Work
}

const variant = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.3,
      duration: 1
    }
  }
}
const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

export const WorkCard: React.FC<WorkCardProps> = ({ align, work }) => {
  return (
    <motion.article
    variants={variant}
      initial='hidden'
      whileInView='show'
      viewport={{
        amount: 0.6,
        once: true
      }}
      className={`flex flex-col ${align ? 'items-end lg:flex-row-reverse' : 'lg:flex-row'} my-14 lg:my-24 text-neutral-2`}>
      <Image className='rounded-3xl' width={594} height={490} src={work.image} alt="" />
      <div className={`flex flex-col ${align ? 'text-right pr-8 items-end' : 'text-left md:pl-8'} lg:justify-end pb-0`}>
        <motion.h3 variants={item} className='uppercase py-4 text-neutral-1 text-h5'>{work.title}</motion.h3>
        <motion.h3 variants={item} className='text-h3 font-light leading-normal'>Lorem ipsum dolor sit amet, consectetur <b className='text-neutral-1'> adipiscing elit. Ultrices lorem non feugiat egestas amet.</b></motion.h3>
        <motion.p variants={item} className='my-6 font-light text-body'>{work.category}</motion.p>
        <motion.button
        variants={item}
        className={`group uppercase flex justify-center p-2 rounded-full w-44 border text-neutral-1 border-neutral-2 text-h5 hover:bg-gradient-to-tl from-purple-600 to-pink-600 ${align ? 'hover:-translate-x-3' : 'hover:translate-x-3'} hover:border-white`}
        >
          View Work
          <div className="collapse group-hover:visible">
            <ArrowRight />
          </div>
          <div className="group-hover:collapse">
            <ChevronRight />
          </div>
        </motion.button>
      </div>
    </motion.article>
  )
}
