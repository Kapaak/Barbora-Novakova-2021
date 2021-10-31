//libs
import styled from "styled-components";

export const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
	border: 2px solid var(--col3);
	text-transform: uppercase;
	font-size: var(--t);
	padding: 0.5rem 1rem;
`;
