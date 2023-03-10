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
    number:{
        type: 'String'
    },
    plan:{
        type: 'String',
        default: null
    },
    planStatus: {
        type: 'String',
        default: null
    }
});

let Organization = mongoose.model("Organization",organization);
export default Organization;
