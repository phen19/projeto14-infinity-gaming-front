import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    );
}