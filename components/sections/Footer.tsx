

export const Footer = () => {
    return(
        <section id="footer" className="flex items-center flex-col pt-20 pb-10 h-96 justify-between">
            <div className="text-center">
                <h3 className="text-6xl"> <span className="font-light text-neutral-2">Get</span> in Touch</h3>
                <p className="text-neutral-2 text-lg font-light">So that we can talk more about...</p>
            </div>
            <div>
                {/* Logos                 */}
                logos
            </div>
            <div>
                <p className="font-light text-neutral-2">Made with ❣️ by <b className="text-neutral-1">Srinivas Dezign</b></p>
            </div>
        </section>
    )
}
