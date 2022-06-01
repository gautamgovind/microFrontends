import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const Header = lazy(()=> import('Home/Header'));
import Footer from 'Home/Footer';
import SafeComponent from "./components/SafeComponent";
import PDPContent from "./components/PDPContent";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {/* you can use error boundary to prevent the page broken in case other application has some error  */}
      <SafeComponent>
        <Suspense fallback={<div>Loading..</div>}>
          <Header />
        </Suspense>
      </SafeComponent>
      <div className="m-10">
        <Routes>
          <Route path="/products/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
      
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
