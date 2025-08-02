const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('index', {foo: 'FOO'});
})

app.get('/generate', (req, res) => {
  res.render('index',{foo: 'FOO'});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
