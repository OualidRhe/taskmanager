import { FormControl, InputLabel, Input, FormHelperText, Container, Button, Grid2 } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function OnSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }
        const user = {
            name: name,
            email: email,
            password: password,
        }
        axios.post('http://localhost:3001/api/signup/', user)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ width: '100%' }} onSubmit={OnSubmit}>
                <Grid2 container spacing={3} direction="column">

                    {/* Name Field */}
                    <Grid2 item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel required htmlFor="name-input">Name</InputLabel>
                            <Input id="name-input" aria-describedby="name-helper-text" onChange={(e) => setName(e.target.value)} />
                            <FormHelperText id="name-helper-text">Enter your full name.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Email Field */}
                    <Grid2 item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel required htmlFor="email-input">Email address</InputLabel>
                            <Input id="email-input" type="email" aria-describedby="email-helper-text" onChange={(e) => setEmail(e.target.value)} />
                            <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Password Field */}
                    <Grid2 item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel required htmlFor="password-input">Password</InputLabel>
                            <Input id="password-input" type="password" aria-describedby="password-helper-text"
                                onChange={(e) => setPassword(e.target.value)} />
                            <FormHelperText id="password-helper-text">Enter a strong password.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Confirm Password Field */}
                    <Grid2 item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel required htmlFor="confirm-password-input">Confirm Password</InputLabel>
                            <Input id="confirm-password-input" type="password" aria-describedby="confirm-password-helper-text"
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            <FormHelperText id="confirm-password-helper-text">Re-enter your password.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Submit Button */}
                    <Grid2 item xs={12}>
                        <Button type="submit" variant="contained" color="primary" >
                            Signup
                        </Button>
                    </Grid2>

                </Grid2>
            </form>
        </Container>
    );



}

export default SignupPage;