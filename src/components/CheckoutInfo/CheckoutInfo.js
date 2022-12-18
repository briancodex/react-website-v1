import React from 'react';
import './CheckoutInfo.css';
import { Link } from 'react-router-dom';

export default function CheckoutInfo() {
  return (
    
    <>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            {/* Section for flex display picture and paragraph */}
      
        <section className='checkoutPic'>
          <div className="topcheckout_Pic">
            <img src="/images/cart.png" alt="" className="checkout_pic"></img>
          </div>
        </section>

        <section className='checkoutinfo'>
          <div className="checkoutrectangle">
            <div className='checkout_text'>
                <span style={{color: '#3182CE'}}>Information</span>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%", }}/>
                <i class="fa-solid fa-circle-check" style={{color: 'black'}}></i>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%", }}/>
                <span style={{color: 'grey'}}>Shipping</span>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%", }}/>
                <i class="fa-solid fa-circle-check" style={{color: 'black'}}></i>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%", }}/>
                <span style={{color: 'grey'}}>Payment</span>
            </div>

            <div className="checkoutheader"><b>Account details</b></div>
            <div className="email">Email Address</div>
            <div><input type="textbox" className="text"></input></div> 

          </div>
        </section>

      </>
    );
}