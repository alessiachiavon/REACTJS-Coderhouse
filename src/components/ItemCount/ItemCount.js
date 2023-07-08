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
        <div style={{marginTop:50}}>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button onClick={decrement} style={{height:30, width: 40, padding:1, color:'grey', backgroundColor: 'white', borderColor:'grey', borderWidth:1, borderStyle: 'solid', borderRadius:10}}>-</button>
                <h3 style={{width:50,height:30, paddingTop:1, color:'grey', fontSize:20, marginLeft:3, marginRight:3}}>{count}</h3>
                <button onClick={increment} style={{height:30, width: 40, padding:1, color:'grey', backgroundColor: 'white', borderColor:'grey', borderWidth:1, borderStyle: 'solid', borderRadius:10}}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(count)} style={{height:40, padding:7, border:'none', color:'white', backgroundColor: 'grey', borderRadius:10}}>Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount