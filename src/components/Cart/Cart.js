import React from 'react';
import "./Apps.css"
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.08;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (


    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((data) => (
          <div key={data.id} className="row">
            <div className="col-2">{data.name}</div>
            <div className="col-2">
              <button style={{ color: 'white', width: '30px',  height: '30px', borderColor: 'white', backgroundColor:'#6A00BF', borderRadius:'10px', fontSize:'18px'}} onClick={() => onRemove(data)} className="remove">
                -
              </button>{' '}
              <button style={{ color: 'white', width: '30px',  height: '30px', borderColor: 'white', backgroundColor:'#6A00BF', borderRadius:'10px', fontSize:'18px'}} onClick={() => onAdd(data)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {data.qty} x ${data.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice?.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice?.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
            <Link style={{textDecoration: 'none'}} to='/CheckoutInfo'>
              <button style={{ color: 'white', width: '250px',  height: '50px', borderColor: 'white', backgroundColor:'#6A00BF', borderRadius:'10px', fontSize:'18px'}}>
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}