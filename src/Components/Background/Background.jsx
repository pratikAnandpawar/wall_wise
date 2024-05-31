import './Background.css'
import backgroundImage from '../../assets/background_image2.jpg'

export const Background = ({heroCount}) => {
    return <img src={backgroundImage} alt="" className="background" />
}
