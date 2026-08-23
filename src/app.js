import express from 'express'
import cors from 'cors'
import postRoutes from './routers/post.routers.js'
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", postRoutes)

export default app