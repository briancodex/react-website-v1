import React from 'react';
import './CheckoutInfo.css';
import Button from 'react-bootstrap/Button';
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
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%" }}/>
                <i class="fa-solid fa-circle-check" style={{color: 'black'}}></i>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%" }}/>
                <span style={{color: 'grey'}}>Shipping</span>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%" }}/>
                <i class="fa-solid fa-circle-check" style={{color: 'black'}}></i>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%" }}/>
                <span style={{color: 'grey'}}>Payment</span>
            </div>

            <div className="checkoutheader"><b>Account details</b></div>
            <div>
              <div className="checkout_email">Email Address</div>
              <input className="checkout_textb" type="textbox" placeholder='example@gmail.com'></input>
            </div>

            <div className='checkout_cbox'>
              <label className='container'><input type="checkbox" /><b>I have read, understood and agree to the <u>private policy*</u></b></label>
            </div>

            <div className='checkout_align-line'>
              <hr style={{color: '#E2E8F0', borderColor: '#E2E8F0', height: '1%', width:"93%", background: '#E2E8F0' }}/>
            </div>

            <div className='checkout_button'>
              <Link style={{textDecoration: 'none'}} to='/Cart'>
                <span className='checkout_cancel_button' style={{ color: '#4A5568', width:'150px',  height: '50px', borderColor: '#F7FAFC', borderRadius:'10px', backgroundColor:'#F7FAFC', fontSize:'17px'}}>
                  Cancel order
                </span>
              </Link>
              
              <Link to='/CheckoutShipping'>
                <Button style={{ color: 'white', width:'180px',  height: '50px', borderColor: '#3182CE', borderRadius:'8px', backgroundColor:'#3182CE', fontSize:'17px'}}>
                  <div className="s">Shipping details</div>
                </Button>
              </Link>
            </div>
          </div>
          
          <div className='checkout_rectangle'>
            <div className='checkout_summary'>
                <b>Order Summary</b>
            </div>

            <div className='checkout_price_text'>
              <p>Sub total</p>
              <p>Tax</p>
              <p>Shipping</p>
            </div>

            <div className='checkout_price_total'>
              <b>Total</b>
            </div>

          </div>
        </section>
      </>
    );
}