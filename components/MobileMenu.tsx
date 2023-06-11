'use client'

import React from 'react'
import { BehanceIcon, DezignLogo, DribbbleIcon, LinkedinIcon, MailIcon } from './icons'
import { type NavButtonProps } from '@/interfaces/interfaces'
import { NavButton } from './NavButton'

const toggleMenu = (): void => {
  const menu = document.getElementById('mobilemenu')
  menu?.classList.toggle('hidden')
}

interface MobileMenuProps {
  links: NavButtonProps[]
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  return (
        <nav className="relative flex justify-between items-center lg:hidden">
            <div className="">
                <button className="flex items-center text-neutral-1 p-3" onClick={toggleMenu}>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <div className="navbar-menu relative z-50 hidden" id='mobilemenu' >
                <div className="navbar-backdrop fixed inset-0 bg-black opacity-25" onClick={toggleMenu}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-neutral-950 border-r border-neutral-700 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <DezignLogo />
                        <button className="navbar-close" onClick={toggleMenu}>
                            <svg className="h-6 w-6 text-neutral-2 cursor-pointer hover:text-neutral-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            {
                                links.map(({ id, title }) => (
                                    <li className="mb-1" key={title}>
                                        <NavButton title={title} id={id} className='block p-4 text-sm font-semibold text-neutral-1 hover:bg-gray-900 hover:text-primary rounded'
                                            fn={toggleMenu}
                                        />
                                    </li>
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
                </nav>
            </div>
        </nav>
  )
}
