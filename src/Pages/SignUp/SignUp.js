import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function handleSignUp(event){
        event.preventDefault();

        const promise = axios.post("http://localhost:5000/sign-up", { name, email, password, confirmPassword });

        promise.then(() => navigate("/home"));
        promise.catch((resp) => alert(resp.response.data.message));
    }

    return (
        <>
            <h1>Aparece ai por favor</h1>
            <form onSubmit={handleSignUp}>
                <input
                    type="tetx"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button>Cadastrar</button>
            </form>
        </>
    );
}