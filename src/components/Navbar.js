import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Link, Redirect} from "react-router-dom";
import { db } from "./firebase.js";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  logInWithEmailAndPassword,
  logout,
  sendPasswordReset
  
} from "./firebase"
import {onAuthStateChanged} from '@firebase/auth';
import { collection, getDocs } from 'firebase/firestore';



function Navbar() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cuser, setCuser] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const [authUser, setAuthUser] = useState(null);
  const [details, setDetails] = useState([]);

  var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


  useEffect(() => {
    const getData = async () => {
      const customerName = await getDocs(collection(db ,"users"));
      setDetails(customerName.docs.map((doc) => ({...doc.data(),  id: doc.id})));
    };
    getData();
  }, []);

  const loginbutton = () => {

    {details.map((data) => {
      if(email == data.email) {
          logInWithEmailAndPassword(email, password);
          if (data.role == "admin") {
            alert("Admin")
          }
      }
    })}

    setShow(false);

  }

  const adminP  = () => {

    {details.map((data) => {
      if(email == data.email) {
          if (data.role == "admin") {
           
              <div><Link to ='/Admin Page'>Admin</Link></div>
            
          }
      }
    })}
  }

  const AuthDetails =() => {
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user)
        } else {
          setAuthUser(null)
        }
      });
        return () => {
          listen();
        }
    }, []);

    const [name, setNames] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const customerName = await getDocs(collection(db ,"users"));
        setNames(customerName.docs.map((doc) => ({...doc.data(),  id: doc.id})));
      };
      getData();
    }, []);
    

    return (
      <div className="loginicon_navbar">
        {authUser ? <p><i class="fa-solid fa-user fa-2x"></i>
          {name.map((data) => {
            if (authUser.uid === data.uid) {
             setCuser(data.name)    
            }       
          }
          )}
          Signed in as {cuser}
         </p> : 
        <p> <i class="fa-solid fa-user fa-2x"></i> Signed out</p>}</div>

    )
  }


  const register = () => {
    let passwordError = "";
    if (!firstname) alert("Please enter name");
    if (password === confirmpass) {
      if (password.match(paswd)) {
      registerWithEmailAndPassword(firstname, email, password);
      alert("Account successfully created")
      handleShowLogin();
      }
      else 
      {
        passwordError = "Password is nt enough";
        alert(passwordError);
      }
    }
    else 
    alert("Password does not match")
  };

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
            
            <li className="navs">
              <AuthDetails/>
              
            </li>
            <li className="nav-links">
              <Link to ="/AdminPage"><h3>Admin</h3></Link>
            </li>
          </ul>
          <Button variant="a" onClick={handleShowLogin} className="loginbtnmain1">LOGIN </Button>

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
                      
                          <label>Email Address:<input type="email" value={email} className="logininput1" onChange={(e) => setEmail(e.target.value)} /></label>
    
                          <label>Password: <input type="password" value={password} className="logininput1" onChange={(e) => setPassword(e.target.value)} /></label>
                         

                        </div>
                      <div className="submitting">

                        <div className="rmbmeandforget">
                        <label for="rememberMe"><input type="checkbox" value="lsRememberMe" id="rememberMe"/>Remember me </label>
                        <Link to='/' className='model-links' onClick={handleShowForgetPassword}>Forgot Password?</Link>
                        </div>

                        <br/>
                        <b><input type="button" value="Login"  class="submit1" onClick={loginbutton}/>
                        </b>
                        <Button variant="a" type="signout" value="signout" className="signoutbtn" onClick={logout}> Sign out</Button>
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
                    <label><input type="text" name="email" className="forgetpasswordemail" onChange={(e) => setEmail(e.target.value)} /></label>
                    <br/>
                    <b><input type="submit" value="Continue" className="submit2" onClick={() => sendPasswordReset(email)}/></b>
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
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="cinput"></input>
                    
                    <br/>

                    <label className="ciname">Confirm Password:</label><br/>
                    <input type="password" value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} className="cinput"></input>
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

