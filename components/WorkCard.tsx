import Image from "next/image";

export default function WorkCard () {
    return (
        <article className='flex my-24 text-neutral-2'>
            <Image className='rounded-3xl' width={600} height={500} src="https://picsum.photos/600/500" alt="" />
            <div className='flex flex-col justify-end pl-8'>
                <h3 className='uppercase py-4 text-neutral-1'>Real Estate Template</h3>
                <p className='text-4xl font-light leading-normal'>Lorem ipsum dolor sit amet, consectetur <b className='text-neutral-1'> adipiscing elit. Ultrices lorem non feugiat egestas amet.</b></p>
                <h4 className='my-6 font-light text-lg'>Website Design</h4>
                <button className='uppercase p-2 rounded-full w-40 border-2 text-neutral-1 border-neutral-2 text-base'>
                    View Work
                </button>
            </div>
        </article>
    )
}