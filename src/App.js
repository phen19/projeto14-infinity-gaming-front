import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Products from "./Pages/Products/Products.js"
import UserContext from "./UserContext.js";
import Product from "./Pages/Products/Product.js";
import { useState} from 'react';
import Cart from "./Pages/Cart/Cart.js"
import CheckOut from "./Pages/CheckOut/CheckOut";

export default function App() {
    const [user, setUser] = useState([])
    const [order, setOrder] = useState([])
    const [products, setProducts] = useState([]);
    const [pay, setPay] = useState([])
    const [checkInfo, setCheckInfo] = useState([])
    return (
        <UserContext.Provider value = {{user, setUser, order, setOrder, products, setProducts, pay, setPay, checkInfo, setCheckInfo}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-up" element={<SignUp />}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/products/:productID" element={<Product />}/>
                    <Route path="/cart" element ={<Cart/>}/>
                    <Route path="/checkout" element ={<CheckOut/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}