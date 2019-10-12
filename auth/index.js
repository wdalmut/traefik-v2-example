const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(JSON.stringify({
    headers: req.headers,
    body: req.body,
  }, null, 2));

  res.header('X-Auth-User', '1').header('X-Secret', 'from-auth-server').status(200).json("OK")
})


app.listen(port, () => console.log(`Auth app listening on port ${port}!`))
