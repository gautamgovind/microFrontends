import { useState, useEffect } from 'react';

import { cart } from "cart/Cart";

export default function useCartCount(){
    const [count, setCount] = useState(cart.cartItems.length);

    useEffect(()=>{
        cart.subscribe(({ cartItems })=> setCount(cartItems.length))
    },[])

    return count;
}