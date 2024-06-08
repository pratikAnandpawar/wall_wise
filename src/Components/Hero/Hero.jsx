import './Hero.css'
import HeroImageCard from './HeroImageCard';
import HeroTitleCard from './HeroTitleCard';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-items">
        <div id="hero-item1" className="hero-item"><HeroTitleCard/></div>
        <div id="hero-item2" className="hero-item"><HeroImageCard/></div>
      </div>
    </div>
  )
}

export default Hero;
