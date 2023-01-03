import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SupportNote.css';
import '../../App.css';
import { useState } from "react";


export default function General() {

  const [general, setGeneral] = useState(false);
  const toggleGeneral = () => {
    setGeneral(!general)
  }

  const [bank, setBanking] = useState(false);
  const toggleBanking = () => {
    setBanking(!bank)
  }

  return (
<>

  <section className="Supprtnotepic">
    <div className="SNpicture">
    <img src=" /images/SupportNote.png" alt="" className="SNPic"></img>
    </div>
  </section>

  <section className="SNHeader">
        <div className="SNHeader">
          <div className="snhead">
            <h1>Support Notes </h1>
          </div>
          <div className="snlabel">
            <label>Click on it to find out more about it!</label>
          </div>

          
      <div className='Icons'>
      <div className='firstRowIcons'>
            <a 
                  onClick={toggleGeneral}
                  className="supportBtn"
                  >
                  <img src=" /images/general1.JPG" alt="" className="genpic"></img>
                </a>
              <button 
                            onClick={toggleBanking}
                            className="supportBtn">
                            <img src=" /images/BankingJPG.JPG" alt="" className="bankpic"></img>
                          </button>
            
        </div>
        <div className='secondRowIcons'>
        <button 
              onClick={toggleBanking}
              className="supportBtn">
              <img src=" /images/general1.JPG" alt="" className="genpic"></img>
            </button>
        </div>
      </div>

          

{general && (

<div className="supportModal">
  <div onClick={toggleGeneral} className="supportModalOverlay"></div>
    <div className="supportModalContent">
  
      <div>
        <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
      </div>

      <h2 className='titleImage'>General Support Notes</h2>

 <section className="gif">
      <div class="sPic">
          <img src ="/images/SN.gif" alt="" className="Left"></img>
        </div>
        
      <div className="links">
        <div class="linkSN">
      <a href=''>https://myobsingapore.com/snote/how-to-use-job-costing.pdf </a>
      <a href=''>https://myobsingapore.com/snote/how-to-delete-a-job-code.pdf</a>
      </div>
      </div>
      </section>
        
      
      
     
    <button
      className='close-btn'
      onClick={toggleGeneral}
      >&times;</button>
    
    </div>
  </div>


)}

{bank && (
  <div className="supportModal">
  <div onClick={toggleBanking} className="supportModalOverlay"></div>
    <div className="supportModalContent">
      <h2>Bank Support Notes</h2>
      <a href=''>https://myobsingapore.com/snote/how-to-use-job-costing.pdf </a>
      <a href=''>https://myobsingapore.com/snote/how-to-delete-a-job-code.pdf</a>
    <button
      className='close-btn'
      onClick={toggleBanking}
      >&times;</button>
    
    </div>
  </div>
)}


        

        </div>
      
      

       
        
        </section>
        
        





    

 



</>
  )
  }
  

