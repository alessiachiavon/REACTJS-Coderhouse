import { collection, query, where, documentId, getDocs, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"

import { db } from "../../services/firebase/firebaseConfig"
import { useContext, useState } from "react"

import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { useNotification } from "../../notification/notificationService"

import imagenCheckout from './assets/Showroom.jpg'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { setNotification } = useNotification()

    const { cart, totalQuantity, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email, repEmail}) => {

        if(email == repEmail){

            setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart, 
                total: totalQuantity, 
                dale: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productosAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productosAddedFromFirestore
            console.log(docs)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                console.log(stockDb)


                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                setNotification('success', 'Algunos productos se encuentran sin stock')
            }
    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
        }

    else{ 
        
        setNotification('success', 'Su mail es incorrecto!')
        
    }

        
}

if(loading) {
    return <h1>Se está generando su orden...</h1>
}

if(orderId) {
    return <h1>El ID de su orden es: {orderId} </h1>
}

return (
    <div style={{display:'flex', marginTop:50}}>
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
        <img style={{height:530}} src={imagenCheckout} alt="cart-widget"/>
    </div>
)
}

export default Checkout