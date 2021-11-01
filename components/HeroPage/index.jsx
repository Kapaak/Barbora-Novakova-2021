//lib
import styled from "styled-components";
import { breakpoints, HeroHeadline } from "../../styles";
import { HeroSubheadline } from "../../styles";
import { Line } from "../../styles";

const HeroPage = () => {
	return (
		<StyledHeroPage>
			<div>
				<Wrapper>
					<img src="assets/house.svg" alt="house" />
					<div>
						<HeroHeadline>Barbora Nováková</HeroHeadline>
						<Line />
						<HeroSubheadline>Architecture student</HeroSubheadline>
					</div>
				</Wrapper>
			</div>
		</StyledHeroPage>
	);
};

const StyledHeroPage = styled.section`
	position: relative;
	min-height: 100vh;
	padding: var(--side-p);
	display: flex;
	align-items: flex-end;

	& > div {
		max-width: var(--max-width);
		margin: 0 auto;
		width: 100%;
	}
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

	@media ${breakpoints.desktopX} {
		img {
			height: 12.6rem;
		}
	}
`;

export default HeroPage;
