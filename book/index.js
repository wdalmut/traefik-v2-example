const express = require('express')
const app = express()
const port = 3000

app.options('/', (req, res) => {
  res
    .status(200)
    .header("x-iam-method", "book:ListBook")
    .header("x-iam-urn", "urn::book.service::"+req.path)
    .send()
})

app.get('/', (req, res) => {
  res.status(200).json({
    id: 1,
    title: "test book"
  })
})

app.listen(port, () => console.log(`Auth app listening on port ${port}!`))

