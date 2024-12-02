import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../App";
import Loading from "./Loading";


const CategorySlider = () => {

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get(`${SERVER_URL}/category`);
			setData(res.data.categories)
			console.log(res.data.categories)
			setIsLoading(false);
		} catch (error) {
			console.log(error)
			setIsLoading(false);
		}

	}

	useEffect(() => {
		getData();
	}, [])

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 10,
			slidesToSlide: 10 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 9,
			slidesToSlide: 10 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 9,
			slidesToSlide: 10 // optional, default to 1.
		}
	};
	return (
		<div className="container py-4">
			{isLoading && <div className="flex items-center justify-center h-48"><Loading text={"Loading..."} /></div>}
			{!isLoading && <Carousel
				responsive={responsive}
				infinite={true}
			>
				{
					data.map((e, index) => {
						return (
							<div key={index}>
								<Link to={`/${e.category}`}>
									<img src={e.category_image} alt={e.category} />
								</Link>
							</div>
						)
					})
				}
			</Carousel>}
		</div>
	)
}

export default CategorySlider