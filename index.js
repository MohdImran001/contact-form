const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.sendFile('index.html', {root: __dirname})
})

app.use((req, res, next) => {
    res.send({"Error": "404 not found"})
})

app.listen(5000);