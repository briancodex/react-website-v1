import React from 'react';
import './Cart.css';

import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    
    <>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            {/* Section for flex display picture and paragraph */}
      
      <section className='cartPic'>
          <div className="topcart_Pic">
            <img src="/images/cart.jpg" alt="" className="cart_pic"></img>
          </div>
      </section>
    
      <section className='mycart'>
        <div className="cartheader"><i class="fa-solid fa-cart-shopping"></i>&nbsp;<b>My Cart</b>
        </div>
      </section>

      <section className='cartinfo'>
        <div className='rectangle'>
            

        </div>
      </section>

     

      </>
    );
}