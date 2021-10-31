//libs
import styled from "styled-components";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
//components
import { Headline, Section } from "../../styles";

const PortfolioPage = () => {
	return (
		<Section colored scrollName="portfolio">
			<Headline>Portfolio</Headline>
			<Gallery>
				<img src="/assets/2.jpg" alt="img" />
				<img src="/assets/2.jpg" alt="img" />
			</Gallery>
		</Section>
	);
};

const Gallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gap);
	img {
		width: 100%;
	}
`;

export default PortfolioPage;
