import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

import portada from './assets/Modacopia.jpg'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = categoryId
        ? query(collection(db, 'products'), where('tipo', '==', categoryId))
        : collection(db, 'products')

        getDocs(productsRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })

                setProducts(productsAdapted)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [categoryId])
        
    if(loading) {
        return <h1>Loading...</h1>
    }
    
    if(typeof categoryId === 'undefined'){
    return  (
        <div>
            <h1>{greeting}</h1>            
                <div>
                <img style={{width:'98%', marginBottom:50}} src={portada} alt="portada"/> 
                <ItemList products={products}/> 
                </div>
        </div>
    )}
    else
    {
        return (
        <div>
            <h1>{greeting}</h1>            
                <div>
                <ItemList products={products}/> 
                </div>
        </div>
    )}
}

export default ItemListContainer