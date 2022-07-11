import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Home() {
    const [allBanners, setAllBanners] = useState([]);
    const [current, setCurrent] = useState(0);
    const size = allBanners.length;

    useEffect(() => {
        getBanners();
    }, []);

    function getBanners() {
        const promise = axios.get("http://localhost:5000/banners");

        promise.then((res) => setAllBanners([...res.data]));
        promise.catch((res) => alert(`${res.response.data.message}`));
    }

    if (!Array.isArray(allBanners) || size <= 0) return null;

    const prevSlide = () => {
        setCurrent(current === 0 ? (size - 1) : (current - 1));
    }

    const nextSlide = () => {
        setCurrent(current === (size -1) ? 0 : (current + 1));
    }

    return (
        <>
            <Header />
            <Main>
                <Slider>
                    <AiFillLeftCircle className="left-arrow" onClick={prevSlide} />
                    <AiFillRightCircle className="right-arrow" onClick={nextSlide} />
                    {allBanners.map((banners, index) => {
                        return (
                            <div className={index === current ? "slide selected" : "slide"} key={index}>
                               { index === current && <img src={banners.imgURL} alt={banners.description} />}
                            </div>
                        )
                    })}
                </Slider>
            </Main>
            <Footer />
        </>            
    );
}

const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #DBDBDB;
    margin-top: 40px;
`

const Slider = styled.div`
    width: 100vw;
    height: 25vw;
    max-height: 150px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
    
    .selected {
        opacity: 1;
    }

    .right-arrow{
        position: absolute;
        top: 50%;
        right: 32px;
        font-size: 20px;
        color: grey;
        z-index: 2;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: absolute;
        top: 50%;
        left: 32px;
        font-size: 20px;
        color: grey;
        z-index: 2;
        cursor: pointer;
        user-select: none;
    }
`
