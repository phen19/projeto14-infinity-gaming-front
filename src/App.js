import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login.js"
import SignUp from "./Pages/SignUp/SignUp.js"
import Products from "./Pages/Products/Products.js"
import Cart from "./Pages/Cart/Cart.js"
import CheckOut from "./Pages/CheckOut/CheckOut.js"

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