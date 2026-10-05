# GlowCraft (React + Vite + JSON Server)

## تشغيل المشروع
```bash
npm install
npm run server     # JSON Server على http://localhost:3001
npm run dev        # React على http://localhost:5173
```
(افتحوا تيرمنالين: واحد للـ server وواحد للـ dev)

حسابات تجريبية:
- أدمن: `admin@glowcraft.com` / `Admin@123`
- يوزر: `eman@example.com` / `123456`

## توزيع الملفات على البرانشات

| رقم | البرانش | الملفات (جوه `src/`) |
|---|---|---|
| Eman | `develop` | `package.json`, `vite.config.js`, `index.html`, `db.json`, `main.jsx`, `App.jsx`, `index.css`, `services/api.js`, `utils/helpers.js`, `context/AuthContext.jsx`, `context/ShopContext.jsx`, `components/Layout`, `ProtectedRoute`, `ProductCard`, `ProductImage` | `Presentation`
| 1 >> Doaa| `feature/home-page` | `pages/Home/*` + `components/Navbar.jsx`, `components/Footer.jsx` |
| 2 >> Hager| `feature/products` | `pages/Products/*` + `pages/ProductDetails/*` |
| 3 >> Amina| `feature/routine-compare-wishlist` | `pages/RoutineFinder/*` + `pages/IngredientTracker/*` + `pages/Wishlist/*` (المقارنة جواها) |
| 4 >> Rawan| `feature/cart-checkout-orders` | `pages/Cart/*` + `pages/Checkout/*` + `pages/Orders/*` |
| 5 >> Eman| `feature/auth-contact` | `pages/Login/*` + `pages/Register/*` + `pages/Contact/*` |
| 6 >> Khloud| `feature/profile-admin` | `pages/Profile/*` + `pages/Admin/*` |
| 7 >> Rahma| `feature/about-theme-i18n` | `pages/About/*` + `context/ThemeContext.jsx` + `context/LangContext.jsx` |
