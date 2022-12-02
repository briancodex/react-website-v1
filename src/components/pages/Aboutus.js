import React from 'react';
import './AboutUs.css';



function AboutUs() {
    
  return (
    <><>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin: 0 }} />
      {/* Section for flex display picture and paragraph */}

      <section className="picture">
        <div class="container b_flex">
          <div className="left_row">
            <img src="/images/AboutUsMYob.JPG" alt="" className="picture11"></img>

          </div>
          <div className="right_row">
            <img src="/images/Aboutus.png" alt="" className="Apicture12"></img>
          </div>
        </div>

      </section>
    </><section className="header">
        <div className="header">
          <div className="text"><h1>Why MYOB?</h1>
          <div className="label">
                <label>Because you didn't start a business to do the books.</label>
                        </div>                       
        </div>
          </div>

          
      </section></>
  );
}

export default AboutUs;
            