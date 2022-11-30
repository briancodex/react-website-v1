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
        
            <p>
            Call: +65 9864 1234 <br></br>
            Email: Example@email.com <br></br>
            Head Office(Singapore): <br></br>
            143 Cecil Street #17-04 GB Building <br></br>
            Singapore 069542
            </p>
            </div>
    </div>
    <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
    <div className="socialIcon1">

        <div className="socialIcon">Terms & Conditions   |   Private Policy   |   Security   </div>

    </div>
</div>
  )
}

export default Footer