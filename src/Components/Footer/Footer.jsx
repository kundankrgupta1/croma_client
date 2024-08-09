import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="text-white bg-zinc-900 py-8">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Connect With Us */}
				<div className="space-y-4 border-r-2 pr-4">
					<div className="flex flex-col space-y-2">
						<label htmlFor="email" className="text-sm font-semibold">CONNECT WITH US</label>
						<input
							type="email"
							id="email"
							placeholder="Enter Email ID"
							className="bg-white text-white p-2 rounded"
						/>
						<div className="flex space-x-4">
							<FaFacebookF className="hover:text-blue-900 w-8 h-8" />
							<FaInstagram className="hover:text-pink-500 w-8 h-8" />
							<FaLinkedin className="hover:text-blue-500 w-8 h-8" />
							<FaTwitter className="hover:text-blue-400 w-8 h-8" />
							<FaYoutube className="hover:text-red-600 w-8 h-8"/>
						</div>
					</div>
					<div className="flex space-x-4">
						<a href="#" className="hover:text-gray-400">
							<i className="fab fa-youtube"></i> {/* Replace with the actual YouTube icon */}
						</a>
						<a href="#" className="hover:text-gray-400">
							<i className="fab fa-facebook"></i> {/* Replace with the actual Facebook icon */}
						</a>
						<a href="#" className="hover:text-gray-400">
							<i className="fab fa-instagram"></i> {/* Replace with the actual Instagram icon */}
						</a>
						<a href="#" className="hover:text-gray-400">
							<i className="fab fa-linkedin"></i> {/* Replace with the actual LinkedIn icon */}
						</a>
						<a href="#" className="hover:text-gray-400">
							<i className="fab fa-twitter"></i> {/* Replace with the actual Twitter icon */}
						</a>
					</div>
					<p className="text-xs mt-4">&copy; Copyright 2023 Croma. All rights reserved</p>
				</div>

				{/* Useful Links */}
				<div className="grid grid-cols-2 gap-4 border-r-2">
					<div className="space-y-2">
						<h5 className="text-sm font-semibold">USEFUL LINKS</h5>
						<ul className="space-y-1">
							<li><a href="#" className="hover:text-gray-400">About Croma</a></li>
							<li><a href="#" className="hover:text-gray-400">Help And Support</a></li>
							<li><a href="#" className="hover:text-gray-400">FAQs</a></li>
							<li><a href="#" className="hover:text-gray-400">Buying Guide</a></li>
							<li><a href="#" className="hover:text-gray-400">Return Policy</a></li>
							<li><a href="#" className="hover:text-gray-400">B2B Orders</a></li>
							<li><a href="#" className="hover:text-gray-400">Store Locator</a></li>
							<li><a href="#" className="hover:text-gray-400">E-Waste</a></li>
							<li><a href="#" className="hover:text-gray-400">Franchise Opportunity</a></li>
						</ul>
					</div>
					<div className="space-y-2">
						<h5 className="text-sm font-semibold">&nbsp;</h5>
						<ul className="space-y-1">
							<li><a href="#" className="hover:text-gray-400">Site Map</a></li>
							<li><a href="#" className="hover:text-gray-400">Careers At Croma</a></li>
							<li><a href="#" className="hover:text-gray-400">Terms Of Use</a></li>
							<li><a href="#" className="hover:text-gray-400">Disclaimer</a></li>
							<li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
							<li><a href="#" className="hover:text-gray-400">Unboxed</a></li>
							<li><a href="#" className="hover:text-gray-400">Gift Card</a></li>
							<li><a href="#" className="hover:text-gray-400">Croma E-Star</a></li>
						</ul>
					</div>
				</div>

				{/* Products */}
				<div className="space-y-2">
					<h5 className="text-sm font-semibold">PRODUCTS</h5>
					<ul className="space-y-1">
						<li><a href="#" className="hover:text-gray-400">Televisions & Accessories</a></li>
						<li><a href="#" className="hover:text-gray-400">Home Appliances</a></li>
						<li><a href="#" className="hover:text-gray-400">Phones & Wearables</a></li>
						<li><a href="#" className="hover:text-gray-400">Computers & Tablets</a></li>
						<li><a href="#" className="hover:text-gray-400">Kitchen Appliances</a></li>
						<li><a href="#" className="hover:text-gray-400">Audio & Video</a></li>
						<li><a href="#" className="hover:text-gray-400">Health & Fitness</a></li>
						<li><a href="#" className="hover:text-gray-400">Grooming & Personal Care</a></li>
						<li><a href="#" className="hover:text-gray-400">Cameras & Accessories</a></li>
						<li><a href="#" className="hover:text-gray-400">Smart Devices</a></li>
						<li><a href="#" className="hover:text-gray-400">Gaming</a></li>
						<li><a href="#" className="hover:text-gray-400">Accessories</a></li>
						<li><a href="#" className="hover:text-gray-400">Top Brands</a></li>
					</ul>
				</div>
			</div>
		</footer>

	);
};

export default Footer;
