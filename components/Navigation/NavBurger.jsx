//libs
import styled from "styled-components";

const NavBurger = ({ handleActive }) => {
	return (
		<StyledBurger onClick={handleActive}>
			<p></p>
			<p></p>
			<p></p>
		</StyledBurger>
	);
};

const StyledBurger = styled.div`
	display: flex;
	width: 4rem;
	height: 2.9rem;
	z-index: 999;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	margin-left: auto;
	cursor: pointer;
	pointer-events: all;

	p {
		width: 100%;
		height: 0.3rem;
		background-color: var(--col3);
	}
`;

export default NavBurger;
