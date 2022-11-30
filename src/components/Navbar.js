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
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}
              >
                BLOG
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}
              >
                SOFTWARES
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}
              >
                SUPPORT
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}
              >
              <i class="fa-solid fa-cart-shopping fa-2x"></i>
              </Link>
            </li>

          </ul>
          {button && <Button buttonStyle='btn--outline'>LOG IN  </Button>}
        </div>
      </nav>
  
    </>
  );
}

export default Navbar;
