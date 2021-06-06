import axios from 'axios';

const requester = ({ url, method, data }) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    };
    const options = {
        url,
        method,
        headers,
        data,
    };

    axios(options)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error(error);
        });
};

export default requester;
