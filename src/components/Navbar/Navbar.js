import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/Logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{backgroundColor: 'black', width: '100%', display: 'flex', alignItems: 'center'}}>
            <Link style={{width:'20%'}} to='/'>
            <img style={{width:'90%', padding:20, paddingLeft:50}} src={logo} alt="navbar"/>
            </Link>
            <div style={{width:'75%'}}>
            <NavLink to={'/category/Cartera'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' } style={{padding:20, textDecoration:'none', color:'white'}}>CARTERAS</NavLink>
            <NavLink to={'/category/Mochila'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' } style={{padding:20, textDecoration:'none', color:'white'}}>MOCHILAS</NavLink>
            <NavLink to={'/category/Riñonera'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' } style={{padding:20, textDecoration:'none', color:'white'}}>RIÑONERAS</NavLink>
            <NavLink to={'/category/Bandolera'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' } style={{padding:20, textDecoration:'none', color:'white'}}>BANDOLERAS</NavLink>
            <NavLink to={'/category/Billetera'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' } style={{padding:20, textDecoration:'none', color:'white'}}>BILLETERAS</NavLink>
            <NavLink to={'/category/Porta cosméticos'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' } style={{padding:20, textDecoration:'none', color:'white'}}>ACCESORIOS</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar