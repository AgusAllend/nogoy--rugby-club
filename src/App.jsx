import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import InfiniteCarousel from "./components/InfiniteCarousel";
import Sponsors from "./components/Sponsors"
import HaceteSocio from "./components/HaceteSocio"
import Entrenamientos from "./components/Entrenamientos"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <div class="fixed -z-10 min-h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <main className="flex flex-col w-full">
        <Navbar/>
        <Hero/>
        <InfiniteCarousel/>
        <Entrenamientos/>
        <HaceteSocio/>
        <Sponsors/>
        <Footer/>
      </main>
    </>
  )
}

export default App
