const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")


app.use(cors())
app.use(express.json())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/api/v0/', (req, res) => {
    res.json({msg: "start live api"})
})

app.get('/api/v0/admin/', (req, res) => {
    res.json({msg: "start admin"})
})

app.get('/api/v0/sublime/', (req, res) => {
    res.json({msg: "hello sublime"})
})

// api/v0/cloth

app.listen(process.env.PORT || 3000)
