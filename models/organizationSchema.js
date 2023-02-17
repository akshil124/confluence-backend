import mongoose from 'mongoose';

const organization = mongoose.Schema({
    name:{
        type: 'String'
    },
    email:{
        type: 'String'
    },
    category:{
        type: 'String'
    },
    employees:{
        type: 'String'
    },
    password:{
        type: 'String'
    },
});

let Organization = mongoose.model("Organization",organization);
export default Organization;
