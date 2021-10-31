import React from "react";
import styled from "styled-components";

export const Section = ({ colored, children }) => {
	return <StyledSection colored={colored}>{children}</StyledSection>;
};

const StyledSection = styled.section`
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 0 var(--side-p);
	background-color: ${({ colored }) => colored && "var(--col4)"};
`;
