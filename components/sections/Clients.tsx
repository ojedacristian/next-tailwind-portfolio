import { AirbnbIcon, GoogleIcon, MicrosoftIcon, FedexIcon} from '@/components/'

export const Clients = ()=> {
    return (
        <section id='clients' className='py-24'>
          <div className='text-5xl font-light w-2/4 leading-snug text-neutral-2'>
            <h2>Some of <b className='text-neutral-1'>the clients I have designed for</b></h2>
          </div>
          <div className='flex justify-between py-24'>
            <AirbnbIcon />
            <GoogleIcon />
            <MicrosoftIcon />
            <FedexIcon/>
          </div>
        </section>
    )
}