//libs
import styled from "styled-components";
//components
import { breakpoints, Headline, Section } from "../../styles";

const CVPage = () => {
	return (
		<Section>
			<MarginWrapper>
				<Headline>Vzdělání</Headline>
				<Wrapper firstChild={true}>
					<StyledItem>
						<h3>Gymnázium Brno</h3>
						<h3>Křenová 36</h3>
						<h4>2013 - 2014</h4>
					</StyledItem>
					<StyledItem>
						<h3>FA VUT v Brně</h3>
						<h3>bakalářské studium</h3>
						<h4>2013 - 2014</h4>
					</StyledItem>
					<StyledItem>
						<h3>FA VUT v Brně</h3>
						<h3>magisterské studium</h3>
						<h4>2013 - 2014</h4>
					</StyledItem>
				</Wrapper>
			</MarginWrapper>
			<div>
				<Headline>Zkušenosti</Headline>
				<Wrapper>
					<StyledItem>
						<h3>Gymnázium Brno</h3>
						<h3>Křenová 36</h3>
						<h4>2013 - 2014</h4>
					</StyledItem>
					<StyledItem>
						<h3>FA VUT v Brně</h3>
						<h3>bakalářské studium</h3>
						<h4>2013 - 2014</h4>
					</StyledItem>
				</Wrapper>
			</div>
		</Section>
	);
};

const MarginWrapper = styled.div`
	margin-bottom: 2rem;

	@media ${breakpoints.desktopS} {
		margin-bottom: 5rem;
	}
`;

const StyledItem = styled.div`
	display: flex;
	flex-direction: column;

	h3 {
		color: var(--col3);
		font-weight: 500;
		font-size: var(--t);
		letter-spacing: 0.2rem;
	}
	h4 {
		color: var(--col5);
		letter-spacing: 0.2rem;
		font-weight: 500;
		font-size: var(--bt);
		margin-top: 1rem;
	}

	@media ${breakpoints.tabletS} {
		flex: 0 1 30%;
	}

	@media ${breakpoints.desktopS} {
		flex: 0 1 25%;
	}

	@media ${breakpoints.desktopX} {
		h4 {
			margin: 2rem 0;
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gap);
`;

export default CVPage;
