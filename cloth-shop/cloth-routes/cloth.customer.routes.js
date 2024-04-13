
const express = require('express')
const CustomerRouter = express.Router();


const prefix = "/customer"

CustomerRouter.get("/", (req, res) => {
	res.send("customer...!")
})
