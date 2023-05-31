import { Work } from "@/interfaces/interfaces";
import Image from "next/image";

interface WorkCardProps {
    align: number,
    work: Work
}

export const WorkCard: React.FC<WorkCardProps> = ({align, work }) => {
    return (
        <article className='flex my-24 text-neutral-2'>
            {
                align % 2
                    ?
                    <>
                        <div className='flex flex-col justify-end pl-8'>
                            <h3 className='uppercase py-4 text-neutral-1'>{ work.title }</h3>
                            <p className='text-4xl font-light leading-normal'>Lorem ipsum dolor sit amet, consectetur <b className='text-neutral-1'> adipiscing elit. Ultrices lorem non feugiat egestas amet.</b></p>
                            <h4 className='my-6 font-light text-lg'>{ work.category}</h4>
                            <button className='uppercase p-2 rounded-full w-40 border-2 text-neutral-1 border-neutral-2 text-base'>
                                View Work
                            </button>
                        </div>
                        <Image className='rounded-3xl' width={600} height={500} src={work.image} alt="" />
                    </>
                    :
                    <>
                        <Image className='rounded-3xl' width={600} height={500} src={work.image} alt="" />
                        <div className='flex flex-col justify-end pl-8'>
                            <h3 className='uppercase py-4 text-neutral-1'>{ work.title }</h3>
                            <p className='text-4xl font-light leading-normal'>Lorem ipsum dolor sit amet, consectetur <b className='text-neutral-1'> adipiscing elit. Ultrices lorem non feugiat egestas amet.</b></p>
                            <h4 className='my-6 font-light text-lg'>{ work.category}</h4>
                            <button className='uppercase p-2 rounded-full w-40 border-2 text-neutral-1 border-neutral-2 text-base'>
                                View Work
                            </button>
                        </div>
                    </>
            }
        </article>
    )
}