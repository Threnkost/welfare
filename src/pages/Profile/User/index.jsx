import { Button, Rating } from "@mui/material";
import Navbar from "../../../components/Navbar";

import illustration1 from '../../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (3).png';
import illustration2 from '../../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (10).png'
import illustration3 from '../../../assets/avatar.png';
import token from '../../../assets/token.png';
import wave from '../../../assets/wave.png';
import { Table } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faList, faHeart, faCircleDollarToSlot, faStar } from "@fortawesome/free-solid-svg-icons";
import ProfileSidebar from "../../../components/ProfileSidebar";
import { Divider, Input, TextField } from "@mui/material";
import { toast } from 'react-toastify'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useUser } from "../../../hooks/hooks";
import { withAuthProtectionRedirect } from "../../../hoc/Authorization";
const url = '/api/v1/user/update/profile';


const _User = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");

    const userData = useUser();
    console.log(userData);
    useEffect(() => {


    }, [])


    const token = localStorage.getItem('token');


    const handleChange = (event) => {
        const data = {
            "email": email,
            "name": name,
            "surname": surname,
            "phoneNumber": phoneNumber,
            "username": username
        };

        console.log(data);

        axios.put(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.data.success) {
                    toast.success('Your information has changed successfully!');
                    console.log(response.data);
                }
                else toast.error(response.data.message);
            })
            .catch(error => {
                console.error('Güncelleme hatası:', error.response.data);
            });


    }

    //rating bilgisi yok sanirim backendden

    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar />
            <div className="w-full h-full flex bg-slate-100">
                <ProfileSidebar />
                <div className="w-full grid grid-cols-2">
                    <h1 className="col-span-2">Profilim / Bilgilerim</h1>
                    <div className="flex flex-col justify-center gap-4">
                        <div className="flex items-center gap-5">
                            <img src={illustration3} alt="" width="96" />
                            <div className="flex flex-col">
                                <p>{userData.name} {userData.surname}</p>
                                <p>{userData.location}, {userData.city}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 gap-3">
                            <div className="flex flex-col justify-center bg-white p-4 rounded-md">
                                Puanınız
                                <Rating value={4} readOnly />
                            </div>
                            <div className="flex flex-col justify-center bg-white p-4 rounded-md">
                                Kayıt Tarihi
                                <p>01/01/1970</p>
                            </div>
                            <div className="flex flex-col justify-center bg-white p-4 rounded-md">
                                Krediniz
                                <p>{userData.points}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <TextField label="Name" variant="outlined" onChange={(event) => {
                                setName(event.target.value);
                            }} />
                            <TextField label="Surname" variant="outlined" onChange={(event) => {
                                setSurname(event.target.value);
                            }} />
                            <TextField className="col-span-1" label="Username" variant="outlined" onChange={(event) => {
                                setUsername(event.target.value);
                            }} />
                            <TextField className="col-span-1" label="Phone Number" variant="outlined" onChange={(event) => {
                                setPhoneNumber(event.target.value);
                            }} />
                            <TextField className="col-span-2" label="E-mail" variant="outlined" onChange={(event) => {
                                setEmail(event.target.value);
                            }} />

                        </div>
                        <div className="flex gap-3">
                            <Button
                                variant="contained"
                                onClick={handleChange}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-20">
                        <img className=" w-3/4" src={illustration2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}


const User = () => {
    const ProtectedView = withAuthProtectionRedirect(_User);

    return <ProtectedView />;
}

export default User;