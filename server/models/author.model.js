// import mongoose
const mongoose = require('mongoose')


const AuthorSchema = new mongoose.Schema({ //change NameSchema for each project
    // key names here, with values that are objects with validations like type and minlength. remember useValidators:true
    firstName: {
        type: String,
        minlength: [3, "Author first name must be at least 3 characters long!"],
        maxlength: [25, "Author first name can be a max of 25 characters"],
        required: [true, "Author first name is required!"]
    },

    lastName: {
        type: String,
        minlength: [3, "Author last name must be at least 3 characters long!"],
        maxlength: [25, "Author last name can be a max of 25 characters"],
        required: [true, "Author last name is required!"]
    }
})





const Author = mongoose.model('Authors', AuthorSchema) //change Name, tableName and NameSchema for each project
//mongoose creates a table named ___ using instructions for ____ above


module.exports = Author //change Name for each project