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
      <nav className='navbar navbar-expand navbar-light  flex-column'>
        <Link to='/' onClick={closeMobileMenu} className="navbar-brand mx-auto pt-4">
          <img src='images/logo2png.png' width="180" height="150" className="d-inline-block" alt="" />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse flex-shrink-1">
          <ul className='navbar-nav' >
            <li className='nav-item ml-2 mr-3'>
              <Link
                to='/'
                className='nav-link'
                onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className='nav-item mr-3'>
              <Link
                to='/mariage'
                className='nav-link'
                onClick={closeMobileMenu}
              >
                Mariage
              </Link>
            </li>
            <li className='nav-item mr-3'>
              <Link
                to='/decoration'
                className='nav-link'
                onClick={closeMobileMenu}
              >
                Decoration
              </Link>
            </li>
            <li className='nav-item mr-2'>
              <Link
                to='/contact'
                className='nav-link'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
