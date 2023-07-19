import axios from 'axios';

const BASE_URL = 'https://api.playground.klarna.com/checkout/v3/'
const ORDERS_ENDPOINT = 'orders'
const TOKEN = 'UEs0MDE1OV9jNmJlYTQ3YWNmMjk6WVFTWHpSMEp1eklQOURwcQ=='

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${TOKEN}`
    }
}

export const postOrder = async (orderData) => {
    return axios.post(`${BASE_URL}${ORDERS_ENDPOINT}`, orderData, headers)

};

export const getOrder = async (orderId) => {
    //const response = await axios.get(`${url}/${orderId}`, headers);
    return axios.get(`${BASE_URL}${ORDERS_ENDPOINT}/${orderId}`, headers)
};
