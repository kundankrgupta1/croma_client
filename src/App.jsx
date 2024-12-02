import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import AllRoutes from "./Routes/AllRoutes"
export const SERVER_URL = "https://croma-server.onrender.com"
// export const SERVER_URL = "http://localhost:8080"
const App = () => {

	return (
		<>
			<Navbar />
			<AllRoutes />
			<Footer />
		</>
	)
}

export default App