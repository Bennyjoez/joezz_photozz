import shootImage from '../../public/joez_photozz_web/3.jpg';

export default function About() {
  return (
    <section id='about'>
      <aside className='about-description'>At Joezz Photography, we believe that every moment tells a unique story. Through the lens, we capture the beauty, emotion, and authenticity of your special occasions, turning them into timeless memories.

      Our team of passionate photographers is dedicated to creating a comfortable and enjoyable experience for our clients. We go beyond capturing images; we strive to narrate your story with creativity and artistry.

      From intimate portraits to grand celebrations, our goal is to provide you with stunning visuals that resonate with the essence of who you are. We understand the importance of preserving life's precious moments, and we consider it an honor to be part of your journey.

      Explore our portfolio, and let the images speak for themselves. We look forward to being your trusted storytellers, turning your moments into cherished memories.

      <p>Thank you for considering Joezz Photography for your photographic needs 🌟</p>
      </aside>
      <aside className='image-container'>
        <div>
          <img src={shootImage} alt="Lady on a shoot" />
        </div>
      </aside>
    </section>
  )
}
