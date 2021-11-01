//libs
import styled from "styled-components";
//components
import { breakpoints, Headline, Section } from "../../styles";

const CVPage = ({ educationData, experienceData }) => {
	return (
		<Section>
			<MarginWrapper>
				<Headline>Vzdělání</Headline>
				<Wrapper firstChild={true}>
					{educationData?.map((e, i) => {
						return (
							<StyledItem key={i}>
								<h3>{e.study}</h3>
								<h3>{e.location}</h3>
								<h4>{e.date}</h4>
							</StyledItem>
						);
					})}
				</Wrapper>
			</MarginWrapper>
			<div>
				<Headline>Zkušenosti</Headline>
				<Wrapper>
					{experienceData?.map((e, i) => {
						return (
							<StyledItem key={i}>
								<h3>{e.job}</h3>
								<h3>{e.company}</h3>
								<h4>{e.date}</h4>
							</StyledItem>
						);
					})}
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
