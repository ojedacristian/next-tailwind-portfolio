import { Home, Clients, Works, About, Footer } from '../components/sections'

export default function App (): JSX.Element {
  return (
     <>
        <Home/>
        <Clients/>
        <Works/>
        <About/>
        <Footer />
    </>
  )
}
