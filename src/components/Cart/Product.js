import React from 'react';


export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small"/>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button style={{ color: 'white', width: '200px',  height: '50px', borderColor: 'white', borderRadius:'10px', backgroundColor:'#6A00BF', fontSize:'18px'}}onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}