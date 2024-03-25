import Service from "./Service";
import videoGraphyImg from "../../../public/joez_photozz_web/23.jpg"
import eventPhotography from "../../../public/joez_photozz_web/24.jpg"
import potraitPhotography from "../../../public/joez_photozz_web/25.jpg"

export default function Services() {
  return (
    <div className="services">
      <Service title="Potrait Photography" description="Get amazing portraits in matter of minutes. Book 2 days prior." img={potraitPhotography} />
      <Service title="Event Photography" description="Capture your events in the most amazing way. Book before a week." img={eventPhotography} />
      <Service title="Videography" description="Your life and events as cinema. Top notch filmmaking for your budget." img={videoGraphyImg} />
    </div>
  )
}
