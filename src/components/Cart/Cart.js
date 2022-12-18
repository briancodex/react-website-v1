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
    
      <section className='mycart'>
        <div className="cartheader"><i class="fa-solid fa-cart-shopping" style={{color:'black'}}></i>&nbsp;&nbsp;<b>My Cart</b>
        </div>
      </section>

      <section className='cartinfo'>
        <div className='rectangle'>

          <div className='cartgrid'>
            <b>PRICE</b>&nbsp;
            <b>QUANTITY</b>&nbsp;
            <b>TOTAL</b>&nbsp;
            <b>CART TOTALS</b>
          </div>

          <div className='align-line'>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"90%", }}/>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"40%", }}/>
          </div>
          <div className='text'>
            <p>Sub total</p>
            <p>Tax</p>
            <p>Shipping</p>
          </div>

          <div className='total'>
            <b>Total</b>
          </div>

          <div className='alignline'>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"90%", }}/>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"40%", }}/>
            <div className='cartbutton'>
              <Link to='/CheckoutInfo'>
                <Button style={{ color: 'white', width:'350px',  height: '50px', borderColor: 'white', borderRadius:'10px', backgroundColor:'#6A00BF', fontSize:'17px'}}>
                  Proceed to Checkout
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      </>
    );
}