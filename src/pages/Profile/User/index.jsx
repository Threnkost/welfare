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


const _Star = ({filled}) => {
    return (
        <FontAwesomeIcon icon={faStar} className={
            filled
            ? "text-orange-400"
            : "text-slate-500"
        } />
    );
}


const User = () => {

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
                                <p>Eren Oğuz</p>
                                <p>Izmit, Kocaeli</p>
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
                                <p>99</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <TextField label="Name" variant="outlined" />
                            <TextField label="Surname" variant="outlined" />
                            <TextField className="col-span-2" label="E-mail" variant="outlined" />
                            <TextField className="col-span-2" label="Phone Number" variant="outlined" />
                        </div>
                        <div className="flex gap-3">
                            <Button
                                variant="contained"
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

export default User;