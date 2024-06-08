
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ReactPlayer from 'react-player';
import logo from '../../assets/free-color-painting-wall-service-gif.gif'
import './HeroImageCard.css'
const HeroImageCard = () => {
  return (

    <img src={logo} className='hero-image' alt="loading..." />
    // <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
    //   <ReactPlayer
    //     url="https://drive.google.com/file/d/1c98hZbQGirsM28UT-mNdliZp0nmNva-N/view?usp=drive_link"
    //     controls
    //     width="100%"
    //     height="auto"
    //   />
    // </div>
    
    
    
    
    // <Box
    //   component="ul"
    //   sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    // >
    //   <Card component="li" sx={{ minWidth: 550, minHeight: 450, flexGrow: 1 }}>
    //     <CardCover>
    //       <video
    //         autoPlay
    //         loop
    //         muted
    //       >
    //         <source
    //         //   src="https://assets.codepen.io/6093409/river.mp4"
    //         src="https://drive.google.com/file/d/1c98hZbQGirsM28UT-mNdliZp0nmNva-N/view?usp=drive_link"
    //           type="video/mp4"
    //         />
    //       </video>
    //     </CardCover>
    //     <CardContent>
    //       <Typography
    //         level="body-lg"
    //         fontWeight="lg"
    //         textColor="#fff"
    //         mt={{ xs: 12, sm: 18 }}
    //       >
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </Box>





    // <Card sx={{ minHeight: '280px', width: 320 }}>
    //           <CardCover>
    //             <img
    //               src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
    //               loading="lazy"
    //               alt=""
    //             />
    //           </CardCover>
    //           <CardCover
    //             sx={{
    //               background:
    //                 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
    //             }}
    //           />
    //           {/* <CardContent sx={{ justifyContent: 'flex-end' }}>
    //             <Typography level="title-lg" textColor="#fff">
    //               Yosemite National Park
    //             </Typography>
    //             <Typography startDecorator={<LocationOnRoundedIcon />} textColor="neutral.300" >California, USA</Typography>
    //           </CardContent> */}
    //         </Card>
  )
}

export default HeroImageCard