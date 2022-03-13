import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails'
import AddProduct from './components/AddProduct'
import Footer from "./components/Footer";

// const contextApi = React.createContext("max")
// const name = "maxValue"




ReactDOM.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>} /> 
    <Route path={"/productDetails/:id"} element={<ProductDetails />} /> 
    <Route path={"/addProduct"} element={<AddProduct />} /> 
    </Routes>

    </BrowserRouter>, document.getElementById("root")
    
)