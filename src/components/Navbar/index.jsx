import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleDown, faRightToBracket, faCartShopping, faClose, faMinus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button, TextField, Badge, Autocomplete } from "@mui/material";
import logo from '../../assets/logo.png';
import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useTags } from "../../hooks/hooks";

const _Input = styled.input`
    border: 1px solid #aeb6bf;
    border-radius: 5px 0 0 5px;
    padding: 5px;
    width: 600px;
`;


const _Button = styled.button`
    border: 1px solid #aeb6bf;
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 36px;
    height: 36px;

    border-radius: 0 5px 5px 0;
`;


const _CartItem_Button = styled("button")(
    props => `
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2c3e50;
        border-radius: 50%;
        padding: 0.5em;
        color: white;
    `
)


const _CartItem = () => {
    return (
        <div className="w-full bg-white rounded flex p-2 shadow-md shadow-slate-400 flex items-center gap-4">
            <div className="w-16 h-16 rounded border border-slate-700"></div>
            <div className="flex flex-col gap-2">
                <p>Item</p>
                <div className="flex gap-2">
                    <Tooltip title="Remove">
                        <_CartItem_Button>
                            <FontAwesomeIcon icon={faMinus} />
                        </_CartItem_Button>
                    </Tooltip>

                    <Tooltip title="Add to Favs">
                        <_CartItem_Button>
                            <FontAwesomeIcon icon={faHeart} />
                        </_CartItem_Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}


const Navbar = ({defaultCategory, defaultTag}) => {

    const [isCartVisible, setCartVisible] = useState(false);
    const [category, setCategory] = useState(defaultCategory ? defaultCategory : "");
    const [tag, setTag] = useState(defaultTag ? defaultTag : "");
    const tags = useTags();

    const getTargetURL = () => {

        var targetURL = '/products';
        if (category && tag) {
            targetURL = `/products?category=${category}&tag=${tag}`;
        }
        else if (category) {
            targetURL = `/products?category=${category}`;
        }
        return targetURL;
    }

    return (
        <>
            <div className="w-full flex items-center h-20 p-4 pr-8 bg-white justify-between">
                <Link to="/">
                    <img
                        src={logo}
                        alt=""
                        width="72"
                    />
                </Link>
                <div className="flex">
                    <Autocomplete
                        value={category}
                        onChange={(e, v) => {
                            setCategory(v);
                            setTag("");
                        }}
                        options={Object.keys(tags)}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                        sx={{
                            width: 300
                        }}
                    />
                    <Autocomplete
                        value={tag}
                        onChange={(e, v) => {
                            setTag(v);
                        }}
                        options={category ? tags[category] : []}
                        renderInput={(params) => <TextField {...params} label="Tag" />}
                        sx={{
                            width: 200
                        }}
                    />
                    <Tooltip title="Search">
                        <Button
                            variant="outlined"
                        >
                            <a href={getTargetURL()}>
                                <FontAwesomeIcon className="w-5 h-5" icon={faMagnifyingGlass} />
                            </a>
                        </Button>
                    </Tooltip>
                </div>

                <div className="flex gap-8">
                    <div className="flex items-center">
                        <p className="text-lg text-blue-950">Kategoriler</p>
                    </div>
                    <p className="text-lg text-blue-950">Destek</p>
                    <p className="text-lg text-blue-950">Hakkımızda</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-lg text-blue-950">
                        <Link to="/signin">Giriş yap</Link>
                    </p>
                    <Badge color="secondary" badgeContent={99}>
                        <button className="text-lg text-blue-950" onClick={() => setCartVisible(!isCartVisible)} >
                            <FontAwesomeIcon className="w-6 h-6" icon={faCartShopping} />
                        </button>
                    </Badge>
                </div>
            </div>

            {
                isCartVisible &&
                (
                    <div className="h-screen w-full z-50 fixed grid grid-cols-12">
                        <div className="bg-slate-800 opacity-85 h-full col-span-10"></div>
                        <div className="h-full bg-slate-200 right-0 col-span-2 p-4 relative">

                            <div className="flex justify-between items-center border-b border-slate-900 pb-4 mb-4">
                                <h1>My Cart</h1>
                                <FontAwesomeIcon className="cursor-pointer w-5 h-5" icon={faClose} onClick={() => setCartVisible(false)} />
                            </div>
                            <div className="flex flex-col">
                                <_CartItem />
                            </div>
                            <Button
                                className="absolute bottom-0"
                                variant="outlined"
                            >
                                Complete *!
                            </Button>
                        </div>
                    </div>
                )
            }
        </>

    );
}
export default Navbar;