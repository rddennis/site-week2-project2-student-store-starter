const express = require('express')
const app = express()

// Home page
app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('....content here...')
})


//custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not found')
})

// Custom 500 error page
app.use((error, req, res, next) => {
    console.error(error.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})