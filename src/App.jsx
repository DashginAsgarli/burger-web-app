import { Routes, Route } from 'react-router-dom'
import Footer from "./page/Footer"
import Header from "./page/Header"
import Hero from "./page/Hero"
import OrdersPage from './page/OrdersPage'

function HomePage() {

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  )
}

export default App
