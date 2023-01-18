import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./Software.css";
import "./ProductCard.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },

];


function Software() {
  
  return (
    

    <>
      <section className='softwareBanner'>
        <div className="top_banner">
          <img src="/images/softwarebanner.PNG" alt="" className="psgtopPic"></img>
        </div>
      </section>

      <Fragment>

        <section>
          <div className="row">
            <Carousel breakPoints={breakPoints}>

              {/* MYOB BusinessBasics */}

              <div className="product">

                <div className="product-body">
                  <div className="title">
                    <h1>MYOB</h1><h2>BusinessBasics</h2>
                  </div>
                  <div className="title-description">
                    <label>Real-time insights and flexible
                      <br></br>reporting for businesses
                      <br></br>looking to level up.</label>
                  </div>
                  <div className="price">
                    <label>$700.00</label>
                  </div>
                  <div className="footer">
                    <div className="btn">
                      <a href="#" className="btn-custom primary"> ADD TO CART </a>
                      <a href="#" className="btn-custom secondary"> TRY FREE FOR 30 DAYS </a>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <label className="product-description">
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Windows Supported<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>FREE 30 Days Support<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Easy Setup Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Company File Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Templates Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Help Files<br></br>
                    </label>
                  </div>
                </div>
              </div>


              {/* MYOB Accounting */}
              <div className="product">

                <div className="product-body">
                  <div className="title">
                    <h1>MYOB</h1><h2>Accounting</h2>
                  </div>
                  <div className="title-description">
                    <label>High-powered inventory management for businesses seeking efficiency.</label>
                  </div>
                  <div className="price">
                    <label>$765.00</label>
                  </div>
                  <div className="footer">
                    <div className="btn">
                      <a href="#" className="btn-custom primary"> ADD TO CART </a>
                      <a href="#" className="btn-custom secondary"> TRY FREE FOR 30 DAYS </a>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <label className="product-description">
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Windows Supported<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>FREE 30 Days Support<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Easy Setup Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Company File Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Templates Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Help Files<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Links to MYOB RetailManager<br></br>
                    </label>
                  </div>
                </div>
              </div>

              {/* MYOB Premier */}
              <div className="product">

                <div className="product-body">
                  <div className="title">
                    <h1>MYOB</h1><h2>Premier</h2>
                  </div>
                  <div className="title-description">
                    <label>Simplify complex business<br></br>needs, including working in multiple currencies.</label>
                  </div>
                  <div className="price">
                    <label>$2070.00</label>
                  </div>
                  <div className="footer">
                    <div className="btn">
                      <a href="#" className="btn-custom primary"> ADD TO CART </a>
                      <a href="#" className="btn-custom secondary"> TRY FREE FOR 30 DAYS </a>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <label className="product-description">
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Windows Supported<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>FREE 30 Days Support<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Easy Setup Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Company File Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Templates Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Help Files<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Links to MYOB RetailManager<br></br>
                    </label>
                  </div>
                </div>
              </div>



              {/* MYOB Payroll */}
              <div className="product">

                <div className="product-body">
                  <div className="title">
                    <h1>MYOB</h1><h2>Payroll</h2>
                  </div>
                  <div className="title-description">
                    <label>Real-time insights and flexible
                      <br></br>reporting for businesses
                      <br></br>looking to level up.</label>
                  </div>
                  <div className="price">
                    <label>$1450.00</label>
                  </div>
                  <div className="footer">
                    <div className="btn">
                      <a href="#" className="btn-custom primary"> ADD TO CART </a>
                      <a href="#" className="btn-custom secondary"> TRY FREE FOR 30 DAYS </a>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <label className="product-description">
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Windows Supported<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>FREE 30 Days Support<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Easy Setup Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Company File Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Templates Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Help Files<br></br>
                    </label>
                  </div>
                </div>
              </div>




              {/* MYOB Premier Single User */}
              <div className="product">

                <div className="product-body">
                  <div className="title">
                    <h1>MYOB</h1><h2>Premier Single User</h2>
                  </div>
                  <div className="title-description">
                    <label>Real-time insights and flexible
                      <br></br>reporting for businesses
                      <br></br>looking to level up.</label>
                  </div>
                  <div className="price">
                    <label>$1260.00</label>
                  </div>
                  <div className="footer">
                    <div className="btn">
                      <a href="#" className="btn-custom primary"> ADD TO CART </a>
                      <a href="#" className="btn-custom secondary"> TRY FREE FOR 30 DAYS </a>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <label className="product-description">
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Windows Supported<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>FREE 30 Days Support<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Easy Setup Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Company File Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Templates Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Help Files<br></br>
                    </label>
                  </div>
                </div>
              </div>




              {/* MYOB Premier 3 User */}
              <div className="product">

                <div className="product-body">
                  <div className="title">
                    <h1>MYOB</h1><h2>Premier 3 User</h2>
                  </div>
                  <div className="title-description">
                    <label>Real-time insights and flexible
                      <br></br>reporting for businesses
                      <br></br>looking to level up.</label>
                  </div>
                  <div className="price">
                    <label>$2070.00</label>
                  </div>
                  <div className="footer">
                    <div className="btn">
                      <a href="#" className="btn-custom primary"> ADD TO CART </a>
                      <a href="#" className="btn-custom secondary"> TRY FREE FOR 30 DAYS </a>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <label className="product-description">
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Windows Supported<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>FREE 30 Days Support<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Easy Setup Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Company File Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Templates Upgrade Assistant<br></br>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Help Files<br></br>
                    </label>
                  </div>
                </div>
              </div>

            </Carousel>
          </div>
        </section>
      </Fragment>

      <section className='software2ndsection'>
        <img src="/images/bizsupportpic.PNG" alt="" className="bizsupport"></img>
      </section>

      <section className="software3rdsection">
      <img src="/images/keyfeatures.PNG" alt="" className="keyfeat"></img>
      <img src="/images/softwaregif.gif" alt="" className="softwareimages"></img>
      </section>

      <section className='software4thsection'>
        <div className="comparisonofplan">
          <h1 className="comparisonheader"><u>Compare Plan Side By Side</u></h1>
          <img src="/images/manageyourbooks.PNG" alt="" className="managingbooks"></img>
          <img src="/images/secureyourbooks.PNG" alt="" className="securingbooks"></img>
          <img src="/images/generatereports.PNG" alt="" className="generatingreports"></img>
          <img src="/images/manageyourinventory.PNG" alt="" className="managinginventory"></img>
          <img src="/images/processsales.PNG" alt="" className="processingsales"></img>
          <img src="/images/managegst.PNG" alt="" className="managinggst"></img>
        </div>
      </section>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Software />, rootElement);
export default Software;