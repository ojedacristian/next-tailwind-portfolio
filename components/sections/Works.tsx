import { type Work } from '@/interfaces/interfaces'
import { WorkCard } from '../../components'

const works: Work[] = [
  {
    title: 'Real Estate Template',
    image: '/work1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
    category: 'Website Design'
  },
  {
    title: 'Plant Identification App',
    image: '/work2.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
    category: 'Mobile App'
  },
  {
    title: 'Smart Home App',
    image: '/work3.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
    category: 'Mobile App'
  },
  {
    title: 'Logo Animation',
    image: '/work4.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
    category: 'Animation'
  }
]

export const Works: React.FC = () => {
  return (
    <section id='works' className="lg:pt-20">
          <h2 className='text-h2 font-light text-neutral-2'>Selected <b className='text-neutral-1'>Works</b></h2>
      {
        works.map((work, i) => (
          <>
            <WorkCard key={work.title} work={work} align={ Boolean(i % 2)} />
            <hr className="w-3/4 mx-auto border border-gray-800 mt-0 lg:invisible" />
          </>
        ))
      }
    </section>
  )
}
