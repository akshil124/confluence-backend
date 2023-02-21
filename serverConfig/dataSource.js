import Organization from '../models/organizationSchema';
import organizations from "../dataSource/organizationDataSource";
import User from '../models/createUserSchema';
import users from "../dataSource/createUserDataSource";


export const dataSources ={
    organization: new organizations(Organization),
    user: new users(User),
};
