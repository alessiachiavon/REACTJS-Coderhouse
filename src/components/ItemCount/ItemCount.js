import { Button } from "bootstrap"
import { useState } from 'react' 

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if(count > 1) setCount(prev => prev -1)
    }

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }

    return(
        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick={decrement} style={{width:30, height:30, color:'grey', backgroundColor:'transparent', borderRadius:30, fontWeight:'bolder'}}>-</button>
            <h3 style={{color:'grey', fontSize:20, marginLeft:20, marginRight:20}}>{count}</h3>
            <button onClick={increment} style={{width:30, height:30, color:'grey', backgroundColor:'transparent', borderRadius:30, fontWeight:'bolder'}}>+</button>
            </div>
            <button onClick={() => onAdd(count)} style={{padding:10, border:'none', color:'white', backgroundColor: 'grey', margin:25, borderRadius:10}}>Agregar al carrito </button>
        </div>
    )
}

export default ItemCount