import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<StyledFooter>
			<div>Barbora Nováková ©2021</div>
			<div>PZ</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	text-align: right;
	padding: 0 var(--side-p);
`;

export default Footer;
