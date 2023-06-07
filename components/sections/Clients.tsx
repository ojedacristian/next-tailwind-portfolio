import { AirbnbIcon, GoogleIcon, MicrosoftIcon, FedexIcon} from '@/components/'

export const Clients = ()=> {
    return (
        <section id='clients' className='pt-20 pb-32'>
          <div className='text-h2 font-light w-2/4 leading-snug text-neutral-2'>
            <h2>Some of <b className='text-neutral-1'>the clients I have designed for</b></h2>
          </div>
          <div className='flex justify-between pt-24'>
            <AirbnbIcon />
            <GoogleIcon />
            <MicrosoftIcon />
            <FedexIcon/>
          </div>
        </section>
    )
}