
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        const promise = axios.post("http://localhost:5000/login", { email, password });

        promise.then(() => navigate("/home"));
        promise.catch((resp) => alert(`${resp.response.data.message}`));
    }

    return (
        <Container>
            <h1>Infinity Gaming </h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Entrar</button>
            </form>
            <Link to="/sign-up"><p>Não possui cadastro? Cadastre-aqui!</p></Link>
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

    p {
        color: #FFFFFF;
        text-decoration: none;
        margin-top: 20px;
        font-weight: 700;
        font-size: 13px;
    }
`