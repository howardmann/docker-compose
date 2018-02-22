const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Second World WOOO!'))
app.get('/miaow', (req, res) => res.send('Miaow'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))