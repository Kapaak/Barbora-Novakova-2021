//lib
import styled from "styled-components";
import { breakpoints, HeroHeadline } from "../../styles";
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

	& > div {
		width: 100%;
	}

	@media ${breakpoints.mobileM} {
		img {
			height: 8.6rem;
		}
	}

	@media ${breakpoints.mobileX} {
		& > div {
			margin-top: 3.9rem;
		}
	}

	@media ${breakpoints.desktopS} {
		img {
			height: 9.8rem;
		}
	}
`;

export default HeroPage;
