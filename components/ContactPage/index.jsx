//libs
import styled from "styled-components";
import { breakpoints, Headline, Section } from "../../styles";

const ContactPage = () => {
	return (
		<Section scrollName="contact">
			<Headline>Kontakt</Headline>
			<Wrapper>
				<StyledItem>
					<h3>E-Mail</h3>
					<h4>
						<a href="mailto:barca.novako15@gmail.com">
							Barca.novako15@gmail.com
						</a>
					</h4>
				</StyledItem>
				<StyledItem>
					<h3>Telefon</h3>
					<h4>
						<a href="tel:+">+420 723 593 698</a>
					</h4>
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
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	h3,
	h4 {
		color: var(--col3);
	}
	h3 {
		text-transform: uppercase;
		font-size: var(--bt);
		letter-spacing: 0.2rem;
	}
	h4 {
		font-weight: 500;
		font-size: var(--t);
		letter-spacing: 0.05rem;
	}

	@media ${breakpoints.mobileX} {
		flex-direction: row;
		width: 40rem;
		justify-content: space-between;
		align-items: center;

		h4 {
			width: 22rem;
		}
	}
`;

export default ContactPage;
