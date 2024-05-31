import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Wallwise</div>
        <ul className="nav-menu">
          <li>services</li>
          <li>hall of fame</li>
          <li>about Us</li>
          <li className='nav-contact'>contact</li>
        </ul>
    </div>
  );
};

export default Navbar;
