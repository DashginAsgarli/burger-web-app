<div align="left">

# 🍔 BurgerApp — Modern Fast Food Web App

A sleek, fully responsive burger restaurant ordering app built with React and Tailwind CSS. Features a dark gold aesthetic, real-time cart management, user authentication, and smooth UX across all devices.


<br/>

[![React](https://img.shields.io/badge/React_-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-1e1e2e?style=for-the-badge&logo=vite&logoColor=646CFF)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-1e1e2e?style=for-the-badge&logo=reactrouter&logoColor=CA4245)](https://reactrouter.com)

</div>


## 〔 Features 〕

> [!TIP]
> - 🛒 **Shopping Cart** — Add, remove, and update item quantities with a sleek slide-in drawer.
> - 🔐 **Authentication** — Secure Login & Register modals with real-time form validation and protected ordering routes.
> - 🔍 **Live Search** — Instant search bar with dynamic dropdown results and smooth scroll-to-section navigation.
> - 📦 **Order Management** — Seamlessly place and track your orders with a dedicated and organized orders page.
> - 🎨 **Premium UI** — High-end Dark `#1a0a00` theme accented with `#FFD700` gold highlights and fluid animations.
> - 📱 **Fully Responsive** — Mobile-first architecture featuring optimized horizontal scroll carousels for smaller screens.

<br/>

## 〔 Demo 〕
[![Live Demo](https://img.shields.io/badge/demo-live_site-FFD700?style=for-the-badge&logo=safari&logoColor=1a0a00)](https://your-demo-link.vercel.app)


## 〔 Quick Start 〕

```bash
# Clone
git clone https://github.com/DashginAsgarli/burger-web-app.git
cd burger-web-app

# Install
npm install

# Develop
npm run dev        # → http://localhost:5173

# Build
npm run build
npm run preview
```

<br/>

## 〔 Project Structure 〕

```
src/
├── assets/             # SVG images (burgers, deals, frames)
├── components/
│   ├── AuthModal.jsx   # Login / Register modal
│   ├── CartDrawer.jsx  # Slide-in shopping cart
│   ├── SearchBar.jsx   # Live search with dropdown
│   ├── BurgerPatty.jsx # Burger cards section
│   ├── DealsSection.jsx# Deals cards section
│   ├── LiveKitchen.jsx # Video frame section
│   ├── MobileApp.jsx   # App download section
│   └── HomePage.jsx    # Hero section
├── context/
│   ├── CartContext.jsx  # Global cart state (add, remove, updateQty, placeOrder)
│   └── AuthContext.jsx  # Global auth state (login, register, user)
├── pages/
│   └── OrdersPage.jsx  # Order history page
└── main.jsx
```

<br/>


## 〔 Responsive 〕

```
  📱 Mobile   →  Horizontal snap-scroll carousels
  📟 Tablet   →  Flex + mixed grid layouts
  🖥️ Desktop  →  4-col grid · full hero · side-by-side sections
```

<br/>


## 〔 Contributing 〕

```bash
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

<br/>

## 〔 License 〕

Distributed under the **MIT License** — see [`LICENSE`](LICENSE) for details.