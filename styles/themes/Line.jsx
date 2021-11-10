//libs
import styled from "styled-components";

export const Line = ({ correctWidth }) => {
	return <StyledLine correctWidth={correctWidth} />;
};

const StyledLine = styled.div`
	background-color: var(--col3);
	width: ${({ correctWidth }) =>
		correctWidth ? `calc(100% + ${correctWidth}px)` : "100%"};
	height: 0.3rem;
	margin: 0.5rem 0;
`;
