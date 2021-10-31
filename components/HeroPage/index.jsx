//lib
import styled from "styled-components";
import { HeroHeadline } from "../../styles";
import { HeroSubheadline } from "../../styles";
import { Line } from "../../styles";

const HeroPage = () => {
	return (
		<StyledHeroPage>
			<Wrapper>
				<img src="assets/house.svg" alt="house" />
				<div>
					<HeroHeadline>Barbora Nováková</HeroHeadline>
					<Line />
					<HeroSubheadline>Architecture student</HeroSubheadline>
				</div>
			</Wrapper>
		</StyledHeroPage>
	);
};

const StyledHeroPage = styled.div`
	position: relative;
	min-height: 100vh;
	padding: var(--side-p);
	display: flex;
	align-items: flex-end;
`;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	align-items: flex-start;

	img {
		height: 7.845rem;
	}
`;

export default HeroPage;
