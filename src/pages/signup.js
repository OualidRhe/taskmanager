import { FormControl, InputLabel, Input, FormHelperText, Container, Button, Grid2 } from '@mui/material';
import { useState } from 'react';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    return (

        <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
            <FormControl fullWidth margin="normal" >
                <Grid2 container spacing={3} direction="column" >

                    {/* Name */}
                    <Grid2 item xs={12} >
                        <FormControl fullWidth >
                            <InputLabel required htmlFor="name-input" > Name </InputLabel>
                            <Input id="name-input" aria-describedby="name-helper-text" />
                            <FormHelperText id="name-helper-text" > Enter your full name.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Email */}
                    <Grid2 item xs={12} >
                        <FormControl fullWidth >
                            <InputLabel required htmlFor="email-input" > Email address </InputLabel>
                            <Input id="email-input" type="email" aria-describedby="email-helper-text" />
                            <FormHelperText id="email-helper-text" > We 'll never share your email.</FormHelperText>
                        </FormControl>
                    </Grid2>

                    {/* Password */}
                    <Grid2 item xs={12} >
                        <FormControl fullWidth >
                            <InputLabel required htmlFor="password-input" > Password </InputLabel>
                            <Input id="password-input" type="password" aria-describedby="password-helper-text" />
                            <FormHelperText id="password-helper-text" > Enter a strong password.</FormHelperText>
                        </FormControl>

                    </Grid2>

                    {/* Confirm Password */}
                    <Grid2 item xs={12} >
                        <FormControl fullWidth >
                            <InputLabel required htmlFor="confirm-password-input" > Confirm Password </InputLabel>
                            <Input id="confirm-password-input" type="password" aria-describedby="confirm-password-helper-text" />
                            <FormHelperText id="confirm-password-helper-text" > Re-enter your password.</FormHelperText>
                        </FormControl>

                    </Grid2>

                    {/* Submit Button */}
                    <Grid2 item xs={12} >
                        <Button variant="contained" color="primary" >
                            Signup
                        </Button>
                    </Grid2>

                </Grid2>
            </FormControl>

        </Container >

    )



}

export default SignupPage;