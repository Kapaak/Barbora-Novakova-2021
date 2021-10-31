//libs
import styled from "styled-components";

const NavBurger = () => {
	return (
		<StyledBurger>
			<p></p>
			<p></p>
			<p></p>
		</StyledBurger>
	);
};

const StyledBurger = styled.div`
	display: flex;
	width: 2rem;
	height: 2.9rem;
	z-index: 999;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;

	p {
		width: 4rem;
		height: 0.3rem;
		background-color: var(--col3);
	}
`;

export default NavBurger;
