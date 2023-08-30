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
                <p className="font-light text-sm text-neutral-2 text-center">
                    Design by <b className="text-neutral-1"><a href="https://www.figma.com/community/file/1107859971007623263/Portfolio">Srinivas Dezign</a></b> <br />
                </p>
                <p className="font-light text-body text-neutral-2 text-center">
                    Developed by <a href="https://cristianojeda.com.ar" target='_blank' className='text-neutral-1 font-bold'>Cristian Ojeda</a>
                </p>
            </motion.div>
        </motion.section>
  )
}
