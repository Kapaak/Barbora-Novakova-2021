//lib
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import { useRef, useEffect, useState } from 'react'
//comps
import { breakpoints, HeroHeadline } from '../../styles'
import { HeroSubheadline } from '../../styles'
import { Line } from '../../styles'

import { motion } from 'framer-motion'

const HeroPage = () => {
  const wrapperRef = useRef(null)
  const fullSizeRef = useRef(null)
  const [correctWidth, setCorrectWidth] = useState(0)

  const responsiveLineResize = () => {
    const wrapperWidth = wrapperRef.current.getBoundingClientRect().right
    const fullSizeWidth = fullSizeRef.current.getBoundingClientRect().right
    const result = fullSizeWidth - wrapperWidth
    setCorrectWidth(result)
  }

  useEffect(() => {
    responsiveLineResize()

    window.addEventListener('resize', () => responsiveLineResize())
  }, [])

  return (
    <Div100vh ref={fullSizeRef}>
      <StyledHeroPage>
        <div>
          <Wrapper ref={wrapperRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65.89"
              height="59.929"
              viewBox="0 0 65.89 59.929"
            >
              <g transform="translate(-34.37 -322.704)">
                <motion.path
                  d="M-5679.487,13721.527l32.7-26.5,31.56,26.5v32.129"
                  transform="translate(5714.487 -13371.023)"
                  fill="none"
                  stroke="var(--col3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              </g>
            </svg>
            <div>
              <HeroSubheadline>Ing. Arch.</HeroSubheadline>
              <Line correctWidth={correctWidth} />
              <HeroHeadline>Barbora Nováková</HeroHeadline>
            </div>
          </Wrapper>
        </div>
      </StyledHeroPage>
    </Div100vh>
  )
}

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
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: flex-start;

  img,
  svg {
    height: 7.35rem;
    min-width: 8.1rem;
    flex: 1;
  }

  & > div {
    width: 100%;
  }

  @media ${breakpoints.mobileM} {
    svg,
    img {
      height: 7.14rem;
      min-width: 7.6rem;
    }
  }

  /* @media only screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 564px) {
		img {
			height: 9.665rem;
		}
	} */

  @media ${breakpoints.mobileX} {
    & > div {
      margin-top: 3.9rem;
    }
  }

  @media ${breakpoints.desktopS} {
    svg,
    img {
      height: 7.5rem;
      min-width: 8.3rem;
    }
  }

  @media ${breakpoints.desktopX} {
    svg,
    img {
      height: 10.6rem;
      min-width: 10.5rem;
    }
  }
`

export default HeroPage
