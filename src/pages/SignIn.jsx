import React, { useState } from 'react';
import styled from 'styled-components';
import illustration from '../assets/login.png';
import { TextField, Switch, FormGroup, FormControlLabel, Button } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';


const validationSchema = Yup.object({
    email: Yup
        .string()
        .email("Invalid e-mail format")
        .required("Required field"),
    password: Yup
        .string()
        .required("Required field")
})


const SignIn = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: values => {
            axios.post(
                'api/v1/auth/login',
                {
                    email: values.email,
                    password: values.password
                },
                {
                    'Content-Type': 'application/json'
                }
            )
            .then(response => {
                //Giriş yap.
            })
            .catch(error => {
                if (error.response && error.response.data && error.response.data.msg) {
                    toast.error(error.response.data.msg, { autoClose: 1500 });
                }
                else {
                    toast.error("An error occured while signing in", { autoClose: 1500 });
                }
            })
        }
    });

    return (
        <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 md:p-20">
            <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center p-4 gap-4">
                <h1 className="text-blue-950 font-bold text-xl md:text-3xl">
                    Welfare
                </h1>
                <TextField
                    variant="outlined"
                    id="email"
                    name="email"
                    label="E-mail"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    variant="outlined"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                {
                    /*
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                        label="Beni hatırla"
                    />
                </FormGroup>   
                    */
                }
                <p>Şifremi unuttum</p>
                <Button
                    type='submit'
                    className="text-green-500"
                    variant="outlined"
                    size="large"
                >
                    Sign In
                </Button>
            </form>
            <div className="flex justify-center items-center">
                <img className="max-w-full h-auto" src={illustration} alt="" />
            </div>
        </div>
    );
}


export default SignIn;
