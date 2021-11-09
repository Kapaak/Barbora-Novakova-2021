//libs
import styled from "styled-components";
import { breakpoints } from "../../styles";

const Footer = () => {
	return (
		<StyledFooter name="footer">
			<div>
				Barbora Nováková ©2021, vytvořil{" "}
				<a href="https://pavelzapletal.cz/">Pavel Zapletal</a>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	text-align: left;
	padding: 0 var(--side-p);
	a {
		color: inherit;
	}

	@media ${breakpoints.tabletS} {
		text-align: center;
	}
`;

export default Footer;
