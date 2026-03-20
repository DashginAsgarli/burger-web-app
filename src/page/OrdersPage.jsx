import React from 'react' // React.Fragment üçün lazımdır
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Header from '../page/Header'
import Footer from '../page/Footer'

const STATUS = {
    'Hazırlanır': { color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30', emoji: '👨‍🍳', label: 'Preparing' },
    'Yolda': { color: 'text-blue-400 bg-blue-400/10 border-blue-400/30', emoji: '🛵', label: 'On the Way' },
    'Çatdırıldı': { color: 'text-green-400 bg-green-400/10 border-green-400/30', emoji: '✅', label: 'Delivered' },
}

export default function OrdersPage() {
    const { user } = useAuth()
    const { userOrders } = useCart()

    if (!user) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4 text-center px-4">
                <span className="text-6xl">🔒</span>
                <p className="impact-font text-[#FFD700] text-4xl">Login Required</p>
                <Link to="/" className="bg-[#FFD700] text-black px-8 py-3 rounded-full font-bold raleway-font hover:bg-[#e6c200] transition-all">
                    Return to Home Page
                </Link>
            </div>
        )
    }

    const orders = userOrders(user.id).slice().reverse()

    return (
        <>
            <Header />
            <main className="min-h-screen bg-black pt-25 pb-20 px-6 md:px-20 lg:px-28">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="impact-font text-[#FFD700] text-4xl md:text-5xl uppercase">My Orders</h1>
                    <span className="raleway-font text-white/40 text-sm">{user.name}</span>
                </div>

                {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 text-[#FFD700]/40">
                        <span className="text-7xl">📦</span>
                        <p className="raleway-font text-xl">No orders yet</p>
                        <Link to="/" className="bg-[#FFD700] text-black px-8 py-3 rounded-full font-bold raleway-font hover:bg-[#e6c200] transition-all mt-2">
                            Order Now
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map(order => {
                            const s = STATUS[order.status] || STATUS['Hazırlanır']
                            return (
                                <div key={order.id} className="bg-[#1a0a00] border border-[#FFD700]/10 rounded-3xl p-6 space-y-4 hover:border-[#FFD700]/25 transition-colors">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <p className="text-[#FFD700] font-bold raleway-font">Order #{order.id}</p>
                                            <p className="text-white/40 text-sm raleway-font mt-0.5">
                                                {new Date(order.createdAt).toLocaleString('en-US')}
                                            </p>
                                        </div>
                                        <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold border raleway-font ${s.color}`}>
                                            {s.emoji} {s.label}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {['Hazırlanır', 'Yolda', 'Çatdırıldı'].map((step, i) => {
                                            const steps = ['Hazırlanır', 'Yolda', 'Çatdırıldı']
                                            const stepLabels = { 'Hazırlanır': 'Preparing', 'Yolda': 'On the Way', 'Çatdırıldı': 'Delivered' }
                                            const current = steps.indexOf(order.status)
                                            const active = i <= current
                                            return (
                                                <React.Fragment key={step}>
                                                    <div className={`flex items-center gap-1.5 text-xs raleway-font ${active ? 'text-[#FFD700]' : 'text-white/20'}`}>
                                                        <div className={`w-2 h-2 rounded-full ${active ? 'bg-[#FFD700]' : 'bg-white/20'}`} />
                                                        {stepLabels[step]}
                                                    </div>
                                                    {i < 2 && <div className={`flex-1 h-px ${active && i < current ? 'bg-[#FFD700]/50' : 'bg-white/10'}`} />}
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>

                                    <div className="space-y-2 pt-2 border-t border-[#FFD700]/5">
                                        {order.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
                                                <span className="text-white/70 raleway-font text-sm flex-1">{item.name}</span>
                                                <span className="text-[#FFD700]/60 text-sm raleway-font">×{item.qty}</span>
                                                <span className="text-white/60 text-sm raleway-font">${(parseFloat(item.price) * item.qty).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-end border-t border-[#FFD700]/10 pt-3">
                                        <span className="text-[#FFD700] font-bold raleway-font text-lg">Total: ${order.total}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}