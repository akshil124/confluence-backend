import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation{
    createOrganization(name:String!,email:String!,category:String!,employees:String!,password:String!): organization!
    loginUser(email:String!,password:String!): organizations!
    createUser(name:String!, email:String!, password:String! ,role:String! ,position:String! ,status:String! ,gender:String!, organizationId:String! ,teamleaderId:String!): user!
  }
  type organization{
    name:String
    email:String
    category:String
    employees:String
    password:String
  }
  type organizations{
    name:String
    email:String
    category:String
    employees:String
    password:String
    token:String
  }
  type user{
    name:String!
    email:String!
    password:String!
    role:String!
    position:String!
    status:String!
    gender:String!
    organizationId:String!
    teamleaderId:String!
  }
`
