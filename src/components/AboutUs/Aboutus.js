import React from 'react';
import './AboutUs.css';

function AboutUs() {

  return (
    <><>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin: 0 }} />
      {/* Section for flex display picture and paragraph */}

      <section className="picturex">
        <div class="container b_flex">
          <div className="left_row">
            <img src="/images/AboutUsMYob.JPG" alt="" className="picture11"></img>
          </div>
          <div className="right_row">
            <img src="/images/Aboutus.png" alt="" className="Apicture12"></img>
          </div>
        </div>
      </section>

      <section className="header">
        <div className="header">
          <div className="text1">
            <h1>Why MYOB?</h1>
          </div>
          <div className="label">
            <label>Because you didn't start a business to do the books.</label>
          </div>
          <div className="paragraph">
            <p>We're not here to tell you what success shuld be. Maybe you want a day off every week, or more time to go surfing. Maybe you want a worldwide empire. Whatever you want for your business-we can help you achieve it.</p>
            </div>
        </div>

        <div className="grid">
          <div className="item">
            <i class="fa-solid fa-signal fa-3x"></i>
            <h2>We Grow With You</h2>
            <p>Once you start using our products, you never have to stop.You'll never outgrow us: whether you're a start-up in a garage, or a manufacturing powerhouse.We have solutions for businesses of every size, shape and sector.</p>
          </div>

          <div className="item">
            <i class="fa-solid fa-diagram-project fa-3x"></i>
            <h2>What Do We Do?</h2>
            <p>We offer business management solutions More than 50 of them, to be exact. Everything to help you with accounting, payroll, payments, retail point of sale, CRM and professional tax solutions- and more.</p>
          </div>

          <div className="item">
            <i class="fa-solid fa-people-group fa-3x"></i>
            <h2>Customers Drive Our World</h2>
            We're on the phones every single day to provide support, and we have more than 40,000 advisors(bookkeepers and accountants) to help you out.
          </div>
        </div>
        </section>

          <section className="pictureleft">
            <div class="container c_flex">
              <div class="right_row1">
                <img src="/images/aboutus.JPG" alt="" className="pictureAbtus"></img>
              </div>
              <div class="left_row1">
                <div class="top_part1">
                  <b>
                    <h1>
                      Working with us
                    </h1>
                  </b>
                </div>
                <div class="bottom_part1">
                  <label>
                    "MYOB is a place where you can truly love your work. Our team is continually growing, inventing and disrupting conventions. We don't simply want you to simply'fit' into our already established culture, we want you to come and add to it, make it even better! This is MYOB."
                  </label>
                </div>
              </div>
            </div>

            <div class="last_row1">
                <div class="last_part1">
                  <b>
                    <h1>
                      Building better digital experiences
                    </h1>
                  </b>
                </div>
                </div>

                <div class="lastbottom_part1">
                  <label>
                    At MYOB we recognise that we, and the software industry at large, need to focus on creating only good digitisation for our customers and partners - where apps work in union, where the work just happens, and the tech almost goes unnoticed.
                  </label>
                </div>

                <section className="pictureright">
            <div class="container r_flex">
              <div class="rightpicture_row1">
                <img src="/images/MYOBEssentials.JPG" alt="" className="picturelast"></img>
              </div>
              </div>
          </section>
          
          </section>
      </>
      </>
      
  );
}
export default AboutUs;

