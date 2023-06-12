import 'bootstrap/dist/css/bootstrap.css';
import cart from './assets/carrito.svg'

const CartWidget = () => {
    return (
    <button type="button" class="btn btn-primary position-relative" style={{backgroundColor:'transparent', border:'none', padding:0, paddingRight:20}}>
    <img style={{width:30}} src={cart} alt="cart-widget"/>
    <span class="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
        0
    <span class="visually-hidden">unread messages</span>
    </span>
    </button>
    )
}

export default CartWidget