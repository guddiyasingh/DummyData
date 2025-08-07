const express = require('express')

const app = express()
const mongoose = require('mongoose');

await mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('index', {foo: 'FOO'});
})

app.get('/generate', (req, res) => {
  // Generate random data
  res.render('index',{foo: 'FOO'});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
