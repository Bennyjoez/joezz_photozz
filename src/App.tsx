import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/services/Services'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <h2 className='heading'>Our Services</h2>
      <Services />
    </>
  )
}

export default App
