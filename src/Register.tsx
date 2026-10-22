
import React from 'react';
import { TextField, Button } from '@mui/material';

function Register(props: any) {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [confirmPass, setConfirmPass] = React.useState("");

    function register() {
        if (!email.trim() || !pass.trim() || !confirmPass.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (pass !== confirmPass) {
            alert("Passwords do not match.");
            return;
        }

        fetch(props.config.serviceroot + "/register.php", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                email: email,
                pass: pass
            })
        })
            .then(r => r.json())
            .then(j => {
                alert(j.message);

                if (j.success) {
                    props.onBackToLogin();
                }
            })
            .catch(e => {
                alert("Communication with the server failed.");
                console.log(e);
            });
    }

    return (
        <div>
            <TextField
                type="email"
                required
                label="Email"
                onChange={e => setEmail(e.target.value)}
            />

            <TextField
                type="password"
                required
                label="Password"
                onChange={e => setPass(e.target.value)}
            />

            <TextField
                type="password"
                required
                label="Confirm password"
                onChange={e => setConfirmPass(e.target.value)}
            />

            <Button onClick={register}>
                Register
            </Button>

            <Button onClick={props.onBackToLogin}>
                Back to login
            </Button>
        </div>
    );
}

export default Register;
