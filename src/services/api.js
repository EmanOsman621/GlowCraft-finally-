import axios from 'axios'

// على الجهاز: JSON Server على 3001 — بعد النشر على Vercel: /api على نفس الدومين
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    (import.meta.env.PROD ? '/api' : 'http://localhost:3001'),
})

export default api