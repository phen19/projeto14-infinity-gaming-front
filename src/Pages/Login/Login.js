
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function SignUp() {
    return (
        <Container>
            <h1>Infinity Gaming </h1>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    placeholder="Senha"
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