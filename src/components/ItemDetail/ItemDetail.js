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
                <img src={imagen}/>
            </picture>
            <header>
                <h2>
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
                <p>
                    ${precio}
                </p>
            </section>
            {
                quantity == 0
                    ? ( stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                    : <button>Finalizar compra</button>
            }
        </article>
    )
}

export default ItemDetail