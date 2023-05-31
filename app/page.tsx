import { AirbnbIcon, Chevron, GoogleIcon } from '@/components/icons'
import Image from 'next/image'
import WorkCard from '../components/WorkCard';

interface workCard {
  title: string,
  image: string,
  desc: string,
  category: string,
  
}

const works: workCard[] = [
  {
    title: 'Real Estate Template',
    image:'https://picsum.photos/600/500',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
    category:'Website Design'
  },
  {
    title: 'Plant Identification App',
    image:'https://picsum.photos/600/500',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
    category:'Mobile App'
  },
  {
    title: 'Real Estate Template',
    image:'https://picsum.photos/600/500',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
    category:'Website Design'
  },
  {
    title: 'Logo Animation',
    image:'https://picsum.photos/600/500',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
    category:'Animation'
  } 
]

export default function Home() {
  return (
    <div className='bg-black min-h-screen'>
      <main
        className="xl:container mx-auto px-8">
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
            <Chevron/>
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
          <h2 className='text-4xl font-light text-gray-400'>Selected <b className='text-white'>Works</b></h2>
          <WorkCard />
        </section>
      </main>
    </div>
  )
}
