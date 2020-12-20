const express = require('express')
const cors = require('cors')
const User = require('./controller/get-user')
const Postuser = require('./controller/post-user')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('HEALTH')
})

app.get('/usuario', User)

app.post('/usuario', Postuser )

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//1  require lib, 2 porta, rota pra acionar