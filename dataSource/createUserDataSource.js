import {MongoDataSource} from 'apollo-datasource-mongodb';
import {AuthenticationError,ForbiddenError,ValidationError} from "apollo-server-errors";
import bcrypt from 'bcrypt';
export default class users extends MongoDataSource {
    async createUsers(data) {
        if(data){
            console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",data);
            // const organizations = await this.model.find({email:data.email});

            // if(organizations?.length){
            //     throw new AuthenticationError('this organization already exist')
            // }else {
            //     const user = {...data,
            //         password: await bcrypt.hash(data.password, 10)
            //     }
                const newUser = await this.model.create(data);
                return newUser;
            // }
        }else {
            ValidationError('please enter valid data')
        }
    }
};
