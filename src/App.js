import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "components/Dashboard";
import Preferences from "components/Preferences";
import Login from "components/Login";
import VerifyIdImage from "images/verify-with-idme-green.png";

import "./App.css";

function App() {
  // const [token, setToken] = useState();

  // useEffect(() => {
  //   fetch("/api/")
  //     .then(res => res.json())
  //     .then(data => {
  //       setCurrentTime(data.time);
  //     });
  // }, []);

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
      <button>
        <img src={VerifyIdImage} />
      </button>
    </div>
  );
}

export default App;
