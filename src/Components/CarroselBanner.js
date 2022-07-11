import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";


export default function CarroselBanners() {
    const [imgURL, setImgURL] = useState("");
    const [description, setDescription] = useState("");
    const [allBanners, setAllBanners] = useState([]);

    useEffect(() => {
        getBanners();
    }, []);

    function getBanners() {
        const promise = axios.get("http://localhost:5000/banners");

        promise.then((res) => setAllBanners([...res.data]));
        promise.catch((res) => alert(`${res.response.data.message}`));
    }


    function handleSubmit(event) {
        event.preventDefault();

        const promise = axios.post("http://localhost:5000/banners", { imgURL, description });

        promise.then((res) => setAllBanners([res.data]));
        promise.catch((res) => alert(`${res.response.data}`));
    }

    function deleteBanner(id) {
        const promise = axios.delete(`http://localhost:5000/banners/${id}`);

        setAllBanners(allBanners.filter(banner => banner._id !== id));
    }

    return (
        <Carrosel>
            <>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Insira a url do banner"
                        value={imgURL}
                        onChange={e => setImgURL(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Descrição do banner"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </form>
                {allBanners.map((banner, index) =>
                    <AllBanners
                        key={index}
                        banner={banner.imgURL}
                        description={banner.description}
                        bannerID={banner._id}
                    >
                        <Container>
                            <h5><strong>Imagem:</strong> {banner.imgURL}</h5>
                            <h6><strong>Descrição:</strong> {banner.description}</h6>
                        </Container>
                        <p><AiFillDelete onClick={() => deleteBanner(banner._id)} /></p>
                    </AllBanners>)}
            </>
        </Carrosel>
    );
}

const Carrosel = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    form {
        width: 285px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 20px;
    }

    input {
        padding-left: 5px;
        height: 25px;
        border: none;
        border-radius: 3px;
    }

    button {
        color: #FFFFFF;
        background: linear-gradient(150deg, #4776E6, #8E54E9);
        border: none;
        border-radius: 3px;
    }
`

const AllBanners = styled.div`
    max-width: 500px;
    height: 60px;
    background-color: #FFFFFF;
    margin-top: 5px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    
    svg {
        min-width: 10px;
        height: 10px;
        color: red;
    }

    strong {
        font-weight: 700;
    }

    h5 {
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
    }

    h6 {
        width: 250px;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    

`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`