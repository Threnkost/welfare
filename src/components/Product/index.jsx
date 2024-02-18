import { Button, ProductPaper } from "./components";
import styled from "styled-components";
import { Rating } from "@mui/material";
import { Divider, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faShareNodes } from "@fortawesome/free-solid-svg-icons";


const _ProductPaper = styled("div")(
    (props) => `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25em;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.5em;
    `
)

const _ImageBox = styled("div")(
    (props) => `
        width: 8rem;
        height: 8rem;
        border-radius: 5px;
        border: 1px solid black;
    `
)

const _Divider = styled("div")(
    (props) => `
        height: 1px;
        width: 100%;
        background-color: black;
    `
)

const _Button = styled("button")(
    (props) => `
        border-radius: 50%;
        padding: 0.5em;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    `
)


const _CustomButton = ({ title, render }) => {
    return (
        <Tooltip title={title}>
            <_Button>
                {render()}
            </_Button>
        </Tooltip>
    );
}


const Product = () => {
    return (
        <_ProductPaper>
            <_ImageBox />
            <Rating value={4} readOnly />
            <p>Lorem ipsum</p>
            <p>Seller</p>
            <p>99 $</p>
            <_Divider className="mt-2 mb-2" />
            <div className="flex justify-evenly items-center w-full">
                <_CustomButton
                    title="Sepete Ekle"
                    render={() => <FontAwesomeIcon icon={faPlus} />}
                />

                <_CustomButton 
                    title="Favorilere Ekle"
                    render={() => <FontAwesomeIcon icon={faHeart} />}
                />

                <_CustomButton 
                    title="Paylaş"
                    render={() => <FontAwesomeIcon icon={faShareNodes} />}
                />
            </div>
        </_ProductPaper>
    );
}

export default Product;