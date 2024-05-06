import Service from "./Service";
import servicesOffered from "../../data/servicesData";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Services() {
  const [onServicePage, setOnServicePage] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/services") {
      setOnServicePage(true);
    }
  }, [location]);

  if (onServicePage) {
    return (
      <div className="services-grid">
        {servicesOffered.map(({ title, description, img }, i) => {
          return (
            <Service
              title={title}
              description={description}
              img={img}
              count={i + 1}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="services">
      {servicesOffered.map(({ title, description, img }, i) => {
        return (
          <Service
            title={title}
            description={description}
            img={img}
            count={i + 1}
          />
        );
      })}
    </div>
  );
}
