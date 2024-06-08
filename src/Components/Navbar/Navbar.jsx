import './Navbar.css';
import Link from '@mui/joy/Link';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">WALLWISE</div>
      {/* <div className="nav-logo"><p>Wallwise</p><blockquote>- est. 2000 -</blockquote></div> */}
        <ul className="nav-menu">
        <Link
          sx={{ borderRadius: '5px' }}
          class="nav-link"
          color="white"
          disabled={false}
          level="title-md"
          underline="none"
          variant="outlined">Services</Link>
        <Link
          sx={{ borderRadius: '5px' }}
          class="nav-link"
          color="white"
          disabled={false}
          level="title-md"
          underline="none"
          variant="soft">Hall Of Fame</Link>
        <Link
          sx={{ borderRadius: '5px' }}
          class="nav-link"
          color="white"
          disabled={false}
          level="title-md"
          underline="none"
          variant="soft">About Us</Link>
          <li className='nav-contact'>Contact</li>
          <li className='nav-estimate-savings'>Estimate Cost</li>
        </ul>
    </div>
  );
};

export default Navbar;
