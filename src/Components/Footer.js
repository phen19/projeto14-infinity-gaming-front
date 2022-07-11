import styled from "styled-components";
import { BiCategory, BiUserCircle } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <Container>
            <AiOutlineHome onClick={() => navigate("/home")} />
            <BiCategory onClick={() => navigate("/products")} />
            <FaRegHeart onClick={() => navigate("/favorites")} />
            <BiUserCircle onClick={() => navigate("/admim")} />
        </Container>
    );
}

const Container = styled.footer`
    width: 100%;
    height: 35px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    color: #785FE9;
`