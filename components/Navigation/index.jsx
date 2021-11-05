//libs
import { useState } from "react";
import styled from "styled-components";
import { FillerEffect } from "../../styles";
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
			<FillerEffect
				active={active ? "scale(80)" : "scale(0)"}
				opacity="0.9"
				background="var(--col1)"
			/>
		</StyledNavigation>
	);
};

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
