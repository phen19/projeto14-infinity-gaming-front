import { useState, useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import styled from "styled-components";
import UserContext from "../../UserContext";
import axios from "axios";

export default function Cart(){
    const {products} = useContext(UserContext);
    const { order, setOrder } = useContext(UserContext);
    const { pay, setPay} = useContext(UserContext);
    const { checkInfo, setCheckInfo} = useContext(UserContext);
    const navigate = useNavigate();

    console.log(order)

    function OrderInfo({ord}){
        const [qtd, setQtd] = useState(1)
        console.log(pay)
        return(
                        <>
                            {products.filter(product => product._id === ord).map(p => 
                                <>
                                    <img src={p.image} width="134px"></img>
                                    <h1>{p.name}</h1> 
                                    <h1>R$ {p.price*qtd}</h1>
                                    
                          {/*  <input type ="number" value={qtd} onChange={(e) => (setQtd(e.target.value), setTotal(p.price*qtd))}></input> */}
                            </>)}
                        </>
    
        
        )
    }

    function handleOrder(event){
        event.preventDefault();
        const items = order.map(ord => products.filter(product => product._id === ord))
        const body = {items: items,
                      payment: pay
                }

        const promise = axios.post("http://localhost:5000/order", body);

        promise.then((response) => {
        setCheckInfo(response.data)
        navigate("/checkout")});
        promise.catch((resp) => alert(resp.response.data.message));
    }

    return(
        <>
            <Container>
                <h1>Seu carrinho:</h1>
                <Card>{order.map(ord =>
                        <OrderInfo ord = {ord}/>
                )}
                <label>Método de Pagamento</label>
                <form onChange={(e) => setPay(e.target.value)} onSubmit={handleOrder}>
                    <input type="radio" name="pay" value="Pix" ></input>Pix
                    <input type="radio" name="pay" value="Boleto" ></input>Boleto
                    <input type="radio" name="pay" value="Cartao" ></input>Cartão
                    <button> Confirmar Pedido</button>
                </form>
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