import { createContext, useState, useContext, useMemo } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        console.log(item.id)
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])

        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = useMemo(() => {
        let quantity = 0

        cart.forEach(prod => {
            quantity += prod.quantity
        })

        return quantity
    }, [cart])

    const totalPrice = useMemo(() => {
        let quantity = 0

        cart.forEach(prod => {
            quantity += prod.quantity * prod.precio
        })

        return quantity
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}