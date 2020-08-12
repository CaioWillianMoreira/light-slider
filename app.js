const express = require('express')
const app = express()
const port = 3003

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get(['/', '/home'], (req, res) => {
  res.render('pages/index')
})

app.get('*', (req, res) => {
  res.render('pages/404')
})

app.listen(port, () => {
  console.log(`App running in ${port}`)
})
