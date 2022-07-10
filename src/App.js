import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login.js"
import SignUp from "./Pages/SignUp/SignUp.js"
import Products from "./Pages/Products/Products.js"
import Cart from "./Pages/Cart/Cart.js"
import CheckOut from "./Pages/CheckOut/CheckOut.js"
import Home from "./Pages/Home/Home.js";

export default function App() {


    return (
<<<<<<< HEAD

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/check-out" element={<CheckOut />} />
            </Routes>
        </BrowserRouter>

=======
        
            <BrowserRouter>
                <Routes>
                    <Route path ="/" element={<Login />}/>
                    <Route path="/sign-up" element={<SignUp />}/>
                    
                    <Route path="/products" element={<Products />}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/check-out" element={<CheckOut/>}/>
                </Routes>
            </BrowserRouter>
        
>>>>>>> ca0b585909213d9bb415ef3481a06dc6dd3cfe3d
    );


}