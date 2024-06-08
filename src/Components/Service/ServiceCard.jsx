import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const ServiceCard = (props) => {
  return (
    <Card sx={{ minHeight: '280px', width: 320}}>
    <CardCover>
      <img
        src={props.img}
        loading="lazy"
        alt=""
      />
    </CardCover>
    <CardCover
      sx={{
        background:
        'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
      }}
    />
    <CardContent sx={{ justifyContent: 'flex-end' }}>
      <Typography level="title-lg" textColor="#fff">
        {props.service}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default ServiceCard;