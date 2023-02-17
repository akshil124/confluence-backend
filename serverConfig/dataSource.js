import Organization from '../models/organizationSchema';
import organizations from "../dataSource/organizationDataSource";

export const dataSources ={
    organization: new organizations(Organization),
};
