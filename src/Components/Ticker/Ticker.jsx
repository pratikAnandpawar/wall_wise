import asianPaintsPNG from '../../assets/Asian Paints.png'
import Marquee from 'react-fast-marquee'
import './Ticker.css'

const Ticker = () => {
  return (
    <div className="marquee-container">
      <div className="title">
        <h1>Our Trusted Partners</h1>
      </div>

      <div>
        <Marquee direction="left" speed={40} delay={5} pauseOnHover={true} >
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div >
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div >
          <div className="image_wrapper">
            <img src={asianPaintsPNG} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Ticker