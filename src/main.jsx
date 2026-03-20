import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/burger-web-app">
        <AuthProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AuthProvider>
    </BrowserRouter>
)
