import Service from "./Service";
import servicesOffered from "../../data/servicesData";

export default function Services() {
  return (
    <div className="services">
      {servicesOffered.map(({ title, description, img }, i) => {
        return (
          <Service title={title} description={description} img={img} count={i+1} />
        )
      })}
    </div>
  );
}
