import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => {
        // do clever google login shizz... 
    }

    return (
        <div className="login">
            <h1>I am the login page</h1>
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
                    alt=""
                />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login