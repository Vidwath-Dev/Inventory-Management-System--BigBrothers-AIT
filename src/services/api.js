import axios from 'axios';

const API_URL="http://localhost:8080";//3 url is coming one backend we don't know

export const saveInvoice = async (payload) => {
    try {
        return await axios.post(`${API_URL}/invoice`,payload)  //calling api use wait because axios is an asynchronous
    }catch (error){
        console.log('Error:',error.message);
        return error.response.data;
    }
}

export const getAllInvoice = async () => {
    try {
        return await axios.get(`${API_URL}/invoice`);
    } catch(error){
        console.log('Error:',error.message);
        return error.response.data;
    }
}


export const deleteInvoice = async (id) => {
    try {
        return await axios.delete(`${API_URL}/invoice/${id}`)  //calling api use wait because axios is an asynchronous
    }catch (error){
        console.log('Error:',error.message);
        return error.response.data;
    }
}