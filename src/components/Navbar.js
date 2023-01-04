import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase"


function Navbar() {
  
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const register = () => {
    if (!firstname) alert("Please enter name");
    if (password === confirmpass) {
      registerWithEmailAndPassword(firstname, email, password);
      alert("Account successfully created")
    }
    else 
    alert("Password does not match")
  };

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);

  const handleShowLogin = () => {
    setShow(true);
    setShow1(false);
    setShow2(false);
  }
  const handleShowForgetPassword = () => {
    setShow1(true);
    setShow(false);
    setShow2(false);
  }
  const handleShowRegister = () => {
    setShow2(true);
    setShow1(false);
    setShow(false);
  }

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
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
          <Button variant="primary" onClick={handleShowLogin} className="loginbtn">LOGIN  </Button>

        <Modal show={show} onHide={handleClose} className="loginmodel">
          <Modal.Body>
              <Form>
                <div className="logininput">
                    <div className="leftlogin">
                      <img src="/images/MYOB_Logo.png" alt="" className="login_pic1"></img>
                      <div className="login_title">
                      
                        <Modal.Title><b className="title">WELCOME BACK</b></Modal.Title>
                        <div>Login using social networks</div>
                        <i class="fa-brands fa-google fa-3x" onClick={signInWithGoogle}></i>
                        <i class="fa-brands fa-square-facebook fa-3x"></i>
                        <i class="fa-brands fa-linkedin fa-3x"></i>
                        <div>------------------------------------or------------------------------------</div>
                      </div>
                      <br />
 
                        <div className="logininputtry">
                      
                          <label><b>Email Address: </b><input type="text" name="email" className="logininput1" /></label>
    
                          <label><b>Password: </b><input type="text" name="password" className="logininput1"/></label>
                         

                        </div>
                      <div className="submitting">

                        <div className="rmbmeandforget">
                        <label for="rememberMe"><input type="checkbox" value="lsRememberMe" id="rememberMe"/>Remember me </label>
                        <Link to='/' className='model-links' onClick={handleShowForgetPassword}>Forgot Password?</Link>
                        </div>

                        <br/>
                        <b><input type="submit" value="Login" className="submit"/></b>
                        <br />  
                        <div className="cracc">
                        New to Myob? 

                        <Link to='/' className='model-linkss' onClick={handleShowRegister}>Create Account</Link> 
                        </div>
                      </div>
                    </div>

                    <div className="rightlogin">
                  
                    <img src="/images/loginimage.gif" alt="" className="login_pic"></img>
                  </div>
                </div>
              </Form>
          </Modal.Body>
        </Modal>
        
       <Modal show={show1} onHide={handleClose1} className="forgetpassword">
          <Modal.Body>
            <div className="forgetpasswordpage">
                <div className="forgetpassword_leftside">
                <img src="/images/MYOB_Logo.png" alt="" className="login_pic1"></img>
                    <h2 className="forgettitle">Forget<br />
                        Password?</h2>
                    <p className="forgetpara">Don't worry! It happens. Please enter the email<br/> address and we will send a password reset link. </p>
                    <h4 className="forgetemail">Enter the email address</h4>
                    <label><input type="text" name="email" className="forgetpasswordemail" /></label>
                    <br/>
                    <b><input type="submit" value="Continue" className="submit1"/></b>
                    <Link to='/' className='forgetpassword-link' onClick={handleShowLogin}>Back to Login</Link>

                </div>
                <div className="forgetpassword_rightside">
                  <img src="/images/forgetpasswordimage.gif" alt="" className="forgetpasswordgif"></img>
                </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={show2} onHide={handleClose2} className="createaccount">
          <Modal.Body>
              <div className="createaccountpage">
                <div className="createaccount_leftside">
                  <img src="/images/MYOB_Logo.png" alt="" className="login_pic3"></img>
                  <h2 className="createaccountheader">Create Account</h2>
                  <p className="createaccountpara">Be part of The MYOB Family</p>
                  <div className="createaccountinput">

                    <div className="flname">
                      <label>First Name:</label>
                      <label>Last Name:</label>
                      <br/>
                    </div>

                    <div className="flinput">
                      <input type="text"  value={firstname} onChange={(e) => setFirstName(e.target.value)} className="clinput"></input>
                      <input type="text" value={lastname} onChange={(e) => setLastName(e.targetvalue)} className="clinput" ></input> 
                      <br/>
                    </div>

                    <label className="ciname">Email Address:</label><br/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="cinput"></input>
                    <br/>

                    <label className="ciname">Phone Number:</label><br/>
                    <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="cinput"></input>
                    <br/>

                    <label className="ciname">Password:</label><br/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="cinput"></input>
                    <br/>

                    <label className="ciname">Confirm Password:</label><br/>
                    <input type="text" value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} className="cinput"></input>
                    <br/>

                    <input type="checkbox" value="agree" id="agree"/>I agree to MYOB's <u>Terms of Service & Private Policy</u>
                    <br/>

                    <b><input type="submit" value="Sign Up" className="submitcreate" onClick={register}/></b>
                  </div>
                </div>
                <div className="createaccount_rightside">
                  <img src="/images/loginimage.gif" alt="" className="loginimageca"></img>
                </div>
              </div>
          </Modal.Body>
        </Modal>
        </div>
      </nav>

  

    </>
  );
}

export default Navbar;

