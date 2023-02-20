import {MongoDataSource} from 'apollo-datasource-mongodb';
import {AuthenticationError,ForbiddenError,ValidationError} from "apollo-server-errors";
import bcrypt from 'bcrypt';
export default class organizations extends MongoDataSource {
    async createOrganizations(data) {
        if(data){
            const organizations = await this.model.find({email:data.email});

            if(organizations?.length){
                throw new AuthenticationError('this organization already exist')
            }else {
                const user = {...data,
                    password: await bcrypt.hash(data.password, 10)
                }
                const organization = await this.model.create(user);
                return organization;
            }
        }else {
            ValidationError('please enter valid data')
        }
    }
};
