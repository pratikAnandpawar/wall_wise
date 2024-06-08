
import ServiceCard from './ServiceCard';
import './Service.css'
import interiorImage from '../../assets/Interior Painting.png'
import exteriorImage from '../../assets/Exterior Painting.PNG'

const Service = () => {

   const interiorPaintingText = "Interior Painting"
   const exteriorPaintingText = "Exterior Painting"

  return (
    <div>
        <div className="title">
            <h1>Our Service's</h1>
        </div>

        <div className="service-card-container">
            <div className="service-card-item">
                <ServiceCard className="service-card-item" img={interiorImage} service={interiorPaintingText}/>
            </div>
            <div className="service-card-item">
                <ServiceCard className="service-card-item" img={exteriorImage} service={exteriorPaintingText}/>
            </div>
        </div>
    </div>
  )
}

export default Service;