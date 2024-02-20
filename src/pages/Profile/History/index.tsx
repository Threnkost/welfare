import { Button } from "@mui/material";
import Navbar from "../../../components/Navbar";

import illustration1 from '../../../assets/DrawKit Vector Illustration Black Friday & Online Shopping (3).png';
import token from '../../../assets/token.png';
import wave from '../../../assets/wave.png';
import { Table } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faList, faHeart, faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import ProfileSidebar from "../../../components/ProfileSidebar";
import { Divider } from "@mui/material";

import axios from 'axios'
import { useEffect, useState } from "react";

import { Chip } from "@mui/material";


interface _ItemProps {
    title: string;
    date: string;
    points: number;
    seller: string;
    status: string;
}


const _Item = (props: _ItemProps) => {
    return (
        <div className="flex justify-between w-full items-center bg-white shadow-md p-5 rounded">
            <div className="w-24 h-24 rounded border border-black"></div>
            <div className="flex flex-col h-full justify-between p-2">
                <p className="font-bold text-xl text-blue-950">Product</p>
                <p>{props.title}</p>
            </div>

            <div className="flex flex-col h-full justify-between p-2">
                <p className="font-bold text-xl text-blue-950">Date</p>
                <p>{props.date}</p>
            </div>

            <div className="flex flex-col h-full justify-between p-2">
                <p className="font-bold text-xl text-blue-950">Points</p>
                <p>{props.points}</p>
            </div>

            <div className="flex flex-col h-full justify-between p-2">
                <p className="font-bold text-xl text-blue-950">Seller</p>
                <p>{props.seller}</p>
            </div>
            <div className="flex flex-col h-full justify-between p-2">
                <p className="font-bold text-xl text-blue-950">Status</p>
                <div className="flex">
                    <Chip label="Won!" color="success" />
                    <Chip label="Lost" color="error" />
                    <Chip label="Pending" color="warning" />
                </div>
            </div>

        </div>
    );
}


const History = () => {

    const [isEmpty, setIsEmpty] = useState(false);

    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden">
            <Navbar />
            <div className="w-full h-full flex bg-slate-100">
                <ProfileSidebar />
                <div className="flex flex-col gap-5 w-11/12 p-4 px-20">
                    <h1 className="text-2xl text-blue-950 font-bold tracking-widest">Profilim / Geçmişim</h1>
                    <Divider />
                    {
                        isEmpty
                            ? (
                                <div className="flex flex-col w-full items-center">
                                    <img src={illustration1} alt="" width="512" />
                                    <h1 className="text-3xl text-blue-950 font-bold mb-4 tracking-wider">
                                        Henüz hiç alışveriş yapmamışsınız
                                    </h1>
                                    <Button
                                        variant="outlined"
                                    >
                                        Alışverişe Çık
                                    </Button>
                                </div>
                            )
                            : (
                                <div className="flex flex-col w-full items-center gap-3 overflow-auto mb-20">
                                    <_Item
                                        title="ürün"
                                        seller="alper"
                                        date="01-01-1970"
                                        points={100}
                                        status="PENDING"
                                    />
                                </div>
                            )
                    }
                </div>

            </div>
        </div>
    );
}

export default History;