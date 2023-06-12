import { useState } from "react"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({tipo, imagen, color, descripcion, precio, stock}) => {
    const [quantity, setQuantity] = useState(0)
    console.log(stock)
    
    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
    }
    
    return (
        <article style={{padding:10, width:300, margin:25}}>
            <picture>
                <img src={imagen} style={{width:300, marginBottom:20}}/>
            </picture>
            <header>
                <h2 style={{fontSize:25}}>
                    {tipo}
                </h2>
            </header>
            <section>
                <p>
                    Color: {color}
                </p>
                <p>
                    {descripcion}
                </p>
                <p style={{color:'grey', fontSize:20}}>
                    ${precio}
                </p>
            </section>
            {
                quantity == 0
                    ? ( stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                    : <button style={{padding:10, border:'none', color:'white', backgroundColor: 'grey', margin:25, borderRadius:10}}>Finalizar compra</button>
            }
        </article>
    )
}

export default ItemDetail