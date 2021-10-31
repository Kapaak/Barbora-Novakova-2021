//libs
import styled from "styled-components";

export const Text = ({ children }) => {
	return <StyledText>{children}</StyledText>;
};

const StyledText = styled.div`
	font-size: var(--t);
	letter-spacing: 0.1rem;
`;
