import './CheckoutPayment.css';
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function CheckoutShipping() {

  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [date, SetDate] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");

  return (

    <>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin: 0 }} />
      {/* Section for flex display picture and paragraph */}

      <section className='checkoutpayment_Pic'>
        <div className="topcheckoutpayment_Pic">
          <img src="/images/cart.png" alt="" className="checkoutpayment_pic"></img>
        </div>
      </section>

      <section className='checkoutpayment_info'>
        <div className='checkoutpayment_rectangle'>
          <div className='checkoutpayment_text'>
            <span style={{ color: '#3182CE' }}>Information</span>
            <hr style={{ background: '#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width: "30%" }} />
            <i class="fa-solid fa-circle-check" style={{ color: 'black' }}></i>
            <hr style={{ background: '#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width: "30%" }} />
            <span style={{ color: '#3182CE' }}>Shipping</span>
            <hr style={{ background: '#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width: "30%" }} />
            <i class="fa-solid fa-circle-check" style={{ color: 'black' }}></i>
            <hr style={{ background: '#3182CE', color: '#3182CE', borderColor: '#3182CE', height: '1%', width: "30%" }} />
            <span style={{ color: '#3182CE' }}>Payment</span>
          </div>

          <div className="checkoutpayment_header"><b>Payment details</b></div>

          <div className="checkoutpayment_details">
            <Cards
              number={number}
              name={name}
              expiry={date}
              cvc={cvc}
              focused={focus}
            />
          </div>

          <br />
          <form style={{margin:'15px auto 0'}}>
              <div className="checkoutpayment_cardnumber">
                <label for="name" className="checkout_payment_cardnumber">Card Number</label>
                <br/>
                <input className="checkout_payment_cardnumber_textb"
                  type="text"
                  placeholder='410000000000000'
                  maxLength='16'
                  pattern='[\d| ]{16,22}'
                  value={number}
                  required
                  name="number"
                  onChange={(e) => {
                    SetNumber(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                ></input>
              </div>
              <div className="checkoutpayment_nameoncard">
                <label for="name" className="checkout_payment_nameoncard_text">Card Name</label>
                <br/>
                <input className="checkout_payment_nameoncard_textb"
                  type="text"
                  value={name}
                  placeholder='David Ng'
                  
                  name="name"
                  required
                  onChange={(e) => {
                    SetName(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                ></input>
              </div>
              
              <div className="checkoutpayment_cardexpiration_cvs">
                <label for="name" className="checkout_payment_cardexpiration_text">Expiration Date</label>
                <label for="name" className="checkoutpayment_cardcvs_text">CVC</label>
              </div>

              <div className="checkoutpayment_cardexpiration_cvs_textb">
                <input className="checkout_payment_cardexpiration_textb"
                  type="text"
                  name="expiry"
                  pattern='\d\d/\d\d'
                  value={date}
                  onChange={(e) => {
                    SetDate(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                ></input>
                <input className="checkoutpayment_cardcvs_textb"
                  type="tel"
                  name="cvc"
                  pattern='\d{3}'
                  value={cvc}
                  onChange={(e) => {
                    SetCvc(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                ></input>
              </div>
          </form>
          
          <div className='checkoutpayment_align-line'>
              <hr style={{color: '#E2E8F0', borderColor: '#E2E8F0', height: '1%', width:"93%", background: '#E2E8F0' }}/>
            </div>

            <div className='checkoutpayment_button'>
              <Link style={{textDecoration: 'none'}} to='/Apps'>
                <span className='checkoutpayment_cancel_button' style={{ color: '#4A5568', width:'150px',  height: '50px', borderColor: '#F7FAFC', borderRadius:'10px', backgroundColor:'#F7FAFC', fontSize:'17px'}}>
                  Cancel order
                </span>
              </Link>
              
              <Link style={{textDecoration: 'none'}} to='/'>
                <Button style={{ color: 'white', width:'180px',  height: '50px', borderColor: '#3182CE', borderRadius:'8px', backgroundColor:'#3182CE', fontSize:'17px'}}>
                  <div className="p">Payment</div>
                </Button>
              </Link>
            </div>

            <div className='checkout_payment_rectangle'>
              <div className='checkoutpayment_summary'>
                <b>Order Summary</b>
            </div>

            <div className='checkoutpayment_price_text'>
              <p>Sub total</p>
              <p>Tax</p>
              <p>Shipping</p>
            </div>

            <div className='checkoutpayment_price_total'>
              <b>Total</b>
            </div>

            </div>
        </div>
      </section>

    </>
  );
}