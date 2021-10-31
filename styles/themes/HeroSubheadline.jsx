//libs
import styled from "styled-components";

export const HeroSubheadline = ({ children }) => {
	return <SHeroSubheadline>{children}</SHeroSubheadline>;
};

const SHeroSubheadline = styled.h1`
	font-family: var(--font1);
	text-transform: uppercase;
	letter-spacing: 0.3rem;
	font-weight: 500;
	font-size: var(--smh);
	margin-left: 1rem;
`;
