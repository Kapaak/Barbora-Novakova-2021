//libs
import styled from "styled-components";
import { Headline, Section } from "../../styles";

const ContactPage = () => {
	return (
		<Section scrollName="contact">
			<Headline>Kontakt</Headline>
			<Wrapper>
				<StyledItem>
					<h3>E-Mail</h3>
					<h4>Barca.novako15@gmail.com</h4>
				</StyledItem>
				<StyledItem>
					<h3>Telefon</h3>
					<h4>+420 723 593 698</h4>
				</StyledItem>
			</Wrapper>
		</Section>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--gap);
`;

const StyledItem = styled.div`
	h3,
	h4 {
		color: var(--col3);
	}
	h3 {
		text-transform: uppercase;
	}
	h4 {
		font-weight: 500;
	}
`;

export default ContactPage;
