import Container from '@mui/material/Container';
import { Grid2 } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { Button } from '@mui/material';

import axios from 'axios';

import { useState } from 'react';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function OnSubmit(e) {
        e.preventDefault();
        if (email === '' || password === '') {
            return;
        }

        const user = {
            email: email,
            password: password,
        }
        console.log(user);
        axios.post('http://localhost:3001/api/login/', user)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.error(err);
            });
    }

    return (
        <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ width: '100%' }} onSubmit={OnSubmit}>
                {/* Email */}
                <Grid2 container spacing={3} direction="column">
                    <Grid2 item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="email-input">Email address *</InputLabel>
                            <Input
                                id="email-input"
                                type="email"
                                aria-describedby="email-helper-text"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Password */}
                    <Grid2 item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="password-input">Password * </InputLabel>
                            <Input
                                required
                                id="password-input"
                                type="password"
                                aria-describedby="password-helper-text"
                                onChange={(e) => setPassword(e.target.value)}

                            />
                            <FormHelperText id="password-helper-text">Enter a strong password.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Submit Button */}
                    <Grid2 item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
        </Container >
    );
}

export default LoginPage;
