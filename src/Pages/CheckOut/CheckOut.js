import { useState, useContext} from 'react';
import UserContext from "../../UserContext";
import styled from "styled-components";


export default function CheckOut() {

    const { order, setOrder } = useContext(UserContext);
    const {pay, setPay} = useContext(UserContext);
    const {products, setProducts} = useContext(UserContext);
    console.log(order)
    console.log(pay)
    return(
        <><Container>
            <Card>
            Pedido Realizado

            Número do Pedido: XXX

            Itens: 

            Método de pagamento: {pay}
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