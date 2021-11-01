//libs
import { useState } from "react";
import styled from "styled-components";
//comps
import NavBurger from "./NavBurger";
import NavItems from "./NavItems";

const Navigation = () => {
	const [active, setActive] = useState(false);

	const handleActive = () => {
		setActive(prev => !prev);
	};

	return (
		<StyledNavigation active={active}>
			<NavBurger handleActive={handleActive} />
			{active && <NavItems handleActive={handleActive} />}
			<Filler active={active} />
		</StyledNavigation>
	);
};

const Filler = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 4rem;
	width: 4rem;
	background: var(--col1);
	opacity: 0.96;
	transform: ${({ active }) => (active ? "scale(80)" : "scale(0)")};
	transition: all 0.5s ease-in-out;
	border-radius: 50%;
	z-index: -1;
	//animate this on click
	/* transform: scale(80); */
`;

const StyledNavigation = styled.div`
	position: fixed;
	right: 0;
	width: 50%;
	padding: 2rem;
	height: 100vh;
	overflow: hidden;
	z-index: 990;
	pointer-events: ${({ active }) => (active ? "all" : "none")};
`;

export default Navigation;
