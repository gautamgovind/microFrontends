import React, { useState, useEffect } from 'react';
import { cart, clearCart } from './Cart';
import { currency } from "Home/Products";

const MiniCart = () => {
    const [items, setItems] = useState();
    const [showCart, setShowCart] = useState(false);

    useEffect(()=>{
        setItems(cart.value?.cartItems);
        return cart.subscribe((c)=>{
            setItems(c?.cartItems);
        })
    },[]);


    if(!items) return null;
  return (
    <div>
        <span onClick={()=> setShowCart(!showCart)} id="showcart_span">
            <i className='ri-shopping-cart-2-fill text-2xl' id="showcart">{items.length}</i>
        </span>
        {showCart && (
            <div
                className='bg-white text-green-900 absolute p-5 border-4 border-blue-800'
                style={{width: 300, top: '2rem', left: -250}}
            >
                <div
                    className='grid gap-3 text-sm'
                    style={{gridTemplateColumns: "1fr 3fr 10fr 2 fr"}}
                >
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
                    <div>
                        {currency.format(
                            items.reduce((a,b)=>a + b.quantity *b.price, 0)
                        )}
                    </div>
                </div>
                <div className='flex'>
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
            </div>
        )}
    </div>
  )
}

export default MiniCart