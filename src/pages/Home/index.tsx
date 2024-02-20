import { Page, Container, Box, Content, Title } from "./components";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Category from "../../components/Category";
import styled from "styled-components";

import { Button, Divider } from "@mui/material";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faStar,
	faShareNodes,
	faPhone,
	faLocationDot,
	faShieldHalved,
	faPlus,
	faArrowLeft,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import clothes from "../../assets/clothes.png";
import monitor from "../../assets/monitor.png";
import pencil from "../../assets/pencil.png";
import detergent from "../../assets/detergent.png";
import animal from "../../assets/animal.png";
import food from "../../assets/food.png";
import books from "../../assets/books.png";
import cosmetics from "../../assets/cosmetics.png";

import asd from "../../assets/Allura - Giant Phone.png";
import asd2 from "../../assets/Allura - Feedback Session.png";
import { useRef, useEffect, useState, MouseEventHandler } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { usePendingAdverts } from "../../Services/pendingAdverts";

interface FooProps {
	title: string;
	category: string;
	src?: string;
}

const Foo = (props: FooProps) => {
	const navigate = useNavigate();

	const handleClick = (e: MouseEventHandler<HTMLButtonElement>) => {
		navigate(`/products?category=${props.category}`);
	};

	return (
		<div className="bg-white w-20 h-20 flex items-center justify-center rounded-md shadow-md shadow-slate-400">
			<Tooltip title={props.title}>
				<button onClick={handleClick}>
					<img src={props.src} alt="" width="64" />
				</button>
			</Tooltip>
		</div>
	);
};

const Star = () => {
	return <FontAwesomeIcon className="text-orange-400" icon={faStar} />;
};

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

interface _FeaturedProps {
    id: string;
	title: string;
	seller: string;
	point: number;
}

const _Featured = (props: _FeaturedProps) => {

    const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between w-full">
				<FontAwesomeIcon className="relative bottom-1" icon={faStar} />
				<FontAwesomeIcon className="relative bottom-3" icon={faStar} />
				<FontAwesomeIcon className="relative bottom-5" icon={faStar} />
				<FontAwesomeIcon className="relative bottom-3" icon={faStar} />
				<FontAwesomeIcon className="relative bottom-1" icon={faStar} />
			</div>

			<div className="bg-white rounded flex flex-col p-4 items-center gap-2">
				<div className="w-24 h-24 border border-black rounded "></div>
				<p>{props.title}</p>
				<p>{props.seller}</p>
				<p>{props.point}</p>
				<Button variant="outlined" fullWidth onClick={() => {
                    navigate(`/product/${props.id}`)
                }}>
					View
				</Button>
			</div>
		</div>
	);
};

const _Slider = (props: { page: any; featured: any }) => {
	const [width, setWidth] = useState<number>(1);
	const [height, setHeight] = useState<number>(1);

	const ref: any = useRef<HTMLDivElement>();

	useEffect(() => {
		if (ref && ref.current) {
			setWidth(ref.current.offsetWidth);
			setHeight(ref.current.offsetHeight);
		}
        console.log("slider ", props.featured)
	}, []);

	return (
		<div
			className="w-full h-full bg-slate-400 rounded overflow-hidden"
			ref={ref}
		>
			<div className="w-full h-full relative">
				<div
					style={{
						transition: "left 250ms ease-out",
						width,
						height,
						left: -(width * props.page),
					}}
					className="absolute flex items-center justify-center bg-red-200 gap-10"
				>
					<_Featured
                        id={props.featured[0]._id}
						title={props.featured[0].title}
						seller={props.featured[0].seller}
						point={props.featured[0].point}
					/>
					<_Featured
                        id={props.featured[1]._id}
						title={props.featured[1].title}
						seller={props.featured[1].seller}
						point={props.featured[1].point}
					/>
				</div>
				<div
					style={{
						transition: "left 250ms ease-out",
						width,
						height,
						left: -(width * (props.page - 1)),
					}}
					className="absolute flex items-center justify-center bg-blue-200 gap-10"
				>
					<_Featured
                        id={props.featured[2]._id}
						title={props.featured[2].title}
						seller={props.featured[2].seller}
						point={props.featured[2].point}
					/>
					<_Featured
                        id={props.featured[3]._id}
						title={props.featured[3].title}
						seller={props.featured[3].seller}
						point={props.featured[3].point}
					/>
				</div>
				<div
					style={{
						transition: "left 250ms ease-out",
						width,
						height,
						left: -(width * (props.page - 2)),
					}}
					className="absolute flex items-center justify-center bg-green-200 gap-10"
				>
					<_Featured
                        id={props.featured[4]._id}
						title={props.featured[4].title}
						seller={props.featured[4].seller}
						point={props.featured[4].point}
					/>
					<_Featured
                        id={props.featured[5]._id}
						title={props.featured[5].title}
						seller={props.featured[5].seller}
						point={props.featured[5].point}
					/>
				</div>
			</div>
		</div>
	);
};

