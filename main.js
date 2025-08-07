const express = require('express')

const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employees');

await mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('index', {foo: 'FOO'});
})

app.get('/generate', (req, res) => {
  // Generate random data
  for (let i = 0; i < 100; i++) {
    let e = Employee.create
    
    }
  res.render('index',{foo: 'FOO'});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
