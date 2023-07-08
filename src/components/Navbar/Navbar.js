import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/Logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{backgroundColor: 'black', width: '100%', display: 'flex', alignItems: 'center'}}>
            <Link style={{width:'20%'}} to='/'>
            <img style={{width:'90%', padding:20, paddingLeft:50}} src={logo} alt="navbar"/>
            </Link>
            <div style={{width:'75%'}}>
            <Link to={'/category/Cartera'} style={{padding:20, textDecoration:'none', color:'white'}}>CARTERAS</Link>
            <Link to={'/category/Mochila'} style={{padding:20, textDecoration:'none', color:'white'}}>MOCHILAS</Link>
            <Link to={'/category/Riñonera'} style={{padding:20, textDecoration:'none', color:'white'}}>RIÑONERAS</Link>
            <Link to={'/category/Bandolera'} style={{padding:20, textDecoration:'none', color:'white'}}>BANDOLERAS</Link>
            <Link to={'/category/Billetera'} style={{padding:20, textDecoration:'none', color:'white'}}>BILLETERAS</Link>
            <Link to={'/category/Porta cosméticos'} style={{padding:20, textDecoration:'none', color:'white'}}>ACCESORIOS</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar