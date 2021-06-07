import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login';

import './App.css';

function App() {
    // const [token, setToken] = useState();

    useEffect(() => {
        fetch('/api/')
            .then(res => res.json())
            .then(data => {});
    }, []);
    console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);
    // if (!token) {
    //   return <Login setToken={setToken} />;
    // }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Login />
        </div>
    );
}

export default App;
