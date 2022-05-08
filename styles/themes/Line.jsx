//libs
import styled from "styled-components";
import { motion } from "framer-motion";

export const Line = ({ correctWidth }) => {
	return (
		<StyledLine
			initial={{ scaleX: 0 }}
			animate={{ scaleX: 1, originX: "left" }}
			transition={{ delay: 1, duration: 1 }}
			correctwidth={correctWidth}
		/>
	);
};

const StyledLine = styled(motion.div)`
	background-color: var(--col3);
	width: ${({ correctwidth }) =>
		correctwidth ? `calc(100% + ${correctwidth}px)` : "100%"};
	height: 0.3rem;
	margin: 0.5rem 0;
`;
