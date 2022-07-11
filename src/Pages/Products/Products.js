import axios from "axios";
import { useState, useEffect, useContext, useTransition} from 'react';
import styled from "styled-components";
import Logo from "../../Assets/img/logo.png"
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";

export default function Products(){

    const {products, setProducts} = useContext(UserContext);
    const { order, setOrder } = useContext(UserContext);
    const {user, setUser} = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${user}` //Padrão da API (Bearer Authentication)
        }
      }

    useEffect(() => {
        if (user !== undefined || user!== []) {
        const request = axios.get("http://localhost:5000/products", config);
        request.then((response) =>{
                setProducts(response.data);
               
        })};
    },[]);

    

   function addCart({product}){
 //   if (order.some(ord => ord.id===product._id)){
        if(order.includes(product._id)){
        alert("Produto já adicionado ao carrinho!")
        return
    }
    setOrder([...order, product._id])
    console.log(order)
    console.log(user)
   }

   function removeCart({product}){
  //  const filtered = order.filter( function(rem){return rem.id !== product._id})
     if(order.includes(product._id)){
        const index = order.indexOf(product._id);
        setOrder(order.splice(index,1))
        if (order.length < 1){
            setOrder([])
        }
    }
   }

   function IsEmptyCart(){
    if (order===null || order.length === 0 || order === []){
        return <h1>Vazio</h1>
    }
    return <h1>{order.length}</h1>
   }

   function GotoCartIcon(){
        if (order ==null || order.length === 0 || order === []){
            return <div className="cart"><ion-icon name="cart-outline"></ion-icon><IsEmptyCart></IsEmptyCart></div>
        }else{
            return <Link to="/cart"><div className="cart"><ion-icon name="cart-outline"></ion-icon><IsEmptyCart></IsEmptyCart></div></Link>
        }
    
    }

    function GotoCart(){
        if (order ===null || order.length === 0 || order === []){
            return <button disabled>Ver carrinho</button>
        }else{
            return <button>Ver carrinho</button>
        }
    }

    if (user === null || user.length===0 || user===[]){
        return(
            <>
        <Container>
        <Header><div className="title"><h1>Infinity Gaming ထ </h1> </div></Header>
            <GotoCartIcon/>
            <TopPicks> 
			<Card>
                <h1>Para ver os produtos é necessário estar logado</h1>
            </Card>           
            </TopPicks>
        {/*    <Link to="/cart"><GotoCart/></Link> */}
        </Container>
        </>
        )
    }else{
        return (
            <>
            <Container>
            <Header><div className="title"><h1>Infinity Gaming ထ </h1> </div></Header>
                <GotoCartIcon/>
                <TopPicks> 
                {products.map(product => 
                <Card id={product._id}>
                    <Link to ={`/products/${product._id}`}>
                        <img src={product.image} width="134px" height="134px"/>
                    </Link>
                    <h1>{product.name}</h1>
                    <h2>R$ {product.price.toFixed(2)}</h2> 
                    <Buttons>
                            <button className= "add" onClick={()=>addCart({product}) }>+</button>
                            <button className="remove" onClick={()=>removeCart({product}) }>-</button>
                    </Buttons>
                </Card>
                )}
                </TopPicks>
            {/*    <Link to="/cart"><GotoCart/></Link> */}
            </Container>
            </>
        )
    }
}

const Container = styled.div `
                                height: 100vh;
                                width: 100vw;
                                display:flex;
                                flex-direction: column;
                                align-items: center;
                                background-image: linear-gradient( 150deg, #4776E6, #8E54E9);
                                h1{
                                    margin-bottom: 10px;
                                    margin-left: 10px;
                                
                                }
                                .cart{
                                    width:30vw;
                                    display:flex;
                                    justify-content:center;
                                    align-items:center;
                                    text-align: center:
                                    position:absolute;
                                    color: #FFFFFF;
                                    margin-bottom:20px;
                                }
                                .cart > h1{
                                    padding-top: 10px;
                                    
                                }
                                ion-icon{
                                    margin-right: 10px;
                                    font-size: 30px;
                                }

`
const Card = styled.div` 
                            width:160px;
                            height:250px;
                            background: #FFFFFF;
                            border-radius: 18px;
                            display:flex;
                            flex-direction: column;
                            align-items:center;
                            justify-content: space-around;
                            color:#000000;
                            margin-bottom: 20px;
`

const TopPicks = styled.div `
                            width: 400px;
                            flex-wrap: wrap;
                            height: 222px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            color: #FFFFFF;
                            padding:10px;
`

const Header = styled.div ` width: 100vw;
                            height:100px;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            color: #FFFFFF;

                            .title{
                                width:70vw;
                                font-family: 'Chakra Petch', sans-serif;
                                font-weight: 700;
                                font-size: 40px;
                            }

                            .title > h1{
                                text-align: center;
                            }
                            
`
const Buttons = styled.div ` display:flex;

                            button{
                                width:50px;
                                border: 0;
                            }

                            .add{
                                background: green;
                            }

                            .remove{
                                background: red;
                            }


                             
`
