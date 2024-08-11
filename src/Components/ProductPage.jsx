import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

const ProductPage = () => {
	const { category } = useParams()
	const [products, setProducts] = useState([]);

	const getCategoryWiseProduct = async () => {
		try {
			const res = await axios.get(`https://croma-server.onrender.com/${category}`)
			setProducts(res.data.products)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getCategoryWiseProduct();
	}, [])

	return (
		<>
			<div className="container py-8">{category.toUpperCase()}</div>

			<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242615/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Main%20Banner/D_main-banner_hat0zq.png?tr=w-2048" alt="" />

			<div className="container py-8 flex gap-8 flex-wrap items-center">
				{
					products.map((e, index) => {
						return (
							<ProductCard key={index} {...e} />
						)
					})
				}
			</div>

		</>
	)
}

export default ProductPage