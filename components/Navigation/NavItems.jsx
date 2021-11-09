//libs
import styled from "styled-components";
import { scroller } from "react-scroll";

const NavItems = ({ handleActive }) => {
	const handleClick = direction => {
		handleActive();
		scroller.scrollTo(direction, { smooth: true });
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
	color: var(--col2);
	z-index: 999;

	p {
		cursor: pointer;
		font-size: var(--mh);
		text-align: left;
		font-family: var(--font2);
	}
`;

export default NavItems;
