//lib
import styled from "styled-components";
import Div100vh from "react-div-100vh";
//comps
import { breakpoints, HeroHeadline } from "../../styles";
import { HeroSubheadline } from "../../styles";
import { Line } from "../../styles";

const HeroPage = () => {
	return (
		<Div100vh>
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
		</Div100vh>
	);
};

const StyledHeroPage = styled.section`
	position: relative;
	min-height: 100%;
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
		/* height: 9.665rem; */
		flex: 1;
	}

	& > div {
		width: 100%;
	}

	@media (-webkit-min-device-pixel-ratio: 4) {
		height: 9.665rem;
	}

	@media ${breakpoints.mobileM} {
		img {
			height: 8.6rem;
			width: 100%;
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
