import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnersBanner from './components/PartnersBanner'
import Process from './components/Process'
import Expertise from './components/Expertise'
import Portfolio from './components/Portfolio'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PartnersBanner />
      <Process />
      <Expertise />
      <Portfolio />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
