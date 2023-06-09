import React from 'react'
import { Chevron, DezignLogo } from '../icons'
import { NavButton } from '../NavButton'
import { type NavButtonProps } from '@/interfaces/interfaces'
import { MobileMenu } from '../MobileMenu'

const links: NavButtonProps[] = [{
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
                            <NavButton title={title} id={id} key={title} />
                        ))
                    }
                </nav>
                <MobileMenu/>
            </header>
            <div>
                <h1
                    className='text-h1 font-light text-neutral-2 text-center leading-tight'
                >I&apos;m a designer specialising in <span className='font-medium text-neutral-1'>UI/UX</span> and <span className='font-medium text-neutral-1'>Interaction Design</span></h1>
            </div>
            <div className='mx-auto mb-10 animate-bounce'>
                <Chevron />
            </div>
        </section>
  )
}
