import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Link to='/Cart' className='nav-links' onClick={closeMobileMenu}
              >
              <i class="fa-solid fa-cart-shopping fa-2x"></i>
              </Link>
            </li> 
              

          </ul>
          <Button variant="primary" onClick={handleShow}>LOGIN</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address: </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                  <Form.Label>Example textarea: </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
        </Modal>
        </div>
      </nav>

  

    </>
  );
}

export default Navbar;

