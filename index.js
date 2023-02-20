import express from "express";
import dotenv from 'dotenv';
import serverless from "serverless-http";
import graphiql from "graphql-playground-middleware-express";
import { ApolloServer } from "apollo-server-express";
import {typeDefs} from "./serverConfig/typeDefs";
import {resolvers} from "./serverConfig/resolver";
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import {dataSources} from "./serverConfig/dataSource";
dotenv.config();

const Url = process.env.MONGO_DB_URL;
mongoose.set("strictQuery", false);
const connectDB = async () => {
    await mongoose.connect(Url, { useNewUrlParser: true, useUnifiedTopology: true })
};

connectDB().then(()=>{
    console.log('your database run successfully')
}).catch(err=>{
    console.log('err',err);
});

const app = express();
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            // const token = req.headers.authorization.split('Bearer ')[1] || '';
            // let user ;
            // if(token){
            //     user = await jwt.verify(token, process.env.JWT_KEY);
            // }
            // return {user};
            dataSources
        }
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
app.get("/playground", graphiql({ endpoint: "/dev/graphql" }));
const handler = serverless(app);
export { handler };
