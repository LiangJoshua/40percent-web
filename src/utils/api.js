import { FORTY_PERCENT_API_V1_PREFIX } from 'constants/RouteConstants';
import requester from 'utils/requester';

const api = {
    users: {
        register({ firstName, lastName, userName, email, password }) {
            const url = `${FORTY_PERCENT_API_V1_PREFIX}/registration`;

            requester({
                url,
                method: 'POST',
                data: {
                    firstName,
                    lastName,
                    userName,
                    email,
                    password,
                },
            });
        },
    },
};

export default api;
