import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { IoClose, IoTrash } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function CartDrawer({ onClose, onAuthRequired }) {
    const { cart, removeFromCart, updateQty, total, placeOrder, itemCount } = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleOrder = () => {
        if (!user) {
            onClose()
            onAuthRequired()
            return
        }
        const order = placeOrder(user)
        if (order) {
            onClose()
            navigate('/orders')
        }
    }

    return (
        <div className="fixed inset-0 z-[200] flex justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-[#1a0a00] w-full max-w-md h-full flex flex-col shadow-2xl border-l border-[#FFD700]/10">

                <div className="flex items-center justify-between px-6 py-5 border-b border-[#FFD700]/10">
                    <h2 className="impact-font text-[#FFD700] text-3xl uppercase">Basket({itemCount})</h2>
                    <button onClick={onClose} className="text-[#FFD700] text-2xl hover:text-white transition-colors">
                        <IoClose />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-[#FFD700]/40 gap-3">
                            <span className="text-6xl">🍔</span>
                            <p className="raleway-font text-lg">Basket is empty.</p>
                        </div>
                    ) : cart.map(item => (
                        <div key={item.id} className="flex items-center gap-4 bg-black/30 rounded-2xl p-3 border border-[#FFD700]/10">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                            <div className="flex-1 min-w-0">
                                <p className="text-[#FFD700] font-bold raleway-font text-sm truncate">{item.name}</p>
                                <p className="text-white/60 text-xs">${item.price} × {item.qty} = ${(parseFloat(item.price) * item.qty).toFixed(2)}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <button onClick={() => updateQty(item.id, item.qty - 1)}
                                    className="w-7 h-7 rounded-full bg-[#FFD700]/10 text-[#FFD700] hover:bg-[#FFD700]/30 transition-colors font-bold text-sm">−</button>
                                <span className="text-white w-5 text-center text-sm">{item.qty}</span>
                                <button onClick={() => updateQty(item.id, item.qty + 1)}
                                    className="w-7 h-7 rounded-full bg-[#FFD700]/10 text-[#FFD700] hover:bg-[#FFD700]/30 transition-colors font-bold text-sm">+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 transition-colors">
                                <IoTrash size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                {cart.length > 0 && (
                    <div className="px-6 py-5 border-t border-[#FFD700]/10 space-y-4">
                        <div className="flex justify-between text-[#FFD700] text-lg font-bold raleway-font">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button onClick={handleOrder}
                            className="w-full bg-[#FFD700] text-black  py-3 rounded-xl hover:bg-[#e6c200] transition-all impact-font text-lg tracking-wider active:scale-95">
                            {user ? 'Order Now' : 'Login and Order Now'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}