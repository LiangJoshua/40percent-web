import promise from 'promise';

import axios from 'axios';

import api from 'utils/api';
import { GET_USERS, USERS_ERROR } from 'constants/DispatchConsants';

const UserActions = {
    register({ firstName, lastName, userName, email, password }) {
        // const res = axios.get(`http://jsonplaceholder.typicode.com/users`);
        return api.users.register({
            firstName,
            lastName,
            userName,
            email,
            password,
        });

        // return api.users.register({
        //     firstName,
        //     lastName,
        //     userName,
        //     email,
        //     password,
        // });
        // .then(response => {
        //     const { error, success } = response;

        //     if (success) {
        //         return response.response;
        //     }

        //     return promise.reject(error);
        // })
        // .catch(error => {
        //     console.log('UserActions.register', error);

        //     return promise.reject(error);
        // });
    },
};

export default UserActions;
