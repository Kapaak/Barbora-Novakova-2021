//libs
import styled from 'styled-components'
import { breakpoints } from '..'

export const HeroSubheadline = ({ children }) => {
  return <SHeroSubheadline>{children}</SHeroSubheadline>
}

const SHeroSubheadline = styled.h2`
  font-family: var(--font1);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: var(--fw-regular);
  font-size: var(--smh);
  margin-left: 1rem;
  padding-top: 4.4rem;

  @media ${breakpoints.mobileM} {
  padding-top: 0;
  }

  @media ${breakpoints.desktopS} {
    margin-left: 2.5rem;
  }

  @media ${breakpoints.desktopX} {
    margin-left: 4.2rem;
    line-height: 2;
  }
`
