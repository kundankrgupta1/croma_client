import CategorySlider from "../Components/CategorySlider"
import Slider from "../Components/Slider"

const Home = () => {
	return (
		<div>
			<Slider />
			<CategorySlider />
			<div className="container py-4">
				<div className="flex gap-4">
					<div>
						<img className="rounded-md" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-1024" alt="bank_offer" />
					</div>
					<div>
						<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717075769/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/HP_2Split_MFYMP_Brands_HDFC_ICIC_30May2024_kzbaou.png?tr=w-1024" alt="bank_offer" className="rounded-md" />
					</div>
				</div>

				<p className="text-xl font-bold mt-16 mb-4">Exciting Bank Offers For You</p>
				<div className="flex gap-4">
					<div>
						<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-1024" className="rounded-md" alt="bank_offer" />
					</div>

					<div>
						<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717075769/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/HP_2Split_MFYMP_Brands_HDFC_ICIC_30May2024_kzbaou.png?tr=w-1024" alt="bank_offer" className="rounded-md" />
					</div>
				</div>

				<p className="text-xl font-bold mt-16 mb-4">Our New Favourites</p>
				<div>
					<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722005073/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Our%20new%20Favourite/Monsoon/HP_SingleSplit_Monsoon__23June24_vgfuwd.png?tr=w-1024" className="rounded-md w-full" alt="bank_offer" />
				</div>

				<p className="text-xl font-bold mt-16 mb-4">Our New Favourites</p>
				<div className="flex gap-4">
					<div className="rounded-md">
						<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722596109/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Brand%20LP/Apple/August/Tiles/Desktop/LP_Appleaccess_iPhoneCases_2Aug24_rlg4sg.png?tr=w-1024" alt="bank_offer" />
					</div>

					<div>
						<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722596108/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Brand%20LP/Apple/August/Tiles/Desktop/LP_Appleaccess_iPadCover_2Aug24_srwobe.png?tr=w-1024" alt="bank_offer" />
					</div>

					<div>
						<img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722596119/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Brand%20LP/Apple/August/Tiles/Desktop/LP_Appleaccess_MagicKeyboard_2Aug24_xhjo1p.png?tr=w-1024" alt="bank_offer" />
					</div>
				</div>

				<div className="flex items-center gap-8">
					{}
				</div>

			</div>
		</div>
	)
}

export default Home