import express from 'express'

const app = express()
const port = 5000

app.use(express.static('public'))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', {
        name: 'index',
        title: 'Overzicht polls',
    })
})

app.get('/add', (req, res) => {
    res.render('add', {
        name: 'add',
        title: 'Poll toevoegen',
    })
})

app.get('/profile', (req, res) => {
    res.render('profile', {
        name: 'profile',
        title: 'Mijn profiel',
    })
})

app.get('/poll/:id', (req, res) => {
    res.render('poll', {
        title: 'Poll ' + req.params.id,
    })
})

// app.get('/scanning', (req, res) => {
//     res.render('scanning')
// })

// app.get('/product/:barcode', (req, res) => {
//     getProductData(req.params.barcode)
//         .then((productData) => res.render('product', { productData }))
//         .catch((status) => res.render('error', { error: status }))
// })

// app.post(['/scanning', '/product/:barcode'], (req, res) => {
//     res.redirect('/product/' + req.body.searchBar)
// })

// app.get('/offline', (req, res) => {
//     res.render('error', { error: 'offline' })
// })

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
