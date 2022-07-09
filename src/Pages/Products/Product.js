import UserContext from "../../UserContext";
import { useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Logo from "../../Assets/img/logo.png"

export default function Product(){
    const {products, setProducts} = useContext(UserContext);
    const { order, setOrder } = useContext(UserContext);
    const {productID} = useParams()

    function IsEmptyCart(){
        if (order===null || order.length === 0 || order === []){
            return "Vazio"
        }
        return order.length
       }
    
       function addCart({filteredProduct}){
        if (order.some(ord => ord.id===filteredProduct._id)){
            alert("Produto já adicionado ao carrinho!")
            return
        }
        setOrder([...order,{id:filteredProduct._id, qty:1}])
       }
    
       function removeCart({filteredProduct}){
        const filtered = order.filter( function(rem){return rem.id !== filteredProduct._id})
        setOrder(filtered)
        if (order.length===0){
            setOrder([])
        }
       }

    return(
        <Container>
            <Header>
                <div>
                    <img src={Logo} width="150px"/>
                </div>
                <div>
                    <ion-icon name="cart-outline"></ion-icon>
                    <IsEmptyCart></IsEmptyCart>
                </div>
            </Header>
            <Item>
                <Card>{products.filter(product => product._id === productID).map(filteredProduct => (
                    <>
                        <img src={filteredProduct.image} width="200px"/>
                        <h1>{filteredProduct.name}</h1>
                        <h1>{filteredProduct.description}</h1>
                        <h1>R$ {filteredProduct.price.toFixed(2)}</h1>
                        <Buttons>
                            <button onClick={()=>addCart({filteredProduct}) }>Adicionar ao Carrinho</button>
                            <button onClick={()=>removeCart({filteredProduct}) }>Remover do Carrinho</button>
                        </Buttons>
                    </>))} 
                </Card>
            </Item>
        </Container>
    )

}

const Container = styled.div `
                                height: 100vh;
                                width: 100vw;
                                background: #EDF1F2;
                                display:flex;
                                flex-direction: column;
                                align-items:center;

                                h1{
                                    margin-bottom: 10px;
                                    margin-left: 10px;
                                }
`
const Card = styled.div` 
                            width:250px;
                            height:450px;
                            background: linear-gradient(152.55deg, #4776E6 0%, #8E54E9 100%);
                            border-radius: 18px;
                            display:flex;
                            flex-direction: column;
                            align-items:center;
                            justify-content: space-around;

                            .selected{

                            }
`

const Item = styled.div `
                            display:flex;
`

const Header = styled.div ` width: 100vw;
                            height:100px;
                            display:flex;
                            justify-content: center;
                            align-items: center;
`
const Buttons = styled.div `    display:flex;
                                align-items:space-around;
                             
                            button{
                                width:100px;
                             }
`