import {MongoDataSource} from 'apollo-datasource-mongodb';
import {AuthenticationError, ValidationError} from "apollo-server-errors";
import bcrypt from 'bcrypt';

export default class users extends MongoDataSource {
    async createUsers(data) {
        if(data){
            const organizations = await this.model.find({email:data.email});
            if(organizations?.length){
                throw new AuthenticationError('this user already exist')
            }else {
                const user = {...data,
                    password: await bcrypt.hash(data.password, 10)
                };
                return this.model.create(user);
            }
        }else {
            ValidationError('please enter valid data')
        }
    }
};
