import Hero from "../components/Hero";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <h2 className='heading'>Our Services</h2>
      <Services />
    </div>
  )
}
