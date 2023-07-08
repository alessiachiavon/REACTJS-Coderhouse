import { useState, useEffect } from 'react' 
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { ItemId }     = useParams()

    useEffect(()=> {
        const productRef = doc(db, 'products', ItemId)

        getDoc(productRef)
            .then(querySnapshot => {
                const fields = querySnapshot.data()
                const productAdapted = { id: querySnapshot.id, ...fields}

                setProduct(productAdapted)
            })
 }, [ItemId])

    return(
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer