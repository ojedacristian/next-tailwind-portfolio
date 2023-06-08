import { AirbnbIcon, GoogleIcon, MicrosoftIcon, FedexIcon } from '@/components/'

export const Clients: React.FC = () => {
  return (
    <section id='clients' className='pt-20 pb-32'>
      <div className='text-h2 font-light leading-snug text-neutral-2 text-center
          md:w-2/4 md:text-left
          '>
        <h2>Some of <b className='text-neutral-1'>the clients I have designed for</b></h2>
      </div>
      <div className='grid sm:grid-cols-2 sm:grid-rows-2 gap-16
          lg:flex lg:justify-between lg:flex-row pt-24'>
        <div className='mx-auto'>
          <AirbnbIcon />
        </div>
        <div className="mx-auto">
          <GoogleIcon />
        </div>
        <div className='mx-auto'>
          <MicrosoftIcon />
        </div>
        <div className='mx-auto'>
          <FedexIcon />
        </div>
      </div>
    </section>
  )
}
