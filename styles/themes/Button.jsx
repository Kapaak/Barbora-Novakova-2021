//libs
import styled from "styled-components";
import { breakpoints } from "..";
import { FillerEffect } from "./FillerEffect";

export const Button = ({ children }) => {
	return (
		<StyledButton>
			<FillerEffect />
			{children}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	position: relative;
	border: 2px solid var(--col3);
	text-transform: uppercase;
	font-size: var(--t);
	font-weight: bold;
	transition: all 0.5s ease-in-out;
	overflow: hidden;

	a {
		position: relative;
		display: inline-block;
		color: var(--col1);
		text-decoration: none;
		padding: 0.5rem 1rem;
		font-weight: 500;
		z-index: 2;
	}

	&:hover {
		a {
			color: var(--col2);
		}
	}

	&:hover ${FillerEffect} {
		transform: scale(8);
		opacity: 0.96;
	}

	@media ${breakpoints.desktopS} {
		a {
			padding: 1.1rem 3rem;
		}
	}
`;