const Home = () => {
	const [page, setPage] = useState<number>(0);
	const [adverts, setAdverts] = useState<Array<any>>([]);
	const [favourites, setFavourites] = useState<Array<any>>([]);
	const [featured, setFeatured] = useState<Array<any>>([]);

	//! Refactor it later, Fix it.
	const [pending, setPending] = useState<Array<any>>([]);

    console.log(featured);

	useEffect(() => {
		axios
			.get("http://app.welfare.ws/api/v1/advert/filteredAdverts", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
			.then((response) => {
				console.log(response);
				const data = response.data;
				setAdverts(data.adverts);
                console.log("slice", data.adverts.slice(0, 6));
				setFeatured(data.adverts.slice(0, 6));
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get("http://app.welfare.ws/api/v1/advert/favoriteAdverts/7", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
			.then((response) => {
				const data = response.data;
				setFavourites(data.favoriteAdverts);
				console.log("favourites", data.favoriteAdverts);
			})
			.catch((error) => {
				console.error(error);
			});

		axios
			.get("/api/v1/advert/advertStatus/participatedAdverts", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
			.then((response) => {
				response.data.adverts.forEach((dt: any, key) => {
					if (dt.status == "active")
						setPending((prev) => [...prev, dt]);
				});
			})
			.catch((error) => {
				console.log(error.response.data.message);
			});
	}, []);

	return (
		<Page>
			<Navbar />
			<Content>
				<Container>
					<div className="row-span-2 flex">
						<Button
							variant="outlined"
							onClick={() => setPage(page - 1)}
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</Button>
                        {/*<_Slider featured={featured} page={page} /> */}
                        {
                            featured.length > 0
                            ? <_Slider featured={featured} page={page} />
                            : null
                        }
						
						<Button
							variant="outlined"
							onClick={() => setPage(page + 1)}
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</Button>
					</div>

					<div className="flex flex-col bg-white rounded-md p-4 gap-4 box-border justify-center">
						<h1 className="font-bold text-2xl text-blue-950">
							Categories
						</h1>
						<div className="flex flex-wrap justify-between">
							<Foo
								category="Clothing"
								src={clothes}
								title="Clothing"
							/>
							<Foo
								category="Electronics"
								src={monitor}
								title="Electronics"
							/>
						</div>
					</div>
					<div className="flex flex-col bg-white p-4 gap-4 box-border rounded-md">
						<h1 className="font-bold text-2xl text-blue-950">
							Pending
						</h1>
						<div className="flex justify-between overflow-auto">
							{pending.map((item, index) => (
								<Product
									id={item._id}
									title={item.title}
									owner={item.owner}
									point={item.point}
									description={item.description}
									img={item.images[0]}
									tag={item.tag}
									pending
								/>
							))}
						</div>
					</div>
				</Container>
				<div className="w-full grid grid-cols-3 gap-4">
					<div className="bg-white rounded-md p-4 flex items-center">
						<FontAwesomeIcon
							className="w-8 h-8 mr-10 text-blue-950"
							icon={faPhone}
						/>
						<p className="text-lg">Lorem ipsum dolor sit amet</p>
					</div>
					<div className="bg-white rounded-md p-4 flex items-center">
						<FontAwesomeIcon
							className="w-8 h-8 mr-10 text-blue-950"
							icon={faLocationDot}
						/>
						<p className="text-lg">Lorem ipsum dolor sit amet</p>
					</div>
					<div className="bg-white rounded-md p-4 flex items-center">
						<FontAwesomeIcon
							className="w-8 h-8 mr-10 text-blue-950"
							icon={faShieldHalved}
						/>
						<p className="text-lg">Lorem ipsum dolor sit amet</p>
					</div>
				</div>

				<Divider />

				{/*Şu an */}
				<div className="w-full grid grid-cols-2 gap-4">
					<div className="rounded-md bg-blue-300 grid grid-cols-2 gap-4">
						<img src={asd} alt="" />
						<div className="flex flex-col justify-between p-4">
							<h1 className="text-blue-950 text-xl font-bold">
								Lorem ipsum dolor sit amet
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean ultrices aliquet elit, a
								porttitor felis convallis a. Ut nisl enim,
								auctor sit amet sapien non, blandit feugiat
								arcu. Duis in commodo augue, sed porta nisl.
								Interdum et malesuada fames ac ante ipsum primis
								in faucibus. Donec vitae vehicula tellus. Donec
								nec orci eu arcu vehicula posuere id in sapien.
								Duis tincidunt efficitur euismod. Aenean dui
								sapien, feugiat ut imperdiet nec, imperdiet nec
								neque.
							</p>
							<Button variant="outlined">Şimdi başlayın</Button>
						</div>
					</div>
					<div className="rounded-md bg-blue-300 grid grid-cols-2 gap-4">
						<img src={asd2} alt="" />
						<div className="flex flex-col justify-between p-4">
							<h1 className="text-blue-950 text-xl font-bold">
								Lorem ipsum dolor sit amet
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean ultrices aliquet elit, a
								porttitor felis convallis a. Ut nisl enim,
								auctor sit amet sapien non, blandit feugiat
								arcu. Duis in commodo augue, sed porta nisl.
								Interdum et malesuada fames ac ante ipsum primis
								in faucibus. Donec vitae vehicula tellus. Donec
								nec orci eu arcu vehicula posuere id in sapien.
								Duis tincidunt efficitur euismod. Aenean dui
								sapien, feugiat ut imperdiet nec, imperdiet nec
								neque.
							</p>
							<Button variant="outlined">Şimdi başlayın</Button>
						</div>
					</div>
				</div>
				<h1 className="font-bold text-3xl text-blue-950 mt-8">
					Explore
				</h1>
				<Divider />
				<div className="flex gap-4 items-center justify-between overflow-auto">
					{adverts.map((item, index) => (
						<Product
							id={item._id}
							title={item.title}
							owner={item.owner}
							point={item.point}
							description={item.description}
							img={item.images[0]}
							tag={item.tag}
						/>
					))}
					<Button variant="outlined">Load More</Button>
				</div>

				<h1 className="font-bold text-3xl text-blue-950 mt-8">
					Favourites
				</h1>
				<Divider />
				<div className="flex items-center gap-4 overflow-auto">
					{favourites.map((item, index) => (
						<Product
							fav
							id={item._id}
							title={item.title}
							owner={item.owner}
							point={item.point}
							description={item.description}
							img={item.images[0]}
							tag={item.tag}
						/>
					))}
					<Button variant="outlined">Load More</Button>
				</div>
				<Divider />
			</Content>
		</Page>
	);
};
export default Home;
