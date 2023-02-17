export const resolvers = {
    Query: {
        hello: () => "world"
    },
    Mutation: {
        createOrganization: (parent, args,context) => {
            return context.dataSource.organization.createOrganizations(args)
        }
    }
};
