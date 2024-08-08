import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo4.png';
import nav_underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    menuRef.current.style.right = isMenuOpen ? "-350px" : "0";
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false);
    menuRef.current.style.right = "-350px";   
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="" className="company-logo" />
      <img src={menu_open} onClick={toggleMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={toggleMenu} alt="" className='nav-mob-close' />
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={nav_underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={nav_underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => handleMenuClick("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={nav_underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => handleMenuClick("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={nav_underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={nav_underline} alt='' />}
        </li>
      </ul>
      
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
