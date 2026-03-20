import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('burger_user')
        return saved ? JSON.parse(saved) : null
    })

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('burger_users') || '[]')
        const found = users.find(u => u.email === email && u.password === password)
        
        if (!found) {
            throw new Error('Invalid email or password')
        }

        const { password: _, ...safeUser } = found
        setUser(safeUser)
        localStorage.setItem('burger_user', JSON.stringify(safeUser))
        return safeUser
    }

    const register = (name, email, password) => {
        const users = JSON.parse(localStorage.getItem('burger_users') || '[]')
        
        if (users.find(u => u.email === email)) {
            throw new Error('This email is already registered')
        }

        const newUser = { id: Date.now(), name, email, password }
        users.push(newUser)
        localStorage.setItem('burger_users', JSON.stringify(users))
        
        const { password: _, ...safeUser } = newUser
        setUser(safeUser)
        localStorage.setItem('burger_user', JSON.stringify(safeUser))
        return safeUser
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('burger_user')
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)