import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { getProductsById, currency } from "Home/Products";
import PlaceAddToCart from "addtocart/PlaceAddToCart";

const PDPContent = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        if(id) {
            getProductsById(id).then(setProduct)
        } else {
            setProduct(null)
        }        
    },[id]);

    const addToCartRef = useRef(null);

    useEffect(()=>{
        if(addToCartRef.current) {
            PlaceAddToCart(addToCartRef.current, product.id)
        }
    },[]);

    if(!product) return null;
  return (
    <div className='grid grid-col-2 gap-5'>
        <div>
            <img src={product.image} alt={product.name} />
        </div>
        <div>
            <div className='flex'>
                <h1 className='font-bold text-3xl flex-grow'>{product.name}</h1>
                <div className='font-bold text-3xl flex-end'>
                    {currency.format(product.price)}
                </div>
            </div>
            <div className='test' ref={addToCartRef}></div>
            <div className='mt-10'>{product.description}</div>
            <div className='mt-10'>{product.longdescription}</div>
        </div>
    </div>
  )
}

export default PDPContent;