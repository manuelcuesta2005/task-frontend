var url = 'http://localhost:3001';
import axios from "axios";

export const httpGet = async (endpoint: string): Promise<Response | any> => {
    return await axios.get(url + "/" + endpoint,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json; charset=UTF-8'},
    }).then((response) => response.data).then((data) => data).catch((err) => err);
}

export const httpPost = async(endpoint: string, json: any): Promise<Response | any> =>{
    return await axios.post(url + "/" + endpoint, json).then((response) => response.data).then((data) => data).catch((err) => err);
}

export const httpPut = async(endpoint: string, json: any, id: string): Promise<Response | any> =>{
    return await axios.put(url + "/" + endpoint + "/" + id, json).then((response) => response.data).then((data) => data).catch((err) => err);
}

export const httpDelete = async(endpoint: string, json: any, id: string): Promise<Response | any> =>{
    return await axios.delete(url + "/" + endpoint + "/" + id, json).then((response) => response.data).then((data) => data).catch((err) => err);
}