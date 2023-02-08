import './CheckoutShipping.css';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function CheckoutShipping() {

  return (
    
    <>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            {/* Section for flex display picture and paragraph */}
      
      <section className='checkoutshipping_Pic'>
          <div className="topcheckoutshipping_Pic">
            <img src="/images/cart.png" alt="" className="checkoutshipping_pic"></img>
          </div>
      </section>

      <section className='checkoutshipping_info'>
        <div className='checkoutshipping_rectangle'>
            <div className='checkoutshipping_text'>
                <span style={{color: '#3182CE'}}>Information</span>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%" }}/>
                <i class="fa-solid fa-circle-check" style={{color: 'black'}}></i>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%" }}/>
                <span style={{color: '#3182CE'}}>Shipping</span>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%" }}/>
                <i class="fa-solid fa-circle-check" style={{color: 'black'}}></i>
                <hr style={{background:'#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width:"30%" }}/>
                <span style={{color: 'grey'}}>Payment</span>
            </div>

            <div className="checkoutshipping_header"><b>Shipping details</b></div>

            <div className="checkoutshipping_country">
              <div className="checkout_shipping_country_name">Country of Residence</div>
              <input className="checkout_shipping_textb" type="textbox" placeholder='Singapore' readOnly={true}></input>
            </div>

            <div className="checkoutshipping_name">
              <div className="checkout_shipping_firstname_text">First Name</div>
              <div className="checkout_shipping_lastname_text">Last Name</div>
            </div> 

            <div className="checkoutshipping_textbox">
              <input className="checkout_shipping_firstname_textb" type="textbox"></input>
              <input className="checkout_shipping_lastname_textb" type="textbox"></input>
            </div>

            <div className="checkoutshipping_address">
              <div className="checkout_shipping_address_name">Address</div>
              <input className="checkout_shipping_address_textb" type="textbox" placeholder='413A Example Road'></input>
            </div>

            <div className="checkoutshipping_postal_phonenumber">
              <div className="checkout_shipping_postalcode_text">Postal Code</div>
              <div className="checkout_shipping_phonenumber_text">Phone Number</div>
            </div> 

            <div className="checkoutshipping_postal_phonenumber_textbox">
              <input className="checkout_shipping_postalcode_textb" type="textbox" placeholder='ABC-123'></input>
              <input className="checkout_shipping_phonenumber_textb" type="textbox"></input>
            </div>
            
            <div className='checkoutshipping_align-line'>
              <hr style={{color: '#E2E8F0', borderColor: '#E2E8F0', height: '1%', width:"93%", background: '#E2E8F0' }}/>
            </div>

            <div className='checkoutshipping_button'>
              <Link style={{textDecoration: 'none'}} to='/Cart'>
                <span className='checkoutshipping_cancel_button' style={{ color: '#4A5568', width:'150px',  height: '50px', borderColor: '#F7FAFC', borderRadius:'10px', backgroundColor:'#F7FAFC', fontSize:'17px'}}>
                  Cancel order
                </span>
              </Link>
              
              <Link style={{textDecoration: 'none'}} to='/CheckoutPayment'>
                <Button style={{ color: 'white', width:'180px',  height: '50px', borderColor: '#3182CE', borderRadius:'8px', backgroundColor:'#3182CE', fontSize:'17px'}}>
                  <div className="co">Complete Order</div>
                </Button>
              </Link>
            </div>

        </div>

        <div className='checkout_shipping_rectangle'>
            <div className='checkoutshipping_summary'>
                <b>Order Summary</b>
            </div>

            <div className='checkoutshipping_price_text'>
              <p>Sub total</p>
              <p>Tax</p>
              <p>Shipping</p>
            </div>

            <div className='checkoutshipping_price_total'>
              <b>Total</b>
            </div>

          </div>
      </section>

      </>
    );
}