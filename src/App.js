import "./reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js"
import SignUp from "./SignUp.js"
import Products from "./Products.js"
import Cart from "./Cart.js"
import CheckOut from "./CheckOut.js"

export default function App() {


    return (
        
            <BrowserRouter>
                <Routes>
                <Route path ="/" element={<Login />}/>
                <Route path="/sign-up" element={<SignUp />}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/check-out" element={<CheckOut/>}/>
                </Routes>
            </BrowserRouter>
        
    );


}