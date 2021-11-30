require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 8888

const app = express()

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

app.get('/', (req, res) =>{
	res.send("Hola")
})

app.listen(port, ()=>{
	console.log('http://localhost:'+port)
})