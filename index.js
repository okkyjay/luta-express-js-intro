const express = require('express')
const app = express()
const routes = require('./app/routes/routes')
const port = 8082

app.use(routes)
app.listen(port, function(){
    console.log(port)
})