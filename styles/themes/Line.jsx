//libs
import styled from "styled-components";
import { motion } from "framer-motion";

export const Line = ({ correctWidth }) => {
	return (
		<StyledLine
			initial={{ scaleX: 0 }}
			animate={{ scaleX: 1, originX: "left" }}
			transition={{ delay: 1, duration: 1 }}
			correctWidth={correctWidth}
		/>
	);
};

const StyledLine = styled(motion.div)`
	background-color: var(--col3);
	width: ${({ correctWidth }) =>
		correctWidth ? `calc(100% + ${correctWidth}px)` : "100%"};
	height: 0.3rem;
	margin: 0.5rem 0;
`;
