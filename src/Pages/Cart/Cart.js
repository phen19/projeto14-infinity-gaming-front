import { useState, useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import styled from "styled-components";
import UserContext from "../../UserContext";
import axios from "axios";

export default function Cart(){
    const {products} = useContext(UserContext);
    const { order} = useContext(UserContext);
    const { pay, setPay} = useContext(UserContext);
    const {setCheckInfo} = useContext(UserContext);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [cardInfo, setCardInfo] = useState([])


    function OrderInfo({ord}){
        const [qtd] = useState(1)
        return(
                        <>
                            {products.filter(product => product._id === ord).map(p => 
                                <>
                                    <img src={p.image} alt="imagem do produto"width="134px"></img>
                                    <h1>{p.name}</h1> 
                                    <h1>R$ {p.price*qtd}</h1>
                                    
                          {/*  <input type ="number" value={qtd} onChange={(e) => (setQtd(e.target.value), setTotal(p.price*qtd))}></input> */}
                            </>)}
                        </>
    
        
        )
    }

    function handleOrder(event){
        event.preventDefault();
        const items = order.map(ord => products.find(product => product._id === ord))
        let total = 0
        items.forEach((c) => total+= c.price)
       
        const body = {  user: user,
            items: items,
            payment: pay,
            total: total,
            }
        if(pay==="Cartao"){
         body.cardInfo = cardInfo
                
        }

        console.log(body)
        const promise = axios.post("https://projeto14-infinity-gaming.herokuapp.com/order", body);

        promise.then((response) => {
        setCheckInfo(response.data)
        navigate("/checkout")});
        promise.catch((resp) => alert(resp.response.data.message));
    }

    function ConfirmOrder(){
        if (pay ==null || pay.length === 0 || pay === []){
            return <button disabled>Confirmar Pedido</button>
        }else{
            return <button>Confirmar Pedido</button>
        }
    }

    function Total(){
        const info = order.map(ord => products.find(product=> product._id===ord))
        let total = 0
        info.forEach((c) => total+= c.price)
        return (
        <h1>TOTAL: R$ {total.toFixed(2)}</h1>
        )
    }


    return(
        <>
            <Container>
            <Header><div className="title"><h1>Infinity Gaming ထ </h1> </div></Header>
                <Card>
                <h1>Seu Carrinho</h1>    
                {order.map(ord =>
                        <OrderInfo ord = {ord}/>
                )}
                <Total/>
                <label>Método de Pagamento</label>
                <form  onSubmit={handleOrder}>
                    <div className='radiob' onChange={(e) => setPay(e.target.value)}>
                        <input type="radio" name="pay" value="Pix" ></input><label> Pix</label>
                        <input type="radio" name="pay" value="Boleto" ></input><label>Boleto</label>
                        <input type="radio" name="pay" value="Cartao" ></input><label>Cartão</label>
                    </div>
                    <div className='checkoutInfo'>
                <div className = "cardInfo" style={pay === "Cartao" ?  {display:"flex"} : {display:"none"}}>
                    <label>Número do cartão</label><input type="text" value={cardInfo.cardNumber} pattern="[0-9\s]{13,19}"
                    maxLength="19" placeholder="xxxx xxxx xxxx xxxx" onChange={(e) => setCardInfo({...cardInfo, cardNumber: e.target.value})}></input>
                    <label>Titular</label><input type="text" placeholder="Titular" value={cardInfo.cardUser} onChange={(e) => setCardInfo({...cardInfo, cardUser: e.target.value})}></input>
                    <label>Vencimento</label><input type="text" placeholder="MM/AAAA"value={cardInfo.cardGoodThru} onChange={(e) => setCardInfo({...cardInfo, cardGoodThru: e.target.value})}></input>
                    <label>Código de Segurança</label><input type="text" placeholder="VVV" value={cardInfo.securityCode} onChange={(e) => setCardInfo({...cardInfo, securityCode: e.target.value})}></input>
                </div>
                    <ConfirmOrder/>
                    </div>
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
                                background-image: linear-gradient( 150deg, #4776E6, #8E54E9);

                                h1{
                                    margin-bottom: 10px;
                                    margin-left: 10px;
                                }
                                input{
                                    margin-top: 10px;
                                }

                                .radiob{
                                    display:flex;
                                    justify-content: center;
                                }

                                label{
                                    margin-top:10px;
                                }
                                .checkoutInfo{
                                    display:flex;
                                    flex-direction:column;
                                }
                                .cardInfo{
                                    display:flex;
                                    flex-direction:column;
                                }
                                button{
                                    margin-top:10px;
                                }
`

const Card = styled.div` 
                            padding: 30px;
                            border-radius: 18px;
                            display:flex;
                            flex-direction: column;
                            align-items:center;
                            justify-content: space-around;
                            background: #FFFFFF;

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
