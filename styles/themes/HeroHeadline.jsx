//libs
import styled from 'styled-components'
import { breakpoints } from '..'

export const HeroHeadline = ({ children }) => {
  return <SHeroHeadline>{children}</SHeroHeadline>
}

const SHeroHeadline = styled.h1`
  font-family: var(--font2);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 500;
  font-size: var(--mh);
  margin-left: 1rem;
  line-height: 1.25;

  @media ${breakpoints.desktopS} {
    margin-left: 2.5rem;
  }

  @media ${breakpoints.desktopX} {
    margin-left: 4.2rem;
    line-height: 1.4;
  }
`
