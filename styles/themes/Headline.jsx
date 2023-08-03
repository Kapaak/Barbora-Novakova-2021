//libs
import styled from 'styled-components'
import { breakpoints } from '..'

export const Headline = ({ children }) => {
  return <StyledHeadline>{children}</StyledHeadline>
}

const StyledHeadline = styled.h2`
  position: relative;
  max-width: var(--max-width);
  margin-bottom: 2rem;
  letter-spacing: 0.3rem;
  font-weight: var(--fw-medium);
  text-transform: uppercase;
  font-size: var(--h);
  transition: all 0.3s ease;

  &:before{
    content: '';
    position: absolute;
    display: block;
    bottom: -2rem;
    width: 8.8rem;
    height: 0.3rem;
    background-color: var(--col3);
    margin-bottom: 1rem;
    
  }
  
  @media ${breakpoints.tabletS} {
    margin-bottom: 4rem;
    &:before{
      width: 11.9rem;
    }
  }

  @media ${breakpoints.desktopS} {
    &:before{
      width: 12rem;
    }
  }
  
  @media ${breakpoints.desktopX} {
    margin-bottom: 8rem;
    
    &:before{
      width: 14rem;
    }
  }
`
