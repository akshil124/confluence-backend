import {MongoDataSource} from 'apollo-datasource-mongodb';
import {ForbiddenError, ValidationError} from "apollo-server-errors";
import axios from 'axios';

export default class cashFree extends MongoDataSource {
    async createOrder(data) {
        if(data){
            const options = {
                method: 'POST',
                url: 'https://sandbox.cashfree.com/pg/orders',
                headers: {
                    accept: 'application/json',
                    'x-client-id': process.env.CASHFREE_ID,
                    'x-client-secret': process.env.CASHFREE_KEY,
                    'x-api-version': '2022-09-01',
                    'content-type': 'application/json'
                },
                data: {
                    customer_details: {
                        customer_id: data.customer_id,
                        customer_email: data.customer_email,
                        customer_phone: data.customer_phone
                    },
                    order_meta: {
                        payment_methods: 'upi',
                        return_url: process.env.APP_RETURN_URL
                    },
                    order_id: data.customer_id,
                    order_amount: data.amount,
                    order_currency: 'INR'
                }
            };
            let session_id = "";
            const response = await axios.request(options)
                .catch(function (error) {
                    throw new ForbiddenError(error)
                });
            session_id = response?.data?.payment_session_id;
            return { session_id }
        }else {
            throw new ValidationError('please enter valid data')
        }
    }
    async orderPay(data) {
        if(data){
            const options = {
                method: 'POST',
                url: 'https://sandbox.cashfree.com/pg/orders',
                headers: {
                    accept: 'application/json',
                    'x-api-version': '2022-09-01',
                    'content-type': 'application/json'
                },
                data: {
                    payment_method: {upi: {channel: 'link', upi_id: data.upi_id, upi_expiry_minutes: 10}},
                    payment_session_id: data.session_id
                }
            };
            let redirect_url = "";
            const response = await axios.request(options)
                .catch(function (error) {
                    throw new ForbiddenError(error)
                });
            redirect_url = response?.data?.data?.payload?.web;
            return { redirect_url }
        }else {
            throw new ValidationError('please enter valid data')
        }
    }
};
