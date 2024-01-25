import Form from "../components/Form";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <h2 className='heading'>Our Services</h2>
      <Services />
      <h2 className='heading'>Reviews</h2>
      <Reviews />
      <div>
        <h2 className='heading'>Book A Session</h2>
        <Form />
      </div>
    </div>
  )
}
