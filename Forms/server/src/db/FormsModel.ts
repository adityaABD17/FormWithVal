import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    firstname :{
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true,
    },
    Email: {
        type: String,
        required : true ,
        unique : true,
    },
    Phone : {
        type : Number,
        required : true,
    },
    address: {
        type : String,
    },
    city: {
        type : String,
        required : true,
    },
    State: {
        type : String,
        required : true,
    },
    ZipCode: {
        type : Number,
        required : true,
    },
    Comments: {
        type : String,
        required : true,
    },
}, {
    timestamps : true,
}

);

export const FormsModel = mongoose.model('FormData', DataSchema)