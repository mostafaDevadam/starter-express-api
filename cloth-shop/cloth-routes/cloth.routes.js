

const { CustomerRouter } = require("./cloth.customer.routes.js")

const express = require("express")

const ClothRouter = express() //.Router()

ClothRouter.use("/customer", CustomerRouter)


module.exports.ClothRoutes = ClothRouter

/*
models

user,
customer(userId),
style(customerId),
measurement(styleId, customerId)
*/
