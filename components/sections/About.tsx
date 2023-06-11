import Image from 'next/image'

export const About: React.FC = () => {
  return (
        <section id="about" className="flex items-center py-24">
            <article
                className="mr-0 text-center sm:mr-8 sm:w-1/2 sm:text-left">
                <h4 className="uppercase text-h4 mb-2 sm:mb-0">A bit about me</h4>
                <h3 className="text-neutral-2 text-h3 font-light leading-normal">
                    I am a UI/UX designer who is passionate about creating <b className="text-neutral-1">beautiful and joyful digital experiences. Besides design, I love music, games and travelling.</b>
                </h3>
            </article>
            <div
                className="sm:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 grid-rows-4 gap-8 collapse sm:visible"
            >
                <div className="col-start-2 row-start-1 row-end-3">
                    <Image className='rounded-xl' width={282} height={408} src='https://picsum.photos/id/49/282/408' alt="" />
                </div>
                <div className="row-start-2 row-end-4 collapse md:visible">
                    <Image className='rounded-xl' width={282} height={408} src='https://picsum.photos/id/59/282/408' alt="" />
                </div>
                <div className="col-start-2 row-start-3 row-end-5">
                    <Image className='rounded-xl' width={282} height={408} src='https://picsum.photos/id/69/282/408' alt="" />
                </div>
            </div>
        </section>
  )
}
