//libs
import styled from 'styled-components'
import { breakpoints } from '..'

export const Headline = ({ children }) => {
  return <StyledHeadline>{children}</StyledHeadline>
}

const StyledHeadline = styled.h2`
  max-width: var(--max-width);
  margin-bottom: 2rem;
  font-family: var(--font2);
  letter-spacing: 0.3rem;
  font-weight: 500;
  font-size: var(--h);
  transition: all 0.3s ease;

  @media ${breakpoints.tabletS} {
    margin-bottom: 4rem;
  }

  @media ${breakpoints.desktopX} {
    margin-bottom: 8rem;
  }
`
