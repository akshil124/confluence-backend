import mongoose from 'mongoose';

const createUser = mongoose.Schema({
    name:{
        type: 'String'
    },
    email:{
        type: 'String'
    },
    password:{
        type: 'String'
    },
    role:{
        type: 'String'
    },
    position:{
        type: 'String'
    },
    status:{
        type: 'String'
    },
    gender:{
        type: 'String'
    },
    organizationId:{
        type: 'String'
    },
    teamleaderId:{
        type: 'String'
    },
});

let NewUser = mongoose.model("User",createUser);
export default NewUser;
