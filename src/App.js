import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Products from "./Pages/Products/Products.js"
import UserContext from "./UserContext.js";
import Product from "./Pages/Products/Product.js";
import { useState} from 'react';

export default function App() {
    const [user, setUser] = useState([])
    const [order, setOrder] = useState([])
    const [products, setProducts] = useState([]);
    return (
        <UserContext.Provider value = {{user, setUser, order, setOrder, products, setProducts}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-up" element={<SignUp />}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/products/:productID" element={<Product />}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}