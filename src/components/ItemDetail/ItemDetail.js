import { useState, useContext } from "react"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import { useNotification } from "../../notification/notificationService"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, tipo, imagen, color, descripcion, precio, stock}) => {
    const [quantity, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, tipo, color, precio, imagen, stock
        }

        addItem(item, quantity)
        setNotification('success', 'Su producto se agregó al carrito!')
    }

    return (
        <article style={{display:'flex', padding:10, width:900, margin:25}}>
            <picture>
                <img src={imagen} style={{width:300, marginBottom:20}}/>
            </picture>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'start', marginLeft:50}}>
                <header>
                    <h2 style={{fontSize:25}}>
                    {tipo}
                    </h2>
                </header>
                <section style={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start'}}>
                    <p>
                    Color: {color}
                    </p>
                    <p style={{textAlign:'left'}}>
                    {descripcion}
                    </p>
                    <p style={{color:'grey', fontSize:20}}>
                    ${precio}
                    </p>
                </section>
            {
                quantity === 0 
                ? ( stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                : <p style={{display:'flex', flexDirection:'column'}} >
                    <Link to='/Cart' style={{padding:10, textDecoration:'none', color:'white', backgroundColor: 'grey', borderRadius:10}}>Finalizar compra</Link>
                    <Link to='/' style={{padding:10, textDecoration:'none', color:'white', backgroundColor: 'grey', marginTop:8, borderRadius:10}}>Seguir comprando</Link>
                  </p>  }
                  </div>
        </article>
    )
}

export default ItemDetail