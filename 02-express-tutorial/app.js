const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = reqire('./routes/auth')

//static assests
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.use('/api/people', people )
app.post('/login',auth)

app.listen(5000,()=>
{
    console.log('Server is listening on port 5000....');
})
