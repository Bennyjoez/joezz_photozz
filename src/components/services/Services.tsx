import Service from "./Service";
import sampleImg from "/sampleImg.jpg"

export default function Services() {
  return (
    <div className="services">
      <Service title="Potrait Photography" description="Get amazing portraits in matter of minutes. Book 2 days prior." img={sampleImg} />
      <Service title="Event Photography" description="Capture your events in the most amazing way. Book before a week." img={sampleImg} />
      <Service title="Videography" description="Your life and events as cinema. Top notch filmmaking for your budget." img={sampleImg} />
    </div>
  )
}
