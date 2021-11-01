//libs
import styled from "styled-components";
//components
import { breakpoints, Button, Headline, Section, Text } from "../../styles";
import { urlFor } from "../../utils/imageBuilder";

const AboutPage = ({ aboutData }) => {
	return (
		<Section colored scrollName="about">
			<Headline>O mně</Headline>
			<Wrapper>
				{/* <img src={urlFor(aboutData?.photo).url()} alt="my profile image" /> */}
				<TextWrapper>
					<Text>
						Jsem studentkou FA v Brně. Pocházím z Brna a také zde žiji. Zajímám
						se o design a současné trendy v architektuře. Baví mě hlavně
						urbanismus a veřejné prostranství. Ve svém volném čase ráda cestuji,
						chodím do přírody, šiji a také sportuji. Baví mě hlavně urbanismus a
						veřejné prostranství. Ve svém volném čase ráda cestuji, chodím do
						přírody, šiji a také sportuji. Baví mě hlavně urbanismus a veřejné
						prostranství. Ve svém volném čase ráda cestuji, chodím do přírody,
						šiji a také sportuji.
					</Text>
					{/* <Button>
						<a download target="_blank" href={aboutData.file.url}>
							životopis
						</a>
					</Button> */}
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
		width: 100%;
		height: 30rem;
	}

	@media ${breakpoints.mobileX} {
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
