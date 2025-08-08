const express = require('express')

const app = express()
const mongoose = require('mongoose');
const Employess = require('./models/Employess');

 mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('index', {foo: 'FOO'});
})

app.get('/generate', async (req, res) => {
  // Generate random data
  for (let i = 0; i < 10; i++) {
    let e = await  Employess.create({
       name: String,
    salary: Number,
    language:String,
    city: String,
    isManager: Boolean
    })
    // await e.save()
    }
   res.render('index',{foo: 'FOO'});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
