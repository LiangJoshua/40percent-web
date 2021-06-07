import { GET_USERS, USERS_ERROR } from 'constants/DispatchConsants';

const initialState = {
    users: [],
};

const user = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
            };
        case USERS_ERROR:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};

export default user;
