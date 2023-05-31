import { AirbnbIcon, GoogleIcon } from '@/components/icons'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-black min-h-screen'>
      <main
        className="xl:container mx-auto">
        <section id='home' className='h-screen flex justify-between flex-col'>
          <header
            className='flex justify-between py-2'
          >
            <h1 className='text-white'>Logo </h1>
            <nav
              className='flex justify-between text-base'
            >
              <button className='px-4 uppercase'>Home</button>
              <button className='px-4 uppercase'>Work</button>
              <button className='px-4 uppercase'>About  </button>
            </nav>
          </header>
          <div className='w-9/12 mx-auto'>
            <h1
              className='text-6xl font-light text-gray-300 text-center leading-tight'
            >I'm a designer specialising in <span className='font-medium text-white'>UI/UX</span> and <span className='font-medium text-white'>Interaction Design</span></h1>
          </div>
          <div className='mx-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' fill="none">
              <path stroke="#E3E4E6" strokeLinecap="round" strokeLinejoin="round" stroke-width="2.67" d="m2 2 10 10L22 2" />
            </svg>
          </div>
        </section>
        <section id='clients' className='py-24'>
          <div className='text-5xl font-light w-2/4 leading-snug text-gray-500'>
            <h2>Some of <b className='text-white'>the clients I have designed for</b></h2>
          </div>
          <div className='flex justify-around py-24'>
            <AirbnbIcon />
            <GoogleIcon />
            <AirbnbIcon />
            <GoogleIcon />
          </div>
        </section>
        <section id='works'>
          <h2 className='text-4xl font-light text-gray-400 pb-12'>Selected <b className='text-white'>Works</b></h2>
          <article className='flex my-12'>
            <figure>
              <Image className='rounded-3xl' width={600} height={500} src="https://picsum.photos/600/500" alt="" />
            </figure>
            <div className='flex flex-col justify-end pl-8'>
              <h3 className='uppercase'>Real Estate Template</h3>
              <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.</span></p>
              <h4>Website Design</h4>
              <button className='uppercase p-2 rounded-full w-40 border-2 text-gray-400 border-gray-400'>
                View Work ▶️
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
