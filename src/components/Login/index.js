import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import UserActions from 'actions/UserActions';

import VerifyImage from 'images/verify.svg';

import { StyledImage } from './StyledComponents';

const Login = () => {
    const dispatch = useDispatch();

    const [firstName] = useState('test');
    const [lastName] = useState('test');
    const [userName] = useState('test');
    const [email] = useState('test');
    const [password] = useState('test');

    const handleSubmit = () => {
        UserActions.register({
            firstName,
            lastName,
            userName,
            email,
            password,
        });
    };

    return (
        <>
            <form>
                <label>
                    <p>First Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
            </form>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
            <Button>
                <StyledImage src={VerifyImage} />
            </Button>
        </>
    );
};

export default Login;
