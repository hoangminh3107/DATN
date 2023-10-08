import { getData } from './Storage';
import { axiosClient } from '../network/AxiosClient';


export const getDataResponse = async (url, params) => {
    const token = await getData('token');
    try {
        const res = await axiosClient.get(url, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        return res;
    } catch (err) {
        console.log('Error:', err);
    }
};


export const postData = async (url, data) => {
    const token = await getData('token');
    try {
        const res = await axiosClient.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        return res;
    } catch (err) {
        console.log('Error:', err);
    }
};

export const putData = async (url, params) => {
    const token = await getData('token');
    try {
        const res = await axiosClient.put(url, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        return res;
    } catch (err) {
        console.log('Error:', err);
    }
};

export const deleteData = async (url, params) => {
    const token = await getData('token');
    try {
        const res = await axiosClient.delete(url, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        return res;
    } catch (err) {
        console.log('Error:', err);
    }
};