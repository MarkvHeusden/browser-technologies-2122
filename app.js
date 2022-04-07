import express from 'express'
const { randomUUID } = await import('crypto')

const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

let polls = []
let concepts = []

app.get('/', (req, res) => {
    res.render('index', {
        name: 'index',
        title: 'Overzicht polls',
        polls,
    })
})

app.get('/add', (req, res) => {
    res.render('add', {
        name: 'add',
        title: 'Poll toevoegen',
    })
})

app.get('/add/:id', (req, res) => {
    const conceptPoll = concepts.find((poll) => poll.id == req.params.id)
    res.render('add-concept', {
        name: 'add',
        title: 'Poll toevoegen',
        conceptPoll,
    })
})

app.get('/profile', (req, res) => {
    res.render('profile', {
        name: 'profile',
        title: 'Mijn profiel',
        concepts,
    })
})

app.get('/poll/:id', (req, res) => {
    const poll = polls.find((poll) => poll.id == req.params.id)
    res.render('poll', {
        name: 'index',
        title: poll.title,
        poll,
    })
})

app.get('/poll/:id/result', (req, res) => {
    const poll = polls.find((poll) => poll.id == req.params.id)
    res.render('result', {
        name: 'index',
        title: 'Resultaat: ' + poll.title,
        poll,
    })
})

app.post('/add-poll', (req, res) => {
    polls.push({
        id: randomUUID(),
        title: req.body.title,
        answers: req.body.answers.filter((valid) => valid),
        votes: [],
        checkbox: req.body.multiple ? true : false,
    })
    res.redirect('/')
})

app.post('/save-poll', (req, res) => {
    concepts.push({
        id: randomUUID(),
        title: req.body.title,
        answers: req.body.answers.filter((valid) => valid),
        votes: [],
        checkbox: req.body.multiple ? true : false,
    })
    res.redirect('/profile')
})

app.post('/delete-concept/:id', (req, res) => {
    concepts = concepts.filter((poll) => poll.id !== req.params.id)
    res.redirect('/profile')
})

app.post('/poll/:id/vote-poll', (req, res) => {
    const poll = polls.find((poll) => poll.id == req.params.id)
    const vote = req.body.vote
    if (vote) {
        if (Array.isArray(vote)) {
            poll.votes = poll.votes.concat(vote)
        } else {
            poll.votes.push(req.body.vote)
        }
    }
    res.redirect('/poll/' + req.params.id + '/result')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
