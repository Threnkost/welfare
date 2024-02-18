import React, { useState } from 'react';
import styled from 'styled-components';
import illustration from '../assets/login.png';
import { TextField, Switch, FormGroup, FormControlLabel, Button } from '@mui/material';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault(); // Form submit işlemini engelle

        try {
            const response = await axios.post('/api/v1/auth/login', {
                email,
                password,
            });

            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                alert('Giriş başarılı!'); 
            }
        } catch (error) {
            console.error('Giriş işlemi sırasında hata oluştu', error);
            alert('Giriş başarısız!'); 
        }
    };

    return (
        <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 md:p-20">
            <div className="flex flex-col justify-center p-4 gap-4">
                <h1 className="text-blue-950 font-bold text-xl md:text-3xl">
                    Welfare
                </h1>
                <TextField
                    variant="outlined"
                    label="E-posta"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    label="Şifre"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                        label="Beni hatırla"
                    />
                </FormGroup>
                <p>Şifremi unuttum</p>
                <Button
                    className="text-green-500"
                    variant="outlined"
                    size="large"
                    onClick={handleLogin}
                >
                    Giriş yap
                </Button>
            </div>
            <div className="flex justify-center items-center">
                <img className="max-w-full h-auto" src={illustration} alt="" />
            </div>
        </div>
    );
}

export default SignIn;
