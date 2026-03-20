import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState(() =>
        JSON.parse(localStorage.getItem('burger_orders') || '[]')
    )

    const addToCart = (item) => {
        setCart(prev => {
            const exists = prev.find(i => i.id === item.id)
            if (exists) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
            return [...prev, { ...item, qty: 1 }]
        })
    }

    const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))

    const updateQty = (id, qty) => {
        if (qty < 1) return removeFromCart(id)
        setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
    }

    const clearCart = () => setCart([])

    const placeOrder = (user) => {
        if (cart.length === 0) return null

        const order = {
            id: `ORD-${Date.now()}`,
            userId: user.id,
            userName: user.name,
            items: cart,
            total: cart.reduce((s, i) => s + parseFloat(i.price) * i.qty, 0).toFixed(2),
            status: 'Preparing', // "Hazırlanır" statusu "Preparing" olaraq dəyişdirildi
            createdAt: new Date().toISOString(),
        }

        const all = JSON.parse(localStorage.getItem('burger_orders') || '[]')
        all.push(order)
        localStorage.setItem('burger_orders', JSON.stringify(all))
        setOrders(all)
        clearCart()
        return order
    }

    const userOrders = (userId) => orders.filter(o => o.userId === userId)

    const total = cart.reduce((s, i) => s + parseFloat(i.price) * i.qty, 0)
    const itemCount = cart.reduce((s, i) => s + i.qty, 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, placeOrder, userOrders, total, itemCount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)