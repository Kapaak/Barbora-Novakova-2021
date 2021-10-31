//libs
import styled from "styled-components";
import { scroller } from "react-scroll";

const NavItems = () => {
	return (
		<StyledNavItems>
			<p onClick={() => scroller.scrollTo("about")}>O mně</p>
			<p onClick={() => scroller.scrollTo("portfolio")}>Portfolio</p>
			<p onClick={() => scroller.scrollTo("contact")}>Kontakt</p>
		</StyledNavItems>
	);
};

const StyledNavItems = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 6rem;
	text-align: right;
	gap: var(--gap);
	font-weight: bold;
	color: var(--col2);
`;

export default NavItems;
