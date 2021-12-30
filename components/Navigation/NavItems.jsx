//libs
import styled from "styled-components";
import { scroller } from "react-scroll";
import { breakpoints } from "../../styles";

const NavItems = ({ handleActive, isActive }) => {
	const handleClick = direction => {
		handleActive();
		scroller.scrollTo(direction, { smooth: true, offset: -40 });
	};
	return (
		<StyledNavItems isActive={isActive}>
			<p onClick={() => handleClick("about")}>O mně</p>
			<p onClick={() => handleClick("projects")}>Portfolio</p>
			<p onClick={() => handleClick("contact")}>Kontakt</p>
		</StyledNavItems>
	);
};

const StyledNavItems = styled.div`
	display: ${({ isActive }) => (isActive ? "flex" : "none")};
	position: relative;
	flex-direction: column;
	/* margin-top: 6rem; */
	margin-top: 50%;
	margin-left: 18%;
	text-align: right;
	gap: 3rem;
	color: var(--col2);
	z-index: 999;

	p {
		cursor: pointer;
		font-size: var(--mh);
		text-align: left;
		font-family: var(--font2);
	}

	@media ${breakpoints.desktopS} {
		display: flex;
		margin-top: 0;

		p {
			position: relative;
			font-size: var(--smh);
			color: var(--col2);
			padding: 1rem 0;

			&::before {
				content: "";
				width: 20%;
				height: 0.3rem;
				background-color: var(--col3);
				position: absolute;
				bottom: 0;
				right: 0;
				transition: all 0.5s ease-in-out;
			}

			&:hover::before {
				width: 100%;
				transition: all 0.5s ease-in-out;
			}

			&:hover {
				color: var(--col1);
				transition: all 0.5s ease-in-out;
			}
		}
	}
`;

export default NavItems;
