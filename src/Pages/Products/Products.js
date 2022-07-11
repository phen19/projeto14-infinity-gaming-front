import axios from "axios";
import { useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import Logo from "../../Assets/img/logo.png"
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";

export default function Products(){

    const {products, setProducts} = useContext(UserContext);
    const { order, setOrder } = useContext(UserContext);
    const [selected, setSelected] = useState([])

    useEffect(() => {
        if (products !== undefined) {
        const request = axios.get("http://localhost:5000/products");
        request.then((response) =>{
                setProducts(response.data);
               
        })};
    },[]);

   function addCart({product}){
    if (order.some(ord => ord.id===product._id)){
        alert("Produto já adicionado ao carrinho!")
        return
    }
    setOrder([...order,{id:product._id, qty:1}])
   }

   function removeCart({product}){
    const filtered = order.filter( function(rem){return rem.id !== product._id})
    setOrder(filtered)
    if (order.length===0){
        setOrder([])
    }
   }

   function IsEmptyCart(){
    if (order===null || order.length === 0 || order === []){
        return <h1>Vazio</h1>
    }
    return <h1>{order.length}</h1>
   }

    return (
        <>
        <Container>
        <Header><div className="title"><h1>Infinity Gaming</h1> </div><div className="cart"><ion-icon name="cart-outline"></ion-icon><IsEmptyCart></IsEmptyCart></div></Header>
        <h1>Top Picks</h1>
            <TopPicks> 
			{products.map(product => 
            <Card id={product._id}><Link to ={`/products/${product._id}`}><img src={product.image} width="134px"/></Link><h1>{product.name}</h1>
            <h2>R$ {product.price.toFixed(2)}</h2> <Buttons><button onClick={()=>addCart({product}) }>+</button><button onClick={()=>removeCart({product}) }>-</button></Buttons></Card>
            )}
            </TopPicks>
        </Container>
        </>
    )
}

const Container = styled.div `
                                height: 100vh;
                                width: 100vw;
                               
                                h1{
                                    margin-bottom: 10px;
                                    margin-left: 10px;
                                
                                }
`
const Card = styled.div` 
                            width:160px;
                            height:222px;
                            background: #FFFFFF;
                            border-radius: 18px;
                            display:flex;
                            flex-direction: column;
                            align-items:center;
                            justify-content: space-around;
                            color:#000000;
`

const TopPicks = styled.div `
                            width: 100vw;
                            height: 222px;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            color: #FFFFFF;
`

const Header = styled.div ` width: 100vw;
                            height:100px;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            color: #FFFFFF;

                            .title{
                                width:70vw;
                            }

                            .cart{
                                width:30vw;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                text-align: center:
                            }
                            .cart > h1{
                                padding-top: 10px;
                            }
                            ion-icon{
                                margin-right: 10px;
                                font-size: 30px;
                            }
`
const Buttons = styled.div ` display:flex;
                             
`
