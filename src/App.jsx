import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="bg-neutral-200 min-h-screen">
			<Header />
			<div className="pt-16 max-w-6xl mx-auto text-neutral-700">
				<Home />
				<About />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}
export default App;
