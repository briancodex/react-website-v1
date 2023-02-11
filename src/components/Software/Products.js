import React from 'react'
import {Software} from './Software'

export const Products = ({products,addToCart}) => {

    // console.log(products);
    
    return products.map((individualProduct)=>(
        <Software key = {individualProduct.ID} individualProduct={individualProduct}
           addToCart={addToCart}
        />
    ))
}