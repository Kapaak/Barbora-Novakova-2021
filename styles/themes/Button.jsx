//libs
import styled from "styled-components";
import { breakpoints } from "..";

export const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
	border: 2px solid var(--col3);
	text-transform: uppercase;
	font-size: var(--t);
	font-weight: bold;
	transition: all 0.4s ease-in-out;

	a {
		display: inline-block;
		color: var(--col1);
		text-decoration: none;
		padding: 0.5rem 1rem;
		font-weight: 500;
	}

	&:hover {
		background-color: var(--col3);
		transition: all 0.4s ease-in-out;
		a {
			color: var(--col2);
		}
	}

	@media ${breakpoints.desktopS} {
		a {
			padding: 1.1rem 3rem;
		}
	}
`;
