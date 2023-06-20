'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { type NavButtonProps } from '@/interfaces/interfaces'
import { ArrowDown, MobileMenu, DezignLogo, NavButton, homeVariant, homeVariantItem } from '../'

const links: NavButtonProps[] = [
  {
    title: 'Home',
    id: 'home'
  },
  {
    title: 'Work',
    id: 'works'
  },
  {
    title: 'About',
    id: 'about'
  }
]

const linksMobileMenu: NavButtonProps[] = [
  ...links,
  {
    title: 'Clients',
    id: 'clients'
  }
]

export const Home: React.FC = () => {
  return (
        <motion.section
        variants={homeVariant}
        initial='hidden'
        animate='show'
        id='home' className='h-screen flex justify-between flex-col'>
            <header
                className='flex justify-between py-5 text-h5'
            >
                <motion.div
                    variants={homeVariantItem}
                    custom={0}
                >
                    <DezignLogo />
                </motion.div>
                <motion.nav
                    variants={homeVariantItem}
                    custom={1}
                    className='hidden
                        lg:flex justify-between w-48'
                >
                    {
                        links.map(({ title, id }: NavButtonProps) => (
                            <NavButton title={title} id={id} key={title}
                                className='uppercase text-neutral-1 hover:text-pink-700 border-b-pink-700 hover:border-b-2'
                            />
                        ))
                    }
                </motion.nav>
                <MobileMenu links={linksMobileMenu} />
            </header>
            <div>
                <motion.h1
                variants={homeVariantItem}
                custom={2.8}
                    className='text-h1 font-light text-neutral-2 text-center leading-tight'
                >I&apos;m a designer specialising in <span className='font-medium text-neutral-1'>UI/UX</span> and <span className='font-medium text-neutral-1'>Interaction Design</span></motion.h1>
            </div>
            <motion.div
                variants={homeVariantItem}
                custom={7}
                className='mx-auto mb-10 animate-bounce'>
                <ArrowDown />
            </motion.div>
        </motion.section>
  )
}
