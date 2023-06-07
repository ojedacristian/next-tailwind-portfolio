import { MailIcon, BehanceIcon, DribbleIcon, LinkedinIcon } from '../icons';


export const Footer = () => {
    return(
        <section id="footer" className="flex items-center flex-col pt-14 pb-10 h-96 justify-between">
            <div className="text-center">
                <h3 className="text-h1"> <span className="font-light text-neutral-2">Get</span> in Touch.</h3>
                <p className="text-neutral-2 text-body font-light">So that we can talk more about...</p>
            </div>
            <div className='flex justify-between items-center w-96'>
                <MailIcon/>
                <BehanceIcon/>
                <DribbleIcon/>
                <LinkedinIcon/>
            </div>
            <div>
                <p className="font-light text-body text-neutral-2">Made with <span className='text-blue-700'>❣️</span> by <b className="text-neutral-1">Srinivas Dezign</b></p>
            </div>
        </section>
    )
}
