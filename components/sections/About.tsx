import Image from 'next/image'

export const About: React.FC = () => {
  return (
        <section id="about" className="h-screen flex items-center py-24">
            <article className="mr-8 w-1/2">
                <h4 className="uppercase text-h4">A bit about me</h4>
                <h3 className="text-neutral-2 text-h3 font-light leading-normal">
                    I am a UI/UX designer who is passionate about creating <b className="text-neutral-1">beautiful and joyful digital experiences. Besides design, I love music, games and travelling.</b>
                </h3>
            </article>
            <div
                className="w-1/2 grid grid-cols-2 grid-rows-4 gap-8"
            >
                <div className="col-start-2 row-start-1 row-end-3">
                    <Image className='rounded-xl' width={282} height={408} src='https://picsum.photos/id/49/282/408' alt="" />
                </div>
                <div className="row-start-2 row-end-4">
                    <Image className='rounded-xl' width={282} height={408} src='https://picsum.photos/id/59/282/408' alt="" />
                </div>
                <div className="col-start-2 row-start-3 row-end-5">
                    <Image className='rounded-xl' width={282} height={408} src='https://picsum.photos/id/69/282/408' alt="" />
                </div>
            </div>
        </section>
  )
}
