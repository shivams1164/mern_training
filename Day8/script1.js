

const express = require('express')


const app = express()

app.get('/home', (req, res) => {
    res.send("<h1>this is  home page</h1>");
})

app.post('/product', (req, res) => {
    res.send("<h1>This is Product Page</h1>");
})

app.patch('/contactus', (req, res) => {
    res.send("<h1>this is  contact page</h1>");
})

app.delete('/home', (req, res) => {
    res.send("<h1>this is delete home page</h1>");
})


app.listen(3000)