import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation{
    createOrganization(name:String!,email:String!,category:String!,employees:String!,password:String!): organization!
    loginUser(email:String!,password:String!): organizations!
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
`;
