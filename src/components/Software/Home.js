import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import { Products } from './Products'
import { db } from "../firebase.js";


export const Home = (props) => {


    let Product;
    const addToCart = (product) => {
        if (uid !== null) {
            // console.log(product);
            Product = product;
            Product['qty'] = 1;
            Product['TotalProductPrice'] = Product.qty * Product.price;
            db.collection('Cart ' + uid).doc(product.ID).set(Product).then(() => {
                console.log('successfully added to cart');
            })
            
        }
    }
    return (
        <>
            <Navbar user={user}/>           
            <br></br>
            {products.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'>Products</h1>
                    <div className='products-box'>
                        <Products products={products} addToCart={addToCart}/>
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className='container-fluid'>Please wait....</div>
            )}
        </>
    )
}
