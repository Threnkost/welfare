import { ProductPaper } from "./components";
import styled from "styled-components";
import { Chip, Rating } from "@mui/material";
import { Divider, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faPlus,
	faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HTTPMethods } from "../../Constants/methods";
import endpoints from "../../Constants/endpoints";
import axios from "axios";

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
);

const _ImageBox = styled("div")(
	(props) => `
        width: 8rem;
        height: 8rem;
        border-radius: 5px;
        border: 1px solid black;
    `
);

const _Divider = styled("div")(
	(props) => `
        height: 1px;
        width: 100%;
        background-color: black;
    `
);

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
);

const _CustomButton = ({ title, render }) => {
	return (
		<Tooltip title={title}>
			<_Button>{render()}</_Button>
		</Tooltip>
	);
};

interface ProductProps {
	id: string;
	owner: any;
	title: string;
	point: number;
	description: string;
	img: string;
	tag: string;
}

const Product = (props: ProductProps) => {
	const navigate = useNavigate();

	axios.defaults.baseURL = "http://app.welfare.ws/";
	axios.defaults.headers.common["Access-Control-Allow-Origin"] =
		"http://app.welfare.ws/";
	axios.defaults.withCredentials = true;

	const token = localStorage.getItem("token");

	const handleJoin = () => {
		HTTPMethods.Join(
			`${endpoints.Advert.Join}${props.id}`,
			{},
			{ Authorization: `Bearer ${token}` }
		)
			.then((response: any) => {
				console.log(response);
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

	return (
		<_ProductPaper>
			<img className="mb-2" src={props.img} alt="" width="128" />
			<Rating value={4} readOnly />
			<p>{props.title}</p>
			<p>{props.description}</p>
			<p>{props.owner.username}</p>
			<p>{props.point} $</p>
			<p>{props.id}</p>
			<_Divider className="mt-2 mb-2" />
			<div className="flex flex-col gap-2 justify-evenly items-center w-full mb-2">
				<Button
					variant="outlined"
					fullWidth
					onClick={() => {
						navigate(`/product/${props.id}`);
					}}
				>
					View
				</Button>
				<Button variant="outlined" fullWidth onClick={handleJoin}>
					Join
				</Button>
			</div>
			<Chip label={props.tag} />
		</_ProductPaper>
	);
};

export default Product;