import shootImage from "../../public/ladyshoot.jpeg";

export default function About() {
  return (
    <section id="about">
      <div className="custom-shape-divider-bottom-1708012441">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <aside className="about-description">
        At Joezz Photography, we believe that every moment tells a unique story.
        Through the lens, we capture the beauty, emotion, and authenticity of
        your special occasions, turning them into timeless memories. Our team of
        passionate photographers is dedicated to creating a comfortable and
        enjoyable experience for our clients. We go beyond capturing images; we
        strive to narrate your story with creativity and artistry. From intimate
        portraits to grand celebrations, our goal is to provide you with
        stunning visuals that resonate with the essence of who you are. We
        understand the importance of preserving life's precious moments, and we
        consider it an honor to be part of your journey. Explore our portfolio,
        and let the images speak for themselves. We look forward to being your
        trusted storytellers, turning your moments into cherished memories.
        <p>
          Thank you for considering Joezz Photography for your photographic
          needs 🌟
        </p>
      </aside>
      <aside>
        <div>
          <img src={shootImage} alt="Lady on a shoot" />
        </div>
      </aside>
    </section>
  );
}
