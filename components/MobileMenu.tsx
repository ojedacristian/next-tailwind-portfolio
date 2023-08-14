'use client'

import React, { useState } from 'react'
import { BehanceIcon, DezignLogo, DribbbleIcon, LinkedinIcon, MailIcon } from './icons'
import { type NavButtonProps } from '@/interfaces/interfaces'
import { NavButton } from './NavButton'
import { motion, AnimatePresence } from 'framer-motion'
import { customVariantItem } from './animations'

interface MobileMenuProps {
  links: NavButtonProps[]
}

const navVariant = {
  hidden: {
    x: '-100%',
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delay: 0.5,
      duration: 0.2
    }
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

const navVariantItem = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0
  }
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (): void => {
    window.document.body.classList.remove('overflow-hidden')
    setIsOpen(state => !state)
  }

  return (
    <nav className="relative flex justify-between items-center lg:hidden">
      <div className="">
        <motion.button
        variants={customVariantItem}
        custom={1}
        className="flex items-center text-neutral-1 p-3 group hover:bg-white rounded-full" onClick={() => {
          setIsOpen(true)
          window.document.body.classList.add('overflow-hidden')
        }}>
          <svg className="block h-4 w-4 fill-current group-hover:fill-gray-900" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </motion.button>
      </div>
      <AnimatePresence>

        {
          isOpen &&
          <div className="navbar-menu relative z-50" id='mobilemenu' >
            <motion.nav
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={navVariant}
              className="fixed top-0 left-0 bottom-0 flex flex-col w-full py-6 px-6 bg-neutral-950 border-r border-neutral-700 overflow-y-hidden">
              <div className="flex items-center justify-between mb-8">
                <DezignLogo />
                <motion.button
                  whileHover={{ rotate: 180, scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                  className="navbar-close" onClick={() => {
                    window.document.body.classList.remove('overflow-hidden')
                    setIsOpen(false)
                  }}>
                  <svg className="h-6 w-6 text-neutral-2 cursor-pointer hover:text-neutral-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </motion.button>
              </div>
              <ul className='h-full flex flex-col justify-around m-14 items-center'>
                {
                  links.map(({ id, title }) => (
                    <motion.li className="mb-1" key={title}
                      variants={navVariantItem}
                    >
                      <NavButton title={title} id={id} className='block p-4 text-4xl text-neutral-1 hover:line-through'
                        fn={toggleMenu}
                      />
                    </motion.li>
                  ))
                }
              </ul>
              <motion.div
              variants={navVariant}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="mt-auto">
                <div className='flex justify-around items-center px-8 w-1/2 mx-auto mb-4'>
                  <motion.a variants={navVariantItem} href="mailto:cristianojeda.maimo@gmail.com">
                    <MailIcon />
                  </motion.a>
                  <motion.a variants={navVariantItem} href="https://behance.net" target='_blank'>
                    <BehanceIcon />
                  </motion.a>
                  <motion.a variants={navVariantItem} href="https://dribbble.com" target='_blank'>
                    <DribbbleIcon />
                  </motion.a>
                  <motion.a variants={navVariantItem} href="https://linkedin.com" target='_blank'>
                    <LinkedinIcon />
                  </motion.a>
                </div>

              </motion.div>
            </motion.nav>
          </div>

        }
      </AnimatePresence>

    </nav>
  )
}
