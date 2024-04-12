const express = require('express')
const app = express()

app.use(express.json())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/api/v0/', (req, res) => {
    res.json({msg: "start live api"})
})
app.listen(process.env.PORT || 3000)
