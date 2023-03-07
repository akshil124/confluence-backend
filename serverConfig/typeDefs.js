import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation{
    createOrganization(name:String!,email:String!,number:String!,category:String!,employees:String!,password:String!): organization
    loginUser(email:String!,password:String!): organizations
    createUser(name:String, email:String, password:String ,role:String ,position:String ,status:String ,gender:String, organizationId:String ,teamleaderId:String): user
    createOrder(customer_id:String, customer_email:String, customer_phone:String, amount:String, plan:String): session!
    orderPay(upi_id:String, session_id:String): url!
    getOrderPaymentStatus(order_id:String): status!
  }
  type organization{
    _id:String
    name:String
    email:String
    category:String
    employees:String
    password:String
    number:String
    plan:String
    planStatus:String
  }
  type organizations{
    _id:String
    name:String
    email:String
    category:String
    employees:String
    password:String
    number:String
    plan:String
    planStatus:String
    token:String
  }
  type session{
    session_id:String
  }
  type user{
    name:String
    email:String
    password:String
    role:String
    position:String
    status:String
    gender:String
    organizationId:String
    teamleaderId:String
  }
  type url{
    url:String
  }
  type status{
    status:String
  }
`
