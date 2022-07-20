import React from 'react'
import './AboutUs.css'
import Fade from 'react-reveal/Fade';

function AboutUs() {
  return (
    <div className="AboutUs pb-5">
        <div className="AboutUs-container">
          <div className="container align-content-center">
            <div className="row mt-5">
              <div className="col-6">
                <img src="images/img-6.jpg" alt="bomba-2" className='img-thumbnail rounded' />
              </div>
              <div className="col-6 ">
                <Fade delay={1000} duration={2000} right>
                <h2>Tentang Kami</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita porro tenetur voluptatum est. Voluptate soluta obcaecati impedit unde deleniti reiciendis, eveniet eligendi libero laborum? Maxime, dolorem natus deleniti nostrum molestias temporibus. Laborum dolorum minus natus placeat non eligendi, deleniti ut cumque et, laudantium consequuntur enim est corrupti? Facere vero assumenda quibusdam sit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt laudantium omnis earum? Sed aliquam rerum quae modi velit cumque?</p>
                </Fade>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default AboutUs