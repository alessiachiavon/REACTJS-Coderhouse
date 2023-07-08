import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import trash from './assets/trash-bin.png'

const  Cart = () => {
    const { cart, totalPrice, removeItem } = useCart()

    return (
        <div>
            <h2 style={{marginTop:25}}>CARRITO</h2>
            <p style={{color:'grey'}}>____________________________________________________________________________________________</p>
            {
                cart.map(prod => {
                    console.log(prod)
                    return (
                        <div key={prod.id}>
                            <div style={{display:'flex', justifyContent:'center', marginTop:40}}>
                                <div>
                                        <img src={prod.imagen} style={{width:150}}/>
                                </div>
                                <div style={{width:300, display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', marginLeft:60}}>
                                    <h3>{prod.tipo}</h3>
                                    <h6 style={{fontWeight:'bolder', paddingTop:30}}>${prod.precio}</h6>
                                    <h6>Cantidad: {prod.quantity}</h6>
                                    <h6 style={{fontWeight:'bolder', paddingTop:30}}>Subtotal: ${prod.quantity * prod.precio}</h6>
                                </div> 
                                <button onClick={() => removeItem(prod.id)} style={{backgroundColor:'transparent', border:'none', marginLeft:50}}>
                                    <img style={{width:30}} src={trash} alt="cart-widget"/>
                                </button>
                            </div> 
                        </div>
                    )
                })
            }
            <p style={{color:'grey'}}>____________________________________________________________________________________________</p>
            <h4 style={{marginBottom:20}}>TOTAL: ${totalPrice}</h4>
            <Link to='/checkout' style={{padding:10, textDecoration:'none', color:'white', backgroundColor: 'grey', borderRadius:10}}>Finalizar compra</Link>
        </div>


    )
}

export default Cart