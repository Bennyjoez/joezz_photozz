import BookBtn from "./BookBtn";

export default function Hero() {
  return (
    <div className='hero'>
      <div className='tile tilt-1'></div>
      <div className='tile tilt-2'></div>
      <div className='tile tilt-3'></div>
      <div className='tile description'>
        <p>Mark all your events</p>
        <h3>Anywhere, Everywhere, We are there</h3>
        <BookBtn />
      </div>
    </div>
  )
}
