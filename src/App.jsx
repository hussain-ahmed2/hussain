import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	return (
		<div className="bg-neutral-200 min-h-screen">
			<Header />
			<div className="pt-16 max-w-6xl mx-auto">
				<Home />
				<About />
			</div>
			<Footer />
		</div>
	);
}
export default App;
