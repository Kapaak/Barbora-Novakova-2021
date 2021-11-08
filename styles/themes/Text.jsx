//libs
import styled from "styled-components";
import { breakpoints } from "..";

export const Text = ({ children }) => {
	return <StyledText>{children}</StyledText>;
};

const StyledText = styled.div`
	font-size: var(--t);
	letter-spacing: 0.1rem;
	line-height: 1.8;

	@media ${breakpoints.desktopS} {
		line-height: 1.6;
	}
`;
