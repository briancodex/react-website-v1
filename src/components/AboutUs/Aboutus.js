import React from 'react';
import './AboutUs.css';



function AboutUs() {
    
  return (
    <><><>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin: 0 }} />
      {/* Section for flex display picture and paragraph */}

      <section className="picturex">
        <div class="container b_flex">
          <div className="left_row1">
            <img src="/images/AboutUsMYob.JPG" alt="" className="picture11"></img>

          </div>
          <div className="right_row1">
            <img src="/images/Aboutus.png" alt="" className="Apicture12"></img>
          </div>
        </div>

      </section>
    </><section className="header">
        <div className="header">
          <div className="text1"><h1>Why MYOB?</h1>
            <div className="label">
              <label>Because you didn't start a business to do the books.</label>

              <div className="paragraph"></div>
              <p>We're not here to tell you what success shuld be. Maybe you want a day off every week, or more time to go surfing. Maybe you want a worldwide empire. Whatever you want for your business-we can help you achieve it.</p>
            </div>
          </div>
        </div>

      </section></><section className="icons">
        <div className="grid1">
          <div className="item">
            <i class="fa-solid fa-chart fa-3x">
            </i>
            <h2>We grow with you.</h2>
            <p>Process transactions with numerous foreign Currencies at ease for your business with MYOB</p>
          </div>
          </div>

          <div className="item">
            <i class="fa-solid fa-users fa-3x"></i>
            <h2>Multi-User</h2>
            <p>Allows multiple user access the MYOB file simultaneously.</p>
          </div>



          

        </section></>

  

)}


export default AboutUs;
            