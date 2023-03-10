export const resolvers = {
    Query: {
        hello: () => "world"
    },
    Mutation: {
        createOrganization: (parent, args,context) => {
            return context.dataSources.organization.createOrganizations(args)
        },
        loginUser: (parent, args,context) => {
            return context.dataSources.organization.loginUser(args)
        },
        createUser: (parent, args,context) => {
            console.log('context', context)
            return context.dataSources.user.createUsers(args)
        },
        createOrder: (parent, args, context) => {
            return context.dataSources.cashFree.createOrder(args)
        },
        orderPay: (parent, args, context) => {
            return context.dataSources.cashFree.orderPay(args)
        },
        getOrderPaymentStatus: (parent, args, context) => {
            return context.dataSources.cashFree.getOrderPaymentStatus(args)
        }
    }
};
