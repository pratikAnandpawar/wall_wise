import './Footer.css'
import { FaInstagramSquare,FaYoutubeSquare,FaFacebookSquare,FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
        <footer>
        <header>
            <h2>WALLWISE</h2>
            <p>"All Rights Reserverd"</p>
            <ul class='icons'>
                <FaInstagramSquare class='icon'/>
                <FaYoutubeSquare class='icon'/>
                <FaFacebookSquare class='icon'/>
                <FaLinkedin class='icon'/>
            </ul>
        </header>
        <aside>
            <ul class='category'>
            <li>
                <h3>Project</h3>
            </li>
            <li>Houses</li>
            <li>Rooms</li>
            <li>Flats</li>
            <li>Apartments</li>
            </ul>
            <ul class='category'>
            <li>
                <h3>Company</h3>
            </li>
            <li>Objective</li>
            <li>Capital</li>
            <li>Security</li>
            <li>Selling</li>
            </ul>
            <ul class='category'>
            <li>
                <h3>Movement</h3>
            </li>
            <li>Movement</li>
            <li>Support us</li>
            <li>Pricing</li>
            <li>Renting</li>
            </ul>
            <ul class='category'>
            <li>
                <h3>Help</h3>
            </li>
            <li>Privacy</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Blog</li>
            </ul>
        </aside>
        </footer>
  )
}

  
{/* <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}

export default Footer;