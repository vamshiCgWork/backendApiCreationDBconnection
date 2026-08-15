import express from 'express'
import postRoutes from './routers/post.routers.js'
const app = express()
app.use(express.json())


app.use("/api",postRoutes)

export default app