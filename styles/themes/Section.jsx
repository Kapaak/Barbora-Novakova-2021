//libs
import styled from "styled-components";
import Scroll from "react-scroll";

export const Section = ({ colored, children, scrollName }) => {
	const ScrollElement = Scroll.Element;
	return (
		<StyledSection colored={colored}>
			<ScrollElement name={scrollName}>{children}</ScrollElement>
		</StyledSection>
	);
};

const StyledSection = styled.section`
	position: relative;
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 0 var(--side-p);
	background-color: ${({ colored }) => colored && "var(--col4)"};
`;
