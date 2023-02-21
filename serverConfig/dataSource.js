import Organization from '../models/organizationSchema';
import organizations from "../dataSource/organizationDataSource";
import User from '../models/createUserSchema';
import users from "../dataSource/createUserDataSource";
import cashFreeDataSource from "../dataSource/cashFreeDataSource";


export const dataSources ={
    organization: new organizations(Organization),
    user: new users(User),
    cashFree: new cashFreeDataSource(Organization)
};
