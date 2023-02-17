import {MongoDataSource} from 'apollo-datasource-mongodb';

export default class organizations extends MongoDataSource {
    async createOrganizations(data) {
        console.log('data', data)
        return data
        // return await this.model.create({name, email, password, role});
    }
};
