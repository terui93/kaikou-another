const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const {getComments, setComments} = require('./db-connect')

app.get('/comments/:page', (req, res) => {
    getComments(res, req.params.page)
})

app.post('/comment', (req, res) => {
    setComments(res, req.body.data.name, req.body.data.comment, req.body.data.page)
})
app.get('/', (req, res) => {
    res.json({ message: 'hello, api' })
})
module.exports = {
    path: '/api',
    handler: app
}