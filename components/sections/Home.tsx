import React from 'react'
import { DezignLogo } from '../icons'
import { NavButton } from '../NavButton'
import { type NavButtonProps } from '@/interfaces/interfaces'
import { MobileMenu } from '../MobileMenu'
import { ArrowDown } from '../ArrowDown'

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
//   {
//     title: 'Contact',
//     id: 'contact'
//   }
]

export const Home: React.FC = () => {
  return (
        <section id='home' className='h-screen flex justify-between flex-col'>
            <header
                className='flex justify-between py-5 text-h5'
            >
                <DezignLogo />
                <nav
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
                </nav>
                <MobileMenu links={links}/>
            </header>
            <div>
                <h1
                    className='text-h1 font-light text-neutral-2 text-center leading-tight'
                >I&apos;m a designer specialising in <span className='font-medium text-neutral-1'>UI/UX</span> and <span className='font-medium text-neutral-1'>Interaction Design</span></h1>
            </div>
            <div className='mx-auto mb-10 animate-bounce'>
                <ArrowDown/>
            </div>
        </section>
  )
}
