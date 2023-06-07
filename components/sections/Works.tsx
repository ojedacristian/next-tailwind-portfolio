import { Work } from "@/interfaces/interfaces"
import { WorkCard } from "../../components"

const works: Work[] = [
    {
      title: 'Real Estate Template',
      image:'https://picsum.photos/600/500',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
      category:'Website Design'
    },
    {
      title: 'Plant Identification App',
      image:'https://picsum.photos/id/82/600/500',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
      category:'Mobile App'
    },
    {
      title: 'Smart Home App',
      image:'https://picsum.photos/id/60/600/500',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
      category:'Mobile App'
    },
    {
      title: 'Logo Animation',
      image:'https://picsum.photos/id/63/600/500',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.',
      category:'Animation'
    } 
  ]

export const Works = () => {
    return (
        <section id='works' className="md:pt-20">
          <h2 className='text-h2 font-light text-neutral-2'>Selected <b className='text-neutral-1'>Works</b></h2>
          {
            works.map( (work, i) => (
              <WorkCard key={work.title} work={work} align={i} />
            )) 
          }
        </section>
    )
}
