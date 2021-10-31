//libs
import styled from "styled-components";
//components
import { Headline, Section } from "../../styles";

const CVPage = () => {
	return (
		<Section>
			<div>
				<Headline>Vzdělání</Headline>
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
					<StyledItem>
						<h3>FA VUT v Brně</h3>
						<h3>magisterské studium</h3>
						<h4>2013 - 2014</h4>
					</StyledItem>
				</Wrapper>
			</div>
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

const StyledItem = styled.div`
	display: flex;
	flex-direction: column;

	h3 {
		color: var(--col3);
		font-weight: 500;
		font-size: var(--t);
	}
	h4 {
		color: var(--col5);
		letter-spacing: 0.2rem;
		font-weight: 500;
		font-size: var(--bt);
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gap);
`;

export default CVPage;
