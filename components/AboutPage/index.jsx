//libs
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
//components
import { breakpoints, Button, Headline, Section, Text } from "../../styles";
import { urlFor } from "../../utils/imageBuilder";

const AboutPage = ({ aboutData }) => {
	return (
		<Section colored scrollName="about">
			<Headline>O mně</Headline>
			<Wrapper>
				<img src={urlFor(aboutData?.photo).url()} alt="my profile image" />
				<TextWrapper>
					<Text>
						<BlockContent blocks={aboutData.text} />
					</Text>
					<Button>
						<a
							download
							rel="noreferrer"
							target="_blank"
							href={aboutData.file.url}
						>
							životopis
						</a>
					</Button>
				</TextWrapper>
			</Wrapper>
		</Section>
	);
};

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: var(--gap);
`;

const Wrapper = styled.div`
	display: flex;
	gap: var(--gap);

	img {
		display: none;
		object-fit: cover;
		width: 100%;
		height: 30rem;
	}

	@media ${breakpoints.tabletS} {
		img {
			display: block;
		}
	}

	@media ${breakpoints.desktopS} {
		img {
			height: 38rem;
		}
	}

	@media ${breakpoints.desktopX} {
		img {
			height: 44rem;
		}
	}
`;

export default AboutPage;
