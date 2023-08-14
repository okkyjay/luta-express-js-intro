const express = require('express')
const route = express.Router()
const controllerFile = require('../controller/index.js')
const middleware = require('../middleware/index.js')

route.get('/get', [middleware.checkValue], controllerFile.getRequest)
route.post('/post', controllerFile.postRequest)
route.put('/put', controllerFile.putRequest)
route.delete('/delete', controllerFile.deleteRequest)


module.exports = route