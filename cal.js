const express = require('express')
const bodyparser = require('body-parser')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.use(bodyparser.urlencoded({extented: true}))

app.post('/', (req, res) => {
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  
  var result = num1 + num2
  res.send("The Addition Is " + result)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})