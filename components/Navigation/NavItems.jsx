//libs
import styled from "styled-components";
import { scroller } from "react-scroll";

const NavItems = ({ handleActive }) => {
	const handleClick = direction => {
		handleActive();
		scroller.scrollTo(direction);
	};
	return (
		<StyledNavItems>
			<p onClick={() => handleClick("about")}>O mně</p>
			<p onClick={() => handleClick("projects")}>Portfolio</p>
			<p onClick={() => handleClick("contact")}>Kontakt</p>
		</StyledNavItems>
	);
};

const StyledNavItems = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-top: 6rem;
	text-align: right;
	gap: var(--gap);
	font-weight: bold;
	color: var(--col2);
	z-index: 999;

	p {
		cursor: pointer;
		font-size: var(--bt);
	}
`;

export default NavItems;
