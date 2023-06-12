import { useState, useEffect } from 'react' 
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { ItemId }     = useParams()
    console.log(ItemId)

    useEffect(()=> {
        getProductById(ItemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [ItemId])

    return(
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer