import Container from '@mui/material/Container';
import { Grid2 } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { Button } from '@mui/material';

import { useState } from 'react';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const btnOnClick = () => {
        console.log('Email:', email);
        console.log('Password', password);
    }

    return (
        <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <FormControl fullWidth margin="normal">
                {/* Email */}
                <Grid2 container spacing={3} direction="column">
                    <Grid2 item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel required htmlFor="email-input">Email address</InputLabel>
                            <Input
                                id="email-input"
                                type="email"
                                aria-describedby="email-helper-text"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Password */}
                    <Grid2 item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="password-input">Password</InputLabel>
                            <Input
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
                        <Button variant="contained" color="primary" onClick={btnOnClick}>
                            Login
                        </Button>
                    </Grid2>
                </Grid2>
            </FormControl>
        </Container>
    );
}

export default LoginPage;
