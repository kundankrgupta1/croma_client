import axios from "axios";
import { useEffect, useState } from "react"
import { SERVER_URL } from "../App";
import ProductCard from "./ProductCard";

const AllProducts = () => {
	const [data, setData] = useState([]);
	const fetchData = async () => {
		try {
			const res = await axios.get(`${SERVER_URL}/products`);
			console.log(res.data.data);
			setData(res.data.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])

	return (
		<div className="container flex flex-col gap-4">
			<h1 className="text-xl font-bold capitalize mt-10">find your desire product</h1>
			<div className="flex flex-wrap gap-4">
				{data.map((e, index) => <ProductCard key={index} {...e} />)}
			</div>
		</div>
	)
}

export default AllProducts