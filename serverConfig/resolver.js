export const resolvers = {
    Query: {
        hello: () => "world"
    },
    Mutation: {
        createOrganization: (parent, args,context) => {
            return context.dataSources.organization.createOrganizations(args)
        }
    }
};
