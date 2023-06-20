'use client'

import React, { useState } from 'react'
import { BehanceIcon, DezignLogo, DribbbleIcon, LinkedinIcon, MailIcon } from './icons'
import { type NavButtonProps } from '@/interfaces/interfaces'
import { NavButton } from './NavButton'
import { motion, AnimatePresence } from 'framer-motion'

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
      delay: 0.5
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
                <button className="flex items-center text-neutral-1 p-3" onClick={() => {
                  setIsOpen(true)
                  window.document.body.classList.add('overflow-hidden')
                }}>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <AnimatePresence>

                {
                    isOpen &&
                    <div className="navbar-menu relative z-50" id='mobilemenu' >
                        <div className="navbar-backdrop fixed inset-0 bg-black opacity-25" onClick={() => {
                          window.document.body.classList.remove('overflow-hidden')
                          setIsOpen(false)
                        }} ></div>
                        <motion.nav
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        variants={navVariant}
                            className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-neutral-950 border-r border-neutral-700 overflow-y-auto">
                            <div className="flex items-center justify-between mb-8">
                                <DezignLogo />
                                <motion.button
                                    whileHover={{ rotate: 180, scale: 1.2 }}
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
                            <div>
                                <ul>
                                    {
                                        links.map(({ id, title }) => (
                                            <motion.li className="mb-1" key={title}
                                                variants={navVariantItem}
                                            >
                                                <NavButton title={title} id={id} className='block p-4 text-sm font-semibold text-neutral-1 hover:bg-gray-900 hover:text-primary rounded'
                                                    fn={toggleMenu}
                                                />
                                            </motion.li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <div className='flex justify-around items-center px-8'>
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
                                </div>
                                <p className="my-4 text-sm text-center text-gray-400">
                                    <span>Copyright © 2023</span>
                                </p>
                            </div>
                        </motion.nav>
                    </div>

                }
            </AnimatePresence>

        </nav>
  )
}
