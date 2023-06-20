'use client'
import { customVariant, customVariantItem } from '../animations'
import { MailIcon, BehanceIcon, DribbbleIcon, LinkedinIcon } from '../icons'
import { motion } from 'framer-motion'
export const Footer: React.FC = () => {
  return (
        <motion.section
            variants={customVariant}
            initial='hidden'
            whileInView='show'
        id="footer" className="flex items-center flex-col pt-14 pb-10 h-96 justify-between">
            <div className="text-center">
                <motion.h3 variants={customVariantItem} custom={1} className="text-h1"> <span className="font-light text-neutral-2">Get</span> in Touch.</motion.h3>
                <motion.p variants={customVariantItem} custom={2} className="text-neutral-2 text-body font-light">So that we can talk more about...</motion.p>
            </div>
            <motion.div variants={customVariantItem} custom={3} className='flex justify-between items-center w-5/6 max-w-sm'>
                <a href="mailto:cristianojeda.maimo@gmail.com">
                    <MailIcon />
                </a>
                <a href="https://behance.net" target='_blank'>
                    <BehanceIcon />
                </a>
                <a href="https://dribbble.com" target='_blank'>
                    <DribbbleIcon />
                </a>
                <a href="https://linkedin.com" target='_blank'>
                    <LinkedinIcon />
                </a>
            </motion.div>
            <motion.div
            variants={customVariantItem}
            custom={4}
            >
                <p className="font-light text-body text-neutral-2">Made with <span className='text-blue-700'>❣️</span> by <b className="text-neutral-1">Srinivas Dezign</b></p>
            </motion.div>
        </motion.section>
  )
}
