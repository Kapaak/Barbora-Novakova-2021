//libs
import styled from "styled-components";
//components
import { Button, Headline, Section, Text } from "../../styles";

const AboutPage = () => {
	return (
		<Section colored>
			<Headline>O mně</Headline>
			<Wrapper>
				<img src="/assets/bara.jpg" alt="" />
				<div>
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
					<Button>životopis</Button>
				</div>
			</Wrapper>
		</Section>
	);
};

const Wrapper = styled.div`
	display: flex;
	img {
		display: none;
	}
`;

export default AboutPage;
