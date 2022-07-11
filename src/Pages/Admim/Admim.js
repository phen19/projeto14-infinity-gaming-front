import styled from "styled-components";
import CarroselBanners from "../../Components/CarroselBanner";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function Admim() {
    return (
        <>
            <Header />
            <Main>
                <CarroselBanners />
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #DBDBDB;
    margin-top: 20px;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`