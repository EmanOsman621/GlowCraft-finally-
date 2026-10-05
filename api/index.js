import fs from 'fs'
import path from 'path'
import jsonServer from 'json-server'

// بنقرأ db.json ونشغّله في الذاكرة (Vercel مبيسمحش بالكتابة على الملفات)
const db = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'db.json'), 'utf-8'))

const server = jsonServer.create()
const router = jsonServer.router(db)

server.use(jsonServer.defaults())
server.use(jsonServer.rewriter({ '/api/*': '/$1' }))
server.use(router)

export default server