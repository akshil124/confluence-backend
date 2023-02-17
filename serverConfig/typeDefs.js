import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation{
    createOrganization(name:String,email:String,category:String,employees:String,password:String): organization!
  }
  type organization{
    name:String
    email:String
    category:String
    employees:String
    password:String
  }
`;
