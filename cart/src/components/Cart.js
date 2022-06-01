import React, { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);

export const login = (username, password) =>
    fetch(`${API_SERVER}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(res=>res.json())
        .then(data =>{
            jwt.next(data.access_token);
            getCart()
            return data.access_token;
        })
        .catch(error=> console.log(error));


//custom Hooks for login
export const useLoggedIn = ()=>{
    const [loggedIn, setLoggedIn] = useState(!!jwt.value);
    useEffect(()=>{
        setLoggedIn(!!jwt.value);
        return jwt.subscribe((c)=>{
            setLoggedIn(!!jwt.value);
        });
    },[]);

    return loggedIn;
}


//get the cart 
export const cart = new BehaviorSubject(null);

export const getCart = ()=>{
    fetch(`${API_SERVER}/cart`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
        }
    }).then(res=>res.json())
        .then(data =>{
            cart.next(data);
            return data;
        }).catch(error=>console.log("Cart fetching issue", error));

}

//Add item to a cart
export const addToCart = (id)=>{
    fetch(`${API_SERVER}/cart`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
        },
        body: JSON.stringify({
            id
        })
    }).then(res=>res.json())
        .then(()=>getCart())
        .catch(error=>console.log("add to cart failed", error));
}

//remove item from the cart
export const clearCart = ()=>{
    fetch(`${API_SERVER}/cart`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`
        }
    }).then(res=>res.json())
        .then(()=>getCart())
        .catch(error=>console.log("Item removal Failed", error));
}