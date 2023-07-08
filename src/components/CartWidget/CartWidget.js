import 'bootstrap/dist/css/bootstrap.css';
import cart from './assets/carrito.svg'
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <Link to='/Cart' style={{textDecoration:'none'}}>
        <div style={{display: 'flex'}}> 
        <img style={{width:30}} src={cart} alt="cart-widget"/>
        <div style={{marginLeft:-8, backgroundColor: 'white', width:24, height:24, borderRadius:12, fontWeight:'bold', color: 'black'}} >{ totalQuantity }</div> 
        </div>
        </Link>
    )
}

export default CartWidget