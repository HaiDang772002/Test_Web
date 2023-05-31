const express = require('express')
const cookieParser = require('cookie-parser')

const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

/*app.get('/', async (req, res, next) => {
    console.log('Go1')
    let minh = await new Promise((resolve) => {
        setTimeout(() => {
            console.log('Min')
            next('vcl')
        }, 3000)
    }
    )
    console.log(minh)
}, (err, req, res, next) => {
    console.log(err)
})*/
const listUser = [
    { username: 'Dang', password: '7722' },
    { username: 'Minh', password: 'doc' },
    { username: 'Long', password: 'film' }
]

app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`)
    next();
})
app.get('/', (req, res) => {
    res.redirect('/login')
})
app.get('/login', (req, res) => {
    res.render('formLogin')
    console.log('My req.body form is: ', req.body)
})
app.post('/login', (req, res) => {
    const { username, password } = req.body
    let check = false;
    listUser.forEach((account) => {
        if (account.username == username && account.password == password) {
            check = true;
        }
    })
    if (check) {
        res.cookie('user', username, { maxAge: 15000 })
        res.redirect('/user')
    }
    else
        res.send('Failed')
})

app.get('/user', (req, res) => {
    let checkLogin = false;
    listUser.forEach((account) => {
        if (req.cookies.user === account.username) {
            checkLogin = true;
        }
    })
    if (checkLogin) {
        res.send('<h1>Welcome to My Web</h1>')
    }
    else {
        res.send('Faied Login')
    }
})
app.listen(3000, () => { console.log('Running...') })