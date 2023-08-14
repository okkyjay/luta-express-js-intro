const mongose = require('mongoose')

const PersonSchema = new mongose.Schema({
    name:{
        type: String,
        requred: true
    },
    gender: {
        type: String,
        required: false,
    },
    height: {
        type: Number,
        required: true
    }
})

module.exports = mongose.model("Person", PersonSchema)