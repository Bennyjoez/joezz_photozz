import Services from "../components/services/Services";

export default function ServicesPage() {
  return (
    <>
      <div className="bg-container">
        <div></div>
        <div></div>
      </div>
      <div className="services-page-hero">
        <aside className="left">
          <div className="services-description">
            <p>Learn more about our <span>services</span></p>
          </div>
        </aside>
        <aside>
          <Services />
        </aside>
      </div>
    </>
  );
}
