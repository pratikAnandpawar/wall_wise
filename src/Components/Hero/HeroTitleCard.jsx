import Button from '@mui/joy/Button';
import './HeroTitleCard.css'

const HeroTitleCard = () => {
  return (
        <div class="card">
            <p>Ultimate Destination for</p>
            <p><strong>HOUSE PAINTING</strong> & <strong>WATERPROOFING.</strong></p>
            <p class="card-footer">We Paint Your Dreams.</p>
            <div className="hero-buttons">
                <a href="" class="original-button">Services</a>
                <a href="" class="original-button">Estimate Cost</a>
            {/* <Button
                color="neutral"
                onClick={function(){}}
                size="md"
                variant="outlined"
            >Services</Button>
            <Button
                color="neutral"
                onClick={function(){}}
                size="md"
                variant="outlined"
            >Estimate Cost</Button> */}
            </div>
        </div>
  )
}

export default HeroTitleCard;