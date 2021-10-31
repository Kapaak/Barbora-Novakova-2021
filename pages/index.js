//pages
import HeroPage from "../components/HeroPage";
import AboutPage from "../components/AboutPage";
import CVPage from "../components/CVPage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";

export default function Home() {
	return (
		<>
			<HeroPage />
			<AboutPage />
			<CVPage />
			<PortfolioPage />
			<ContactPage />
		</>
	);
}
