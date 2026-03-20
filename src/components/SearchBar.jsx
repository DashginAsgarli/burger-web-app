import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'

const searchableItems = [
    { label: 'Triple Patty Burger', path: '/', section: 'burgers' },
    { label: 'Single Patty Burger', path: '/', section: 'burgers' },
    { label: 'Crispy Zinger Burger', path: '/', section: 'burgers' },
    { label: 'Double Patty Burger', path: '/', section: 'burgers' },
    { label: 'Deal 1 Single Patty', path: '/', section: 'deals' },
    { label: 'Deal 2 Double Patty', path: '/', section: 'deals' },
    { label: 'Deal 3 Triple Patty', path: '/', section: 'deals' },
    { label: 'Live Kitchen Texas', path: '/', section: 'live' },
    { label: 'Live Kitchen Florida', path: '/', section: 'live' },
    { label: 'Mobile App', path: '/', section: 'app' },
    { label: 'Sifarişlərim', path: '/orders', section: 'orders' },
]

export default function SearchBar({ className = '', inputClass = '', mobile = false }) {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const val = e.target.value
        setQuery(val)
        if (val.trim().length === 0) {
            setResults([])
            setOpen(false)
            return
        }
        const filtered = searchableItems.filter(item =>
            item.label.toLowerCase().includes(val.toLowerCase())
        )
        setResults(filtered)
        setOpen(true)
    }

    const handleSelect = (item) => {
        setQuery('')
        setOpen(false)
        navigate(item.path)
        setTimeout(() => {
            const el = document.getElementById(item.section)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    const handleKey = (e) => {
        if (e.key === 'Enter' && results.length > 0) handleSelect(results[0])
        if (e.key === 'Escape') setOpen(false)
    }

    return (
        <div className={`relative ${className}`}>
            <div className={`flex items-center gap-2 bg-[#FFD700] h-[40px] px-4 rounded-[35px] ${inputClass}`}>
                <input type="text" value={query} onChange={handleChange} onKeyDown={handleKey} onFocus={() => query && setOpen(true)} onBlur={() => setTimeout(() => setOpen(false), 150)} placeholder={mobile ? 'Search...' : 'Search'} className='outline-none bg-transparent placeholder:text-[#212121]/70 text-[#212121] w-full text-[17px]' />
                <IoSearch className='text-[#212121] text-[18px] shrink-0' />
            </div>

            {open && results.length > 0 && (
                <div className='absolute top-[48px] left-0 right-0 bg-[#1a0a00] border border-[#FFD700]/20 rounded-2xl overflow-hidden shadow-2xl z-[300]'>
                    {results.map((item, i) => (
                        <button key={i} onMouseDown={() => handleSelect(item)} className='w-full text-left px-4 py-3 text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors raleway-font text-sm border-b border-[#FFD700]/5 last:border-0 flex items-center gap-2'>    <IoSearch className='text-[#FFD700]/40 text-[14px] shrink-0' />    {item.label}</button>
                    ))}
                </div>
            )}

            {open && results.length === 0 && query.length > 0 && (
                <div className='absolute top-[48px] left-0 right-0 bg-[#1a0a00] border border-[#FFD700]/20 rounded-2xl overflow-hidden shadow-2xl z-[300]'>
                    <p className='px-4 py-3 text-white/40 raleway-font text-sm'>Nəticə tapılmadı</p>
                </div>
            )}
        </div>
    )
}