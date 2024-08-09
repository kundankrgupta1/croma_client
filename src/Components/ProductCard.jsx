import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const ProductCard = ({ _id, product_title, price, product_image, rating, reviews }) => {
	return (
		<Link to={`/product/${_id}`}>
			<div className="w-72 h-5/6">
				<div className="bg-gray-900 rounded-2xl p-2">
					{product_image.length > 0 && (
						<img src={product_image[0]} className="w-64 m-auto" alt="Product Image" />
					)}
				</div>
				<div className="flex flex-col gap-4 mt-4">
					<h1 className="text-lg font-bold truncate">{product_title}</h1>
					<p>{rating} <span className="text-green-500">&#9733;</span>&nbsp;({reviews})</p>
					<h1 className="text-lg font-bold">{price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h1>
				</div>
			</div>
		</Link>
	)
}


ProductCard.propTypes = {
	_id: PropTypes.string.isRequired,
	product_title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	product_image: PropTypes.array.isRequired,
	rating: PropTypes.number.isRequired,
	reviews: PropTypes.number.isRequired
};

export default ProductCard;
