import React, { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";

import { getProducts, currency } from './Products';
import { addToCart, useLoggedIn } from 'cart/Cart';

const HomeMainContent = () => {
    const loggedIn = useLoggedIn();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts().then(setProducts);
    },[])
  return (
    <div className='my-10 grid grid-cols-4 gap-5'>
        {products && products.map((product, index)=>(
            <div key={product.id} style={{border: '1px solid #dedede'}}>
                <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} style={{height: 300}} />
                </Link>
                <div className='flex'>
                    <div className='flex-grow flex-bold'>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </div>
                    <div className='flex-end'>
                        {currency.format(product.price)}
                    </div>
                </div>
                <div className='text-sm mt-4'>
                    {product.description}
                </div>
                {loggedIn && (
                    <div className='text-right mt-2 p-2'>
                        <button
                            className='bg-blue-500 text-white hover:bg-blue-700 text-sm p-3'
                            onClick={()=>addToCart(product.id)}
                            id={`addto cart${product.id}`}
                        >Add to Cart</button>
                    </div>
                )}
            </div>
        ))}
    </div>
  )
}

export default HomeMainContent