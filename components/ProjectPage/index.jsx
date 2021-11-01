//libs
import styled from "styled-components";
//components
import { Headline, Section } from "../../styles";

const ProjectPage = () => {
	return (
		<Section colored scrollName="projects">
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

export default ProjectPage;
