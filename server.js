'use strict'
const express = require('express')
const PORT = 3000 // Port number to use

var app = express()

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname))

app.listen(PORT, () => console.log(`Loading from http://localhost:${PORT}`))
