import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import GoogleLogin from 'react-google-login';

var loginstatus = 0

class Login extends Component {

    render() {

        const responseGoogleY = (response) => {
            console.log("Success.")
            console.log(response);
            console.log(loginstatus)
            loginstatus = response.Zi.expires_in
            console.log(loginstatus)
            this.forceUpdate()
        }

        const responseGoogleN = (response) => {
            console.log("Failure")
            console.log(response);
            console.log(loginstatus)
            loginstatus = response.Zi.expires_in
            console.log(loginstatus)
            this.forceUpdate()
        }

        if (loginstatus > 0) {
            return (
                <div className="App">
                    <Button variant="contained">Logged in</Button>
                </div>
            );
        }

        return (
            <div className="App">
                <GoogleLogin
                    clientId="364754577836-a2cqfeabsk8vu38cl9ccpncbi3qpom9b.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogleY}
                    onFailure={responseGoogleN}
                />
            </div>
        )
    }
}

export default Login;
