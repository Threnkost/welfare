import styled from 'styled-components';

import illustration from '../assets/login.png';
import { TextField, Switch, FormGroup, FormControlLabel, Button } from '@mui/material';


/*
<FormGroup>
  <FormControlLabel control={<Switch defaultChecked />} label="Label" />
  <FormControlLabel required control={<Switch />} label="Required" />
  <FormControlLabel disabled control={<Switch />} label="Disabled" />
</FormGroup>
*/


const SignIn = () => {

    return (
        <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 md:p-20">
            <div className="flex flex-col justify-center p-4 gap-4">
                <h1 className="text-blue-950 font-bold text-xl md:text-3xl">
                    Welfare
                </h1>
                <TextField variant="outlined" label="E-posta" required />
                <TextField variant="outlined" label="Şifre" type="password" required />
                <FormGroup>
                    <FormControlLabel control={<Switch />} label="Beni hatırla" />
                </FormGroup>
                <p>Şifremi unuttum</p>
                <Button
                    className="text-green-500"
                    variant="outlined"
                    size="large"
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