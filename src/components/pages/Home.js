import React from 'react';
import './Home.css';


function Home() {
  return (
    <>
          <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            {/* Section for flex display picture and paragraph */}
            
             <section className="picture">
                <div class="container a_flex">
                    <div className="left_row">
                        <div className="top_part">
                            <b><h1>PROPEL YOUR BUSINESS TO NEW HEIGHTS</h1></b>
                        </div>
                        <div className="bottom_part">
                            <label>A single system that automates your everyday tasks and helps your business look professional while staying compliant.</label>
                        </div>
                        <div className="button">
                            <button className="try_button" color="white">TRY FREE FOR 30 DAYS</button>
                        </div>
                    </div>
                    <div className="right_row">
                            <img src="/images/myobsquare4.png" alt="" className="picture12"></img>
                    </div>
                </div>
                
            </section>

            {/* Section for trusted us */}
            <section className="trusted">
              <div className="ct1">
                  <div className="top"><h2>Trusted By</h2></div>
                  <div className="bottom"><img src="/images/trusted img.png" alt="" className="picture13"></img></div>
              </div>
            </section>

            {/* Section for Video */}
            <section className="video">
              <div className="vidt">
                  <div className="left1">
                      <img src="/images/box designs.jpg" alt="" className="picture14"></img>
                      <button className="picture15"></button>

                  </div>
                  <div className="right1">
                      <h3>So Much More Than</h3>
                      <h2 className="kid">Accounting Software</h2>
                      <p className="desp">A single system that automates your everyday tasks and helps your business look professional, while staying compliant</p>
                      
                  </div>

              </div>
            </section>

            {/* Section for icons */}
            <section className="icons">
            <div className="H4"><b>Less Paperwork, More Real Work - Whether It's Tax Or Business As Usual</b></div>
            <div className="grid">
                <div className="item">
                    <i class="fa-solid fa-credit-card fa-3x">
                      
                    </i>
                    <h2>Multi-Currencies</h2>
                    <p>Process transactions with numerous foreign Currencies at ease for your business with MYOB</p>
                </div>

                <div className="item">
                    <i class="fa-solid fa-users fa-3x"></i>
                    <h2>Multi-User</h2>
                    <p>Allows multiple user access the MYOB file simultaneously.</p>
                </div>

                <div className="item">
                    <i class="fa-solid fa-briefcase fa-3x"></i>
                    <h2>Inventory Management</h2>
                    From a basic stockist to detailed component tracking, get all your stock needs sorted.
                </div>

                <div className="item">
                    <i class="fa-solid fa-chart-column fa-3x"></i>
                    <h2>Reports And Budgets</h2>
                    View more than 100 type of reports, and track your performance against budgets.
                </div>

                <div className="item">
                     <i class="fa-solid fa-money-bill fa-3x" ></i>
                    <h2>Tax Compliant</h2>
                    Prepare your GST return and IRAS Audit File easily
                </div>

                <div className="item">
                    <i class="fa-solid fa-magnifying-glass fa-3x"></i>
                    <h2>Project & Job Tracking</h2>
                    Create job numbers and assign it to invoices, expenses and more to each one.
                </div>
                
            </div>
            
            </section>
            

            {/* Section for demo class */}
            <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            <section className="demo">
              <div className="desp1">
                  <div className="para">
                      <h2>Request For Demo</h2>
                      <h2 className="acc">See Our Accounting Software In Action</h2>
                      <h3 className="em">Email Address</h3>
                      <input type="textbox" className="textbox1"></input> <button className="demobtn">Start Your Free Demo</button>
                  </div>
                  <div className="picbottom">
                      <img src="/images/bottompic2.jpg" alt="" className="ity"></img>
                  </div>

              </div>
            </section>


                
    </>
  );
}

export default Home;
