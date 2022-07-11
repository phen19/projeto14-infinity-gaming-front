import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from 'react';
import UserContext from "./UserContext.js";
import Login from "./Pages/Login/Login.js"
import Cart from "./Pages/Cart/Cart.js"
import CheckOut from "./Pages/CheckOut/CheckOut.js"
import Home from "./Pages/Home/Home.js";
import SignUp from "./Pages/SignUp/SignUp";
import Products from "./Pages/Products/Products.js"
import Product from "./Pages/Products/Product.js";
import Admim from "./Pages/Admim/Admim.js";


export default function App() {
    const [user, setUser] = useState([]);
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);
    const [pay, setPay] = useState([]);
    const [checkInfo, setCheckInfo] = useState([]);
    const [allBanners, setAllBanners] = useState([]);

    return (
        <UserContext.Provider value = {{user, setUser, order, setOrder, products, setProducts, pay, setPay, checkInfo, setCheckInfo, allBanners, setAllBanners}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />}></Route>
                    <Route path="/home" element={<Home />} />
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/products/:productID" element={<Product />}/>
                    <Route path="/cart" element ={<Cart/>}/>
                    <Route path="/checkout" element ={<CheckOut/>}/>
                    <Route path="/admim" element={<Admim />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>

    );
}