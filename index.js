const express = require('express')
const app = express()
const port = 8082

app.get('/get', function(req, res){
    const person = {
        name: "John Doe"
    }
    res.send(person)
})

app.post('/post', function(req, res){
    return res.send('Post hello world!')
})

app.put('/put', function(req, res){
    return res.send('THis is a put request')
})

app.delete('/delete', function(req, res){
    return res.send('This is a delete request')
})

app.listen(port, function(){
    console.log(port)
})