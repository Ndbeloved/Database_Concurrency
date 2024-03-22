import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { createResourse, bookSpace } from './database.js'
const app = express()
const PORT = process.env.PORT


app.use(express.json())

app.post('/newspace', async(req, res)=>{
    const newSpace = createResourse()
    if(!newSpace) return res.status(401).json({message: 'Error trying to create new space'})
    res.status(200).json({message: "successfully created new space"})
})

app.post('/bookspace/:id/:customer', (req, res)=>{
    const {id, customer} = req.params //should use req.body...but too lazy
    const booked = bookSpace(customer, id)
    if(!booked) return res.status(500).json({message: "Error booking space"})
    res.status(200).json({message: "successfully booked space"})
})



app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({message: "Something went 💩"})
})

app.listen(PORT, ()=>{
    console.log(`server is live on http://localhost:${PORT}`);
})