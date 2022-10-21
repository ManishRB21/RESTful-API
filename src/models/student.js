const mongoose = require("mongoose");
const validator = require("validator");

const studentschema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email : {
        type:String,
        required:true,
        unique:[true, "email present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
    phone : {
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address : {
        type:String,
        required:true,
    }

})

const student = new mongoose.model('Student', studentschema );
module.exports = student;