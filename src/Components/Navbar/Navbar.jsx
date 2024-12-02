import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa6";
import { MdOutlineDevices } from "react-icons/md";
import { LuCodesandbox } from "react-icons/lu";
import { PiMedalLight } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, List, ListItem, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { ContextProvider } from "../../Context/Context";
import Account from "../auth/Account";
import axios from "axios";
import { SERVER_URL } from "../../App";
import ProductCard from "../ProductCard";
const Navbar = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(true)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isHovered, setIsHovered] = useState(false); 63
	const { isAuth, setIsAuth, token, setToken } = useContext(ContextProvider);
	const [showPopup, setShowPopup] = useState(false);
	const [query, setQuery] = useState("");
	const [window, setWindow] = useState(false);
	const [data, setData] = useState(null)
	const fetchData = async () => {
		try {
			const res = await axios.get(`${SERVER_URL}/product?q=${query}`);
			console.log(res.data.product);
			setData(res.data.product)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		const delay = setTimeout(() => {
			fetchData();
		}, 2000)
		return () => clearInterval(delay)
	}, [query])

	const handleSearch = (e) => {
		const value = e.target.value;
		setQuery(value);
		setWindow(value !== "");
	};

	const dataForSidebar = [
		{ icon: <FaRegUserCircle className="w-8 h-8" />, name: "My Profile", footer: "Edit your basic details", link: "/profile" },
		{ icon: <FaRegAddressBook className="w-8 h-8" />, name: "My Address", footer: "manege your saved address", link: "/address" },
		{ icon: <LuCodesandbox className="w-8 h-8" />, name: "My Orders", footer: "view, track, cancel orders and buy again", link: "/" },
		{ icon: <PiMedalLight className="w-8 h-8" />, name: "My Rewards", footer: "exculive offers and royalty rewards for you", link: "/" },
		{ icon: <FaRegHeart className="w-8 h-8" />, name: "My Wishlist", footer: "have a look your favourite product", link: "/" },
		{ icon: <MdOutlineDevices className="w-8 h-8" />, name: "My Device & Plan", footer: "manage your device and plan", link: "/" },
		{ icon: <RiCustomerService2Line className="w-8 h-8" />, name: "My Services Request", footer: "manege complaint feedback and service request", link: "/" },
	]

	const handleLogout = () => {
		setIsAuth(false);
		setShowPopup(false);
		localStorage.removeItem("token");
		setToken(null);
	}

	const handleLogin = () => {
		setShowPopup(true);
	}

	const handlePopupClose = () => {
		setShowPopup(false);
	}


	let Links = [
		{ name: "home", link: "/" },
		{ name: "mens", link: "/mens" },
		{ name: "womens", link: "womens" },
		{ name: "electronics", link: "/electronics" },
		{ name: "jewellery", link: "/jewellery" }
	]

	return (
		<>
			<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='2px'>Menu</DrawerHeader>
					<DrawerBody p={0}>
						<List display='flex' flexDirection="column">
							{
								Links.map((e, index) =>
									<ListItem key={index}>
										<Link to={e.link}><Button bg="none" textTransform="uppercase">{e.icon}&nbsp;{e.name}</Button></Link>
									</ListItem>
								)
							}
						</List>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<header className="w-full p-5">
				<nav className="container flex items-center justify-between">
					<div className="flex items-center gap-14">
						<button onClick={onOpen} className="md:hidden flex gap-1 items-center"><IoMenuOutline className="w-8 h-8" /></button>
						<Link to="/">
							<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" alt="croma_logo" />
						</Link>
						<div className="">
							<button
								onClick={() => setIsOpenMenu(!isOpenMenu)}
								className="flex gap-1 items-center"
							>{isOpenMenu ? <IoMenuOutline className="w-8 h-8" /> : <IoCloseOutline className="w-8 h-8" />}Menu
							</button>
						</div>
					</div>
					<div className="flex items-center bg-white text-black px-3 py-2 rounded-md w-96 relative">
						<input
							type="text"
							className="outline-none w-full"
							placeholder="What are you looking for?"
							onChange={handleSearch}
						/>
						<button><CiSearch className="w-6 h-6" /></button>

						{window && (
							<div className="absolute top-full left-0 bg-white border shadow-md w-full mt-1 z-10 max-h-64 overflow-y-auto custom-scrollbar">
								{data && data.length > 0 ?
									(data.map((e, index) => <ProductCard key={index} {...e} />)) : (
										<div className="px-3 py-2 text-gray-500">No results found</div>
									)}
							</div>
						)}
					</div>

					<div className="flex items-center gap-9">
						<button className="flex gap-1 items-center"><IoLocationOutline /><span className="text-xs">Patna, 201206</span><MdOutlineModeEdit /></button>
						<div
							className="relative"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<FaUser className="w-6 h-6" />
							{isHovered &&
								<div className="overflow-y-auto custom-scrollbar text-lg absolute top-full -right-20 w-80 bg-slate-900 p-4 h-[590px] z-10 flex items-left flex-col gap-7">
									{dataForSidebar.map((e, index) => {
										return (
											<div key={index} className="flex items-center gap-6" >
												{e.icon}
												<Link to={e.link}>
													<p className="font-semibold">{e.name}</p>
													<p className="text-xs">{e.footer}</p>
												</Link>
											</div>
										)
									})}
									<div className="flex items-center gap-6 font-semibold">
										{
											token && isAuth ?
												<>
													<AiOutlineLogout className="w-8 h-8" />
													<button
														onClick={handleLogout}
													>
														Logout
													</button>
												</>
												:
												<>
													<AiOutlineLogin className="w-8 h-8" />
													<button
														onClick={handleLogin}
													>
														Login
													</button>
												</>
										}
									</div>
								</div >
							}
						</div>
						<div className="relative">
							<Link to="/cart">
								<FaShoppingCart className="w-6 h-6" />
								<span className="absolute top-0 right-0 bg-green-500 text-black rounded-full w-4 h-4 flex items-center justify-center text-xs">
									3
								</span>
							</Link>
						</div>
						<div>
						</div>
					</div>
				</nav>
			</header>
			{
				showPopup &&
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
					<Account onClose={handlePopupClose} />
				</div>
			}
		</>
	)
}

export default Navbar