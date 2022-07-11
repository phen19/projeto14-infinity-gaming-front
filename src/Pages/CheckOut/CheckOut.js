import {useContext} from 'react';
import UserContext from "../../UserContext";
import styled from "styled-components";


export default function CheckOut() {

    const { order } = useContext(UserContext);
    const {checkInfo} = useContext(UserContext);
    console.log(order)
    console.log(checkInfo)

 
    return(
        <><Container>
            <Header><div className="title"><h1>Infinity Gaming ထ </h1> </div></Header>
            <Card>
           <h1>Olá, {checkInfo.user.name}. Seu Pedido foi realizado.</h1> 

            <h1>Número do Pedido: {checkInfo._id}</h1>

            <h1>Item(ns):</h1> {checkInfo.items.map(item => 
                <>
                        <h1>{item.name}  R$ {item.price}</h1>
                </>
                )}
            <h1>Total: R$ {checkInfo.total.toFixed(2)}</h1>
            <h1>Método de pagamento: {checkInfo.payment}</h1>
            </Card>
            </Container> 
            </>
    )
}

const Container = styled.div `
                                height: 100vh;
                                width: 100vw;
                                display:flex;
                                flex-direction: column;
                                align-items:center;
                                color:#000000;
                                background-image: linear-gradient( 150deg, #4776E6, #8E54E9);

                                h1{
                                    margin-bottom: 10px;
                                    margin-left: 10px;
                                }
                                input{
                                    margin-top: 10px;
                                }
`

const Card = styled.div` 
                            padding: 30px;
                            background: linear-gradient(152.55deg, #4776E6 0%, #8E54E9 100%);
                            border-radius: 18px;
                            display:flex;
                            flex-direction: column;
                            align-items:center;
                            justify-content: space-around;
                            background: #FFFFFF;

                            .selected{

                            }
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