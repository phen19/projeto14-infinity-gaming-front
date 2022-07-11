import UserContext from "../../UserContext";
import {useContext} from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Product(){
    const {products} = useContext(UserContext);
    const { order, setOrder } = useContext(UserContext);
    const {productID} = useParams()

    function IsEmptyCart(){
        if (order===null || order.length === 0 || order === []){
            return "Vazio"
        }
        return order.length
       }
    
       function addCart({filteredProduct}){
      //  if (order.some(ord => ord.id===filteredProduct._id)){
            if(order.includes(filteredProduct._id)){
            alert("Produto já adicionado ao carrinho!")
            return
        }
        setOrder([...order, filteredProduct._id])
        console.log(order)
       }

    
       function removeCart({filteredProduct}){
       // const filtered = order.filter( function(rem){return rem.id !== filteredProduct._id})
            if(order.includes(filteredProduct._id)){
                const index = order.indexOf(filteredProduct._id);
                setOrder(order.splice(index,1))
                    if (order.length===0){
                        setOrder([])
                    }
            }
        }

    function GotoCartIcon(){
        if (order ==null || order.length === 0 || order === []){
            return <div className="cart"><ion-icon name="cart-outline"></ion-icon><IsEmptyCart></IsEmptyCart></div>
        }else{
            return <Link to="/cart"><div className="cart"><ion-icon name="cart-outline"></ion-icon><IsEmptyCart></IsEmptyCart></div></Link>
        }
        
    }

    return(
        <Container>
             <Header>
                <div className="title">
                    <h1>Infinity Gaming ထ</h1> 
                </div>
            </Header>
            <GotoCartIcon/>
            <Item>
                <Card>{products.filter(product => product._id === productID).map(filteredProduct => (
                    <>
                        <img src={filteredProduct.image} alt="imagem do produto"width="200px"/>
                        <h1>{filteredProduct.name}</h1>
                        <h1>{filteredProduct.description}</h1>
                        <h1>R$ {filteredProduct.price.toFixed(2)}</h1>
                        <Buttons>
                            <button className= "add"onClick={()=>addCart({filteredProduct}) }>Adicionar ao Carrinho</button>
                            <button className= "remove"onClick={()=>removeCart({filteredProduct}) }>Remover do Carrinho</button>
                        </Buttons>
                    </>))} 
                </Card>
            </Item>
         {/*  <Link to="/cart"><GotoCart/></Link> */}
        </Container>
    )

}

const Container = styled.div `
                                height: 100vh;
                                width: 100vw;
                                display:flex;
                                flex-direction: column;
                                align-items:center;
                                color:#000000;
                                background: linear-gradient( 150deg, #4776E6, #8E54E9);

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
                            width:250px;
                            height:450px;
                            background: linear-gradient(152.55deg, #4776E6 0%, #8E54E9 100%);
                            border-radius: 18px;
                            display:flex;
                            flex-direction: column;
                            align-items:center;
                            justify-content: space-around;
                            background: #FFFFFF;

`

const Item = styled.div `
                            display:flex;
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
const Buttons = styled.div `    display:flex;
                                align-items:space-around;
                             
                            button{
                                width:100px;
                                cursor:pointer;
                             }

                           
`