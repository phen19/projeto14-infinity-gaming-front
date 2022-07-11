import styled from "styled-components";
import { HiMenu, HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <Container>
            <HiMenu />
            <h1 className="tittle">Infinity Gamming</h1>
            <HiOutlineShoppingCart onClick={() => navigate("/cart")}/>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    height: 40px;
    padding: 15px;
    position: fixed;
    top: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    color: #785FE9;

    h1 {
        font-family: Chakra Petch;
        font-weight: 700;
        font-size: 17px;
        background: -webkit-gradient(150deg, #4776E6, #8E54E9);
        background: linear-gradient(150deg, #4776E6, #8E54E9);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`