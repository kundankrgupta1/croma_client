import axios from "axios"
import { SERVER_URL } from "../App"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Personalized = () => {
	const [data, setData] = useState(null)
	const category = localStorage.getItem("category")
	const fetchData = async () => {
		try {
			const res = await axios.get(`${SERVER_URL}/product?category=${category}`);
			console.log(res.data.product);
			setData(res.data.product)
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, [])
	return (
		<>
			{data && (
				<div className="container">
					<p className="text-xl font-bold mt-16 border-2 rounded-xl p-2 w-fit">Recommendation for You!</p>
					<div className="flex items-center justify-between p-2 rounded-xl gap-4 flex-wrap border-2">
						{data && data.map((e, index) => <ProductCard key={index} {...e} />)}
					</div>
				</div>
			)}
		</>
	)
}

export default Personalized