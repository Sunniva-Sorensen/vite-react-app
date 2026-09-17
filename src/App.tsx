import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { Article } from "./pages/Article/Article";

function AboutPage() {
	return (
		<main>
			<h1>About</h1>
			<p>Learn more about this article page.</p>
		</main>
	);
}

function ContactPage() {
	return (
		<main>
			<h1>Contact</h1>
			<p>Send us a message through the tip form on the home page.</p>
		</main>
	);
}

function App() {
	return (
		<BrowserRouter>
			<nav className="nav-bar">
				<Link className="link-button" to="/">
					Home
				</Link>
				<NavLink className="link-button" to="/about">
					About
				</NavLink>
				<NavLink className="link-button" to="/contact">
					Contact
				</NavLink>
			</nav>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/article/:slug" element={<Article />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
