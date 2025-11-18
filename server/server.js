import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRouts.js'
import imageRouter from './routes/imageRouts.js'

const PORT=process.env.PORT||4000
const app=express()


app.use(express.json())
app.use(cors())
await connectDB()

app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.get('/',(req,res)=>res.send("API working fine"))

app.listen(PORT,()=>console.log('Server running at PORT'+ PORT));