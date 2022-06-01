import React, { useState, useEffect} from 'react';

import { cart, clearCart } from "cart/Cart";
import { currency } from "Home/Products";

const CartContent = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>cart.subscribe((value)=>setItems(value?.cartItems ?? [])),[]);

  return (
    <>
      <div className='my-10 grid grid-col-4 gap-5'>
        {items.map((item,index)=>(
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className='' />
            <div>{item.name}</div>
            <div className='text-right'>{currency.format(item.quantity * item.price)}</div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className='text-right'>
            {currency.format(
                items.reduce((a,b)=>a + b.quantity *b.price, 0)
            )}
        </div>
      </div>
      {items.length>0 && (
        <div className='flex mb-10'>
          <div className='flex-grow'>
            <button id='clearcart' 
                className='bg-white border border-green-800 text-sm text-green-800 py-2 px-5 rounded' 
                onClick={clearCart}
            >
                Clear Cart
            </button>
          </div>
          <div className='flex-end'>
            <button id='clearcart' 
                className='bg-green-900 text-white text-sm border border-green-900  py-2 px-5 rounded' 
            >
                Checkout
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CartContent