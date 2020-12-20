app.get('/', (req, res) => {res.send('HEALTH')})

app.get('/usuario', User)

app.post('/usuario', Postuser )

module.exports = route