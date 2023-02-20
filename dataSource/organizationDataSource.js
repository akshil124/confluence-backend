import {MongoDataSource} from 'apollo-datasource-mongodb';
import {AuthenticationError, ValidationError} from "apollo-server-errors";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class organizations extends MongoDataSource {
    async createOrganizations(data) {
        if(data){
            const organizations = await this.model.find({email:data.email});

            if(organizations?.length){
                throw new AuthenticationError('this organization already exist')
            }else {
                const user = {...data,
                    password: await bcrypt.hash(data.password, 10)
                };
                return this.model.create(user);
            }
        }else {
            throw new ValidationError('please enter valid data')
        }
    }
    async loginUser(data) {
        if(data){
            const organizations = await this.model.find({email:data.email});
            if(organizations?.length){
                const checkPassword = await bcrypt.compare(data.password,organizations[0].password)
                if(checkPassword){
                    organizations[0].token=jwt.sign({_id: organizations[0]._id}, process.env.JWT_KEY, {
                        expiresIn: '7d',
                    });
                    return organizations[0]
                }
                else {
                    throw new AuthenticationError('password does not match')
                }
            }else {
                throw new AuthenticationError('user not found')
            }
        }else {
            throw new ValidationError('please enter valid data')
        }
    }
};
