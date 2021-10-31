//libs
import styled from "styled-components";

export const HeroHeadline = ({ children }) => {
	return <SHeroHeadline>{children}</SHeroHeadline>;
};

const SHeroHeadline = styled.h1`
	font-family: var(--font2);
	text-transform: uppercase;
	letter-spacing: 0.3rem;
	font-weight: 500;
	font-size: var(--mh);
	margin-left: 1rem;
`;
