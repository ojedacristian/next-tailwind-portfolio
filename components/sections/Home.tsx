import React from 'react'
import { Chevron, DezignLogo } from '../icons'

export const Home = () => {
    return (
        <section id='home' className='h-screen flex justify-between flex-col'>
            <header
                className='flex justify-between py-5 text-h5'
            >
                <DezignLogo />
                <nav
                    className='flex justify-between w-48'
                >
                    <button
                        className='uppercase hover:text-primary border-b-pink-400 hover:border-b-2'>
                        Home
                    </button>
                    <button className='uppercase hover:text-primary border-b-pink-400 hover:border-b-2'>Work</button>
                    <button className='uppercase hover:text-primary border-b-pink-400 hover:border-b-2'>About  </button>
                </nav>
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
