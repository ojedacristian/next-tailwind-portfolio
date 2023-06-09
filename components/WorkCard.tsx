import { type Work } from '@/interfaces/interfaces'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from './icons'

interface WorkCardProps {
  align: boolean
  work: Work
}

export const WorkCard: React.FC<WorkCardProps> = ({ align, work }) => {
  return (
    <article className={`flex flex-col ${align ? 'md:flex-row-reverse' : 'md:flex-row'} my-14 lg:my-24 text-neutral-2`}>
      <Image className='rounded-3xl' width={594} height={490} src={work.image} alt="" />
      <div className={`flex flex-col pb-8 ${align ? 'text-right pr-8 items-end' : 'text-left md:pl-8'} md:justify-end md:pb-0`}>
        <h3 className='uppercase py-4 text-neutral-1 text-h5'>{work.title}</h3>
        <h3 className='text-h3 font-light leading-normal'>Lorem ipsum dolor sit amet, consectetur <b className='text-neutral-1'> adipiscing elit. Ultrices lorem non feugiat egestas amet.</b></h3>
        <p className='my-6 font-light text-body'>{work.category}</p>
        <button className={`group uppercase flex justify-center p-2 rounded-full w-44 border text-neutral-1 border-neutral-2 text-h5 hover:bg-gradient-to-tl from-purple-600 to-pink-600 transition-all hover:scale-110 ${align ? 'hover:-translate-x-3' : 'hover:translate-x-3'} hover:border-white`}>
          <p>View Work</p>
          <div className="collapse group-hover:visible">
            <ArrowRight />
          </div>
          <div className="group-hover:collapse">
            <ChevronRight />
          </div>
        </button>
      </div>
    </article>
  )
}
