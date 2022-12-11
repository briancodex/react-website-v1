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

        

      </>
    );
}