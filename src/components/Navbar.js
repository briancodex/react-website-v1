import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";
import { db } from "./firebase.js";

import {
  auth,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logout,
  sendPasswordReset,
  
  
} from "./firebase"
import {onAuthStateChanged} from '@firebase/auth';
import { collection, getDocs } from 'firebase/firestore';



function Navbar() {
  const [email, setEmail] = useState("");
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
  const [aemail, setAemail] = useState("");
  const [apassowrd, setAPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  const initialLoginValues = {email: "", password: ""};
  const initialRegisterValues = {email: "", password: "", phone: "", firstname: "", lastname: "", confirmpass: ""};
  const [formValues, setFormValues] = useState(initialLoginValues);
  const [registerValues, setRegisterValues] = useState(initialRegisterValues);

  var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});

  }

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required!";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Email format is incorrect";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    return errors;
  }

  const handleChange1 = (e) => {
    const {name, value} = e.target;
    setRegisterValues({...registerValues,[name]: value});

  }

  const rvalidate = (values) => {
    const errors ={};

    if (!values.email) {
      errors.email = "Email is required!";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Email format is incorrect";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }
    else if (values.password.length < 9) {
      errors.password = "Password must have minumum 9 characters"
    }
    else if (!paswd.test(values.password)) {
      errors.password = "Password should have a special character"
    }

    if (!values.phone) {
      errors.phone = "Phone number is required!"
    }

    if (!values.firstname) {
      errors.firstname = "Field is required"
    }

    if (!values.lastname) {
      errors.lastname = "Field is required"
    }

    if (values.password != values.confirmpass) {
      errors.confirmpass = "Password does not match"
    }
    return errors;

  }

  useEffect(() => {
    const getData = async () => {
      const customerName = await getDocs(collection(db ,"users"));
      setDetails(customerName.docs.map((doc) => ({...doc.data(),  id: doc.id})));
    };
    getData();
  }, []);

  const loginbutton = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))

    {details.map((data) => {

      if (Object.keys(formErrors).length === 0) {
        if(formValues.email === data.email) {
            logInWithEmailAndPassword(formValues.email, formValues.password);
            setShow(false);
            setAemail(data.email)
            setAPassword(formValues.password);
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
    setRegisterErrors(rvalidate(registerValues))
    if (registerValues.password === registerValues.confirmpass) {
      if (registerValues.password.match(paswd)) {
      registerWithEmailAndPassword(registerValues.firstname, registerValues.email, registerValues.password);
      alert("Account successfully created")
      handleCloseAll();
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

  const handleCloseAll = () => {
    setShow(false);
    setShow1(false);
    setShow2(false);
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
                  <div className="menu-button">SUPPORT ▼</div>
                  <div className="menu-content">
                    <ul className='list_try'>
                  <li><Link to='/SupportNote' className='nav-links' onClick={closeMobileMenu} >Support Note</Link></li>
                  <li><Link to='/SupportVideo' className='nav-links' onClick={closeMobileMenu} >Support Video</Link></li>
                  </ul>
                  </div>
                </div>
              
            </li>
            <li className='nav-item'>
              <Link to='/Apps' className='nav-links' onClick={closeMobileMenu}
              >
              <i class="fa-solid fa-cart-shopping fa-2x"></i>
              </Link>
            </li>
            
            <li className="navs">
              <AuthDetails/>
              
            </li>
            <li className="nav-links">
            {details.map((data) => {
              if(aemail === data.email) {
                if (apassowrd === data.password) {
                  if (data.role === "admin") {
                    return (
                      <Link to ="/AdminPage"><h3>Admin</h3></Link>
                    ) 
                  }
                }
                  
              }
    })}
              
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
                      
                      </div>
                      <br />
 
                        <div className="logininputtry">
                          <label>Email Address:
                            <input 
                                type="email" 
                                name="email"
                                value={formValues.email} 
                                placeholder="email"
                                className="logininput1" 
                                onChange={handleChange} />
                            </label>
                            <p className="error">{formErrors.email}</p>
                            <br></br>
                          <label>Password: 
                            <input 
                                type="password" 
                                name="password"
                                value={formValues.password} 
                                placeholder="password"
                                className="logininput1" 
                                onChange={handleChange} />
                            </label>
                            <p className="error">{formErrors.password}</p>

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
                        <br/>
                    <p className="forgetpara">Don't worry! It happens. Please enter the email<br/> address and we will send a password reset link. </p><br/>
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
                      <input type="text"  name="firstname" value={registerValues.firstname} onChange={handleChange1} className="clinput"></input>
                      <input type="text" name="lastname" value={registerValues.lastname} onChange={handleChange1} className="clinput" ></input> 
                      <br/>
                      
                    </div>

                    <div className="flerror">
                    <p className="error1">{registerErrors.firstname}</p>
                    <p className="error1">{registerErrors.lastname}</p>
                    </div>

                    <label className="ciname">Email Address:</label><br/>
                    <input 
                        type="email" 
                        name="email"
                        value={registerValues.email} 
                        onChange={handleChange1} 
                        className="cinput">
                          
                    </input>
                    <br/>
                    <p className="error1">{registerErrors.email}</p>
                    <br/>

                  
                    <label className="ciname">Phone Number:</label><br/>
                    <input 
                      type="number" 
                      name="phone"
                      value={registerValues.phone} 
                      onChange={handleChange1} 
                      className="cinput">
                    </input>
                    
                    <p className="error1">{registerErrors.phone1}</p>
                    <br/>
                    
                    <label className="ciname">Password:</label><br/>
                    <input 
                      type="password" 
                      name="password"
                      value={registerValues.password} 
                      onChange={handleChange1} 
                      className="cinput">
                    </input>
                   
                    <p className="error1">{registerErrors.password}</p>
                    <br/>
                    
                    <label className="ciname">Confirm Password:</label><br/>
                    <input 
                      type="password" 
                      name="confirmpass"
                      value={registerValues.confirmpass} 
                      onChange={handleChange1} 
                      className="cinput">
                    </input>
                    <p className="error1">{registerErrors.confirmpass}</p>
                    <br/>
                   
                    <input 
                    type="checkbox" 
                    value="agree" 
                    id="agree"/>I agree to MYOB's <u>Terms of Service & Private Policy</u>
                   

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

