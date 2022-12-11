import React, {useState} from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';

export default function Cart() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

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

          <div className='cartgrid'><b>PRICE</b>&nbsp;<b>QUANTITY</b>&nbsp;<b>TOTAL</b>&nbsp;<b>CART TOTALS</b></div>

          <div className='align-line'>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"90%", }}/>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"40%", }}/>
          </div>

          <div className='alignline'>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"90%", }}/>
            <hr style={{ background: 'grey', color: '000000', borderColor: '000000', height: '2px', width:"40%", }}/>
            <div className='cartbutton'>
              <Button> Process to Checkout </Button>
            </div>

          </div>
        </div>
      </section>

      </>
    );
}