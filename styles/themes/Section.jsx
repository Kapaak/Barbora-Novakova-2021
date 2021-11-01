//libs
import styled from "styled-components";
import Scroll from "react-scroll";

export const Section = ({ colored, children, scrollName }) => {
	const ScrollElement = Scroll.Element;
	return (
		<StyledSection colored={colored}>
			<div>
				<ScrollElement name={scrollName}>{children}</ScrollElement>
			</div>
		</StyledSection>
	);
};

const StyledSection = styled.section`
	position: relative;
	margin: 0 auto;
	padding: 4rem var(--side-p) var(--side-p);
	background-color: ${({ colored }) => colored && "var(--col4)"};

	& > div {
		max-width: var(--max-width);
	}
`;
