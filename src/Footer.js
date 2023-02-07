import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="contact">

    <div className="contact1">
        <div className="leftlogo">
            <h2>MYOB</h2>
            <p>@myob 2022</p>
        </div>
        <div className="rightccd">
            <h3 className="cc">Contact Us</h3>
        
            <p className="contact_details">
            Call: +65 9864 1234 <br></br>
            Email: Example@email.com <br></br>
            Head Office(Singapore): <br></br>
            143 Cecil Street #17-04 GB Building <br></br>
            Singapore 069542
            </p>
            <br/>
            </div>
    </div>
    <hr className="borderclas" style={{background: 'white', color: 'white', borderColor: 'white', margin:0, }} />
    <div className="socialIcon1">

        <div className="socialIcon">
          <a href="/" className="footerlink">Terms & Conditions        |</a> 
          <a href="/" className="footerlink">Private Policy        |</a> 
          <a href="/" className="footerlink">Security  </a>
        </div>

        <div className="FIL">
           <a href="https://www.facebook.com/MYOB/"><i class="fa-brands fa-square-facebook fa-2x" style = {{color: "white"}}></i></a>
           <a href="https://www.instagram.com/myob/?hl=en"><i class="fa-brands fa-square-instagram fa-2x" style = {{color: "white"}}></i></a>
           <a href="https://www.linkedin.com/company/361-degree-consultancy-pte-ltd/?originalSubdomain=sg"><i class="fa-brands fa-linkedin fa-2x" style = {{color: "white"}}></i></a>
           <a href="https://www.youtube.com/channel/UCxUXFRoa3cQ7f7TY2lHiVeg"><i class="fa-brands fa-square-youtube fa-2x" style = {{color: "white"}}>    </i></a>
        </div>

    </div>
</div>
  )
}

export default Footer