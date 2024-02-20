import { Page, Container, Box, Content, Title } from "./components";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Category from "../../components/Category";
import styled from "styled-components";

import { Button, Divider } from "@mui/material";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faShareNodes, faPhone, faLocationDot, faShieldHalved, faPlus } from "@fortawesome/free-solid-svg-icons";


import clothes from '../../assets/clothes.png';
import monitor from '../../assets/monitor.png';
import pencil from '../../assets/pencil.png';
import detergent from '../../assets/detergent.png';
import animal from '../../assets/animal.png';
import food from '../../assets/food.png';
import books from '../../assets/books.png';
import cosmetics from '../../assets/cosmetics.png';

import asd from '../../assets/Allura - Giant Phone.png';
import asd2 from '../../assets/Allura - Feedback Session.png';


const Foo = (props) => {
    return (
        <div className="bg-white w-20 h-20 flex items-center justify-center rounded-md shadow-md shadow-slate-400">
            <Tooltip title={props.title}>
                <img 
                    src={props.src}
                    alt=""
                    width="64"
                />
            </Tooltip>
        </div>
    );
}

const Star = () => {
    return <FontAwesomeIcon className="text-orange-400" icon={faStar} />;
}


const Product_Foo_Button = styled.button`
    border: none;
    background-color: black;
    color: #fff;
    border-radius: 50%;
    padding: 4px;
    aspect-ratio: 1 / 1;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Product_Foo = (props) => {
    return (
        <div className="bg-white rounded-md w-52 h-80 flex flex-col box-border gap-4 justify-center">
            {/* IMAGE */}
            <div className="border border-black w-8/12 aspect-square self-center rounded"></div>
            <div className="flex self-center items-center">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p className="font-bold text-blue-950 self-center text-center">Lorem ipsum dolor sit amet</p>
            <Divider />
            <div className="flex gap-2 self-center">
                <Tooltip title="Favorilere Ekle">
                    <Product_Foo_Button>
                            <FontAwesomeIcon icon={faHeart} />
                        </Product_Foo_Button>
                </Tooltip>

                <Tooltip title="Paylaş">
                    <Product_Foo_Button>
                        <FontAwesomeIcon icon={faShareNodes} />
                    </Product_Foo_Button>
                </Tooltip>
                
                <Tooltip title="Sepete Ekle">
                    <Product_Foo_Button>
                        <FontAwesomeIcon icon={faPlus} />
                    </Product_Foo_Button>
                </Tooltip>
            </div>
        </div>
    );
}

const Foo2 = () => {
    return (
        <div>
            
        </div>
    );
}

const Home = () => {
    return (
        <Page>
            <Navbar />
            <Content>
                <Container>
                    <Box style={{gridRow: "1 / 3"}} />
                    <div className="flex flex-col bg-white rounded-md p-4 gap-4 box-border justify-center">
                        <h1 className="font-bold text-2xl text-blue-950">Kategoriler</h1>
                        <div className="flex flex-wrap justify-between">
                            <Foo src={clothes} title="Giyim" />
                            <Foo src={monitor} title="Teknoloji" />
                            <Foo src={food} title="Gıda" />
                            <Foo src={animal} title="Evcil Hayvan" />
                            <Foo src={pencil} title="Kırtasiye" />
                            <Foo src={detergent} title="Temizlik" />
                            <Foo src={books} title="Kitap" />
                            <Foo src={cosmetics} title="Kozmetik" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-white p-4 gap-4 box-border rounded-md">
                        <h1 className="font-bold text-2xl text-blue-950">Favorileriniz</h1>
                        <div className="flex flex-wrap justify-between">
                            
                        </div>
                    </div>
                </Container>
                <div className="w-full grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-md p-4 flex items-center">
                        <FontAwesomeIcon className="w-8 h-8 mr-10 text-blue-950" icon={faPhone} />
                        <p className="text-lg">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="bg-white rounded-md p-4 flex items-center">
                        <FontAwesomeIcon className="w-8 h-8 mr-10 text-blue-950" icon={faLocationDot} />
                        <p className="text-lg">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="bg-white rounded-md p-4 flex items-center">
                        <FontAwesomeIcon className="w-8 h-8 mr-10 text-blue-950" icon={faShieldHalved} />
                        <p className="text-lg">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <Divider />

                {/*Şu an */}
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="rounded-md bg-blue-300 grid grid-cols-2 gap-4">
                        <img src={asd} alt="" />
                        <div className="flex flex-col justify-between p-4">
                            <h1 className="text-blue-950 text-xl font-bold">Lorem ipsum dolor sit amet</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices aliquet elit, a porttitor felis convallis a. Ut nisl enim, auctor sit amet sapien non, blandit feugiat arcu. Duis in commodo augue, sed porta nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae vehicula tellus. Donec nec orci eu arcu vehicula posuere id in sapien. Duis tincidunt efficitur euismod. Aenean dui sapien, feugiat ut imperdiet nec, imperdiet nec neque.</p>
                            <Button
                                variant="outlined"
                            >
                                Şimdi başlayın
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-md bg-blue-300 grid grid-cols-2 gap-4">
                        <img src={asd2} alt="" />
                        <div className="flex flex-col justify-between p-4">
                        <h1 className="text-blue-950 text-xl font-bold">Lorem ipsum dolor sit amet</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices aliquet elit, a porttitor felis convallis a. Ut nisl enim, auctor sit amet sapien non, blandit feugiat arcu. Duis in commodo augue, sed porta nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae vehicula tellus. Donec nec orci eu arcu vehicula posuere id in sapien. Duis tincidunt efficitur euismod. Aenean dui sapien, feugiat ut imperdiet nec, imperdiet nec neque.</p>
                            <Button
                                variant="outlined"
                            >
                                Şimdi başlayın
                            </Button>
                        </div>
                    </div>
                </div>
                <h1 className="font-bold text-3xl text-blue-950 mt-8">
                    En sevilenler
                </h1>
                <Divider />
                <div className="flex gap-4 items-center justify-between">

                    <Button
                        variant="outlined"
                    >
                        Load More
                    </Button>
                </div>

                <h1 className="font-bold text-3xl text-blue-950 mt-8">
                    Yeni Eklenenler
                </h1>
                <Divider />
                <div className="flex gap-4 items-center justify-between">

                    <Button
                        variant="outlined"
                    >
                        Load More
                    </Button>
                </div>
                <Divider />
            </Content>
            
        </Page>
    );
}
export default Home;