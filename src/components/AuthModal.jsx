import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { IoClose } from 'react-icons/io5'

export default function AuthModal({ onClose }) {
    const [tab, setTab] = useState('login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, register } = useAuth()

    const handle = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            if (tab === 'login') await login(email, password)
            else await register(name, email, password)
            onClose()
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="relative bg-[#1a0a00] border border-[#FFD700]/20 rounded-3xl p-8 w-full max-w-md shadow-2xl">
                <button onClick={onClose} className="absolute top-4 right-4 text-[#FFD700] text-2xl hover:text-white transition-colors">
                    <IoClose />
                </button>

                <h2 className="impact-font text-[#FFD700] text-4xl mb-6 text-center uppercase">
                    {tab === 'login' ? 'Login' : 'Register'}
                </h2>

                <div className="flex bg-black/40 rounded-full p-1 mb-6">
                    {['login', 'register'].map(t => (
                        <button key={t} onClick={() => { setTab(t); setError('') }} className={`flex-1 py-2 rounded-full text-sm font-bold transition-all raleway-font ${tab === t ? 'bg-[#FFD700] text-black' : 'text-[#FFD700]/60 hover:text-[#FFD700]'}`}>
                            {t === 'login' ? 'Login' : 'Register'}
                        </button>
                    ))}
                </div>

                <form onSubmit={handle} className="space-y-4">
                    {tab === 'register' && (
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" required className="w-full bg-black/40 border border-[#FFD700]/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FFD700]/60 transition-colors raleway-font" />
                    )}
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" required className="w-full bg-black/40 border border-[#FFD700]/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FFD700]/60 transition-colors raleway-font" />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required minLength={6} className="w-full bg-black/40 border border-[#FFD700]/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FFD700]/60 transition-colors raleway-font" />

                    {error && <p className="text-red-400 text-sm text-center raleway-font">{error}</p>}

                    <button type="submit" disabled={loading} className="w-full bg-[#FFD700] text-black font-bold py-3 rounded-xl hover:bg-[#e6c200] transition-all disabled:opacity-50 impact-font text-lg tracking-wider">
                        {loading ? 'Processing...' : tab === 'login' ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    )
}