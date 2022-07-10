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
            <Card>
           <h1>Pedido Realizado</h1> 

            <h1>Número do Pedido: {checkInfo._id}</h1>

            <h1>Itens:</h1> {checkInfo.items.map(item => 
                <>
                    {item.map(i=>
                        <>
                        <h1>{i.name}</h1>
                        <h1>R$ {i.price}</h1>
                            
                        </>)}
                </>)}

            <h1>Método de pagamento: {checkInfo.payment}</h1>
            </Card>
            </Container> </>
    )
}

const Container = styled.div `
                                height: 100vh;
                                width: 100vw;
                                display:flex;
                                flex-direction: column;
                                align-items:center;
                                color:#000000;

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