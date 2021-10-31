//libs
import styled from "styled-components";
//comps
import NavBurger from "./NavBurger";

const Navigation = () => {
	return (
		<StyledNavigation className="nav">
			<NavBurger />
		</StyledNavigation>
	);
};

const StyledNavigation = styled.div`
	position: fixed;
	width: 100%;
	padding: 2rem;
`;

export default Navigation;
