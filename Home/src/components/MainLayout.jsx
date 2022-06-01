import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

import Header from 'Home/Header';
import Footer from 'Home/Footer';
import HomeMainContent from "Home/HomeMainContent";
import PDPContent from "pdp/PDPContent";
import CartContent from "cart/CartContent";

const MainLayout = () => (
    
        <BrowserRouter>
            <div className="mt-10 text-3xl mx-auto max-w-6xl">               
                <Header />
                <div className="m-10">
                    <Routes>
                        <Route path="/" element={<HomeMainContent />} />
                        <Route path="/products/:id" element={<PDPContent />} />
                        <Route path="/cart" element={<CartContent />} />
                    </Routes>
                </div>
                <Footer />            
            </div>
        </BrowserRouter>
    
);

export default MainLayout;