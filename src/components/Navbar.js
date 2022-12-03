import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/myob new4.jpg" className="photo" alt=""></img>
        
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Aboutus' className='nav-links' onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Blog' className='nav-links' onClick={closeMobileMenu}
              >
                BLOG
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Software' className='nav-links' onClick={closeMobileMenu}
              >
                SOFTWARES
              </Link>
            </li>

            <li className='nav-links'>
              
                <div class="dropdown">
                  <div class="menu-button">SUPPORT ▼</div>
                  <div class="menu-content">
                    <ul className='list_try'>
                  <li><Link to='/SupportNote' className='nav-links' onClick={closeMobileMenu} >Support Note</Link></li>
                  <li><Link to='/SupportVideo' className='nav-links' onClick={closeMobileMenu} >Support Video</Link></li>
                  </ul>
                  </div>
                </div>
              
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}
              >
              <i class="fa-solid fa-cart-shopping fa-2x"></i>
              </Link>
            </li>

          </ul>
          {button && <Button buttonStyle='btn--outline'>
          <Link to='/Psggrant' className='nav-links' onClick={closeMobileMenu}>
          LOG IN </Link></Button>}


        </div>

      </nav>
  
    </>
  );
}

export default Navbar;
