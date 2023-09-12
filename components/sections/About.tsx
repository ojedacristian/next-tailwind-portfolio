'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const variant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 }
}

export const About: React.FC = () => {
  return (
        <section id="about" className="flex flex-col md:flex-row items-center py-12 md:py-24">
            <motion.article
                initial= {{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{
                  amount: 0.7,
                  once: true
                }}
                className="mr-0 text-center sm:mr-8 md:w-1/2 md:text-left">
                <h4 className="uppercase text-h4 mb-2 sm:mb-0">A bit about me</h4>
                <h3 className="text-neutral-2 text-h3 font-light leading-normal">
                    I am a UI/UX designer who is passionate about creating <b className="text-neutral-1">beautiful and joyful digital experiences. Besides design, I love music, games and travelling.</b>
                </h3>
            </motion.article>
            <motion.div
                variants={variant}
                initial='hidden'
                whileInView={ 'show'}
                viewport={{
                  amount: 0.7,
                  once: true
                }}
                className="md:w-1/2 flex md:grid sm:grid-cols-1 md:grid-cols-2 grid-rows-4 gap-8 mt-8 md:mt-0 overflow-hidden"
            >
                <motion.div variants={item} className="col-start-2 row-start-1 row-end-3 ">
                    <Image className='rounded-xl' aria-label='Related Image' width={423} height={600} src='https://picsum.photos/id/49/282/408' alt="Image about me" />
                </motion.div>
                <motion.div variants={item} className="row-start-2 row-end-4 ">
                    <Image className='rounded-xl' aria-label='Related Image' width={423} height={600} src='https://picsum.photos/id/59/282/408' alt="Image about me" />
                </motion.div>
                <motion.div variants={item} className="col-start-2 row-start-3 row-end-5">
                    <Image className='rounded-xl' aria-label='Related Image' width={423} height={600} src='https://picsum.photos/id/69/282/408' alt="Image about me" />
                </motion.div>
            </motion.div>
        </section>
  )
}
