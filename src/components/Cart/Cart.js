import React from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Cart() {

  return (
    
    <>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            {/* Section for flex display picture and paragraph */}
      
      <section className='cartPic'>
          <div className="topcart_Pic">
            <img src="/images/cart.png" alt="" className="cart_pic"></img>
          </div>
      </section>
    
        <div className="cartheader">
          <i class="fa-solid fa-cart-shopping" style={{color:'black'}}></i>&nbsp;&nbsp;<b>My Cart</b>
        </div>

      <section className='cartinfo'>
        <div className='cart_rectangle'>

          <div className='cartgrid'>
            <b>PRICE</b>&nbsp;
            <b>QUANTITY</b>&nbsp;
            <b>TOTAL</b>&nbsp;
            <b>CART TOTALS</b>
          </div>

          <div className='cart_align-line'>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"90%", }}/>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"40%", }}/>
          </div>
          <div className='cart_text'>
            <p>Sub total</p>
            <p>Tax</p>
            <p>Shipping</p>
          </div>

          <div className='cart_total'>
            <b>Total</b>
          </div>

          <div className='cart_alignline'>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"90%", }}/>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"40%", }}/>
            <div className='cartbutton'>
              <Link style={{textDecoration: 'none'}} to='/CheckoutInfo'>
                <Button style={{ color: 'white', width: '350px',  height: '50px', borderColor: 'white', borderRadius:'10px', backgroundColor:'#6A00BF', fontSize:'18px'}}>
                  <div className="t">Proceed to Checkout</div>
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      </>
    );
}