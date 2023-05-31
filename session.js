const express = require('express')
const session = require('express-session')

const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'mysecretID',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 20 * 60 * 1000 }
}))
const products = [
    { name: 'shoes', price: 200 },
    { name: 'T-shirt', price: 100 },
    { name: 'jean', price: 120 },
]
app.get('/products', (req, res) => {
    res.send(products)
})
app.get('/', (req, res) => {
    if (!req.session.cart) {
        req.session.cart = []
        res.send('Set Cart OK')
    }
    else {
        res.send('Available Cart')
    }
})
app.get('/cart', (req, res) => {

    res.send(req.session.cart);
})
app.post('/cart', (req, res) => {
    req.session.cart.push(req.body)
    res.redirect('/cart')
})
app.get('/addCart', (req, res) => {
    res.render('formCart')
})
app.get('/ses', (req, res) => {
    res.send(req.session)
})
app.listen(3000, () => { console.log('Running...') })