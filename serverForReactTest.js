const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const products = [
    { item: 'T-shirt', price: 600, id: 1 },
    { item: 'Jean', price: 500, id: 2 },
    { item: 'Shoes', price: 1000, id: 3 }
]
app.get('/products', (req, res) => {
    res.json(products)
})
app.listen(3002, () => {
    console.log('...Running')
})