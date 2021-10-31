//libs
import styled from "styled-components";

export const Headline = ({ children }) => {
	return <StyledHeadline>{children}</StyledHeadline>;
};

const StyledHeadline = styled.h1`
	max-width: var(--max-width);
	margin-bottom: 1rem;
	font-family: var(--font2);
	letter-spacing: 0.3rem;
	font-weight: 500;
	font-size: var(--h);
`;
