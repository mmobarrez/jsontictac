
import React from 'react';
import { TextField, Button } from '@mui/material';

function Login(props: any) {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");

    return (
        <div>
            <TextField
                type="email"
                required
                onChange={e => setEmail(e.target.value)}
                label="Email"
            />

            <TextField
                type="password"
                required
                onChange={e => setPass(e.target.value)}
                label="Pass"
            />

            <Button
                onClick={() => {
                    if (!email.trim() || !pass.trim()) {
                        alert("Please enter both email and password.");
                        return;
                    }

                    if (!email.includes("@")) {
                        alert("Please enter a valid email address.");
                        return;
                    }

                    props.onSignIn(email, pass);
                }}
            >
                Sign in
            </Button>

            <Button
                onClick={() => props.onRegister()}
            >
                Create account
            </Button>
        </div>
    );
}

export default Login;
