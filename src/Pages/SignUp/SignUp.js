import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function handleSignUp(event) {
        event.preventDefault();

        const promise = axios.post("http://localhost:5000/sign-up", { name, email, password, confirmPassword });

        promise.then(() => navigate("/"));
        promise.catch((res) => alert(`${res.response.data}`));
    }

    return (
        <Container>
            <h1>Infinity Gaming </h1>
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
                <button type="submit">Cadastrar</button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient( 150deg, #4776E6, #8E54E9);

    h1 {
        width: 300px;
        font-size: 30px;
        text-align: center;
        word-wrap: break-word;
        margin-bottom: 40px;
    }

    form {
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    input {
        width: 100%;
        height: 30px;
        padding-left: 10px;
        border: none;
        border-radius: 7px;
    }

    input::placeholder{
        color: #785FE9;
    }

    button {
        width: 100%;
        height: 30px;
        border: none;
        border-radius: 7px;
        color: #785FE9;
    }
`