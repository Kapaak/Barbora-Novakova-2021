//libs
import styled from 'styled-components'
import { breakpoints } from '..'
import { FillerEffect } from './FillerEffect'

export const Button = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: relative;
  border: 2px solid var(--col3);
  box-shadow: 0px 0px 5px 0px rgba(195, 86, 45, 0.50);
  border-radius: .5rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
  overflow: hidden;
  background-color: transparent;
  
  a {
    position: relative;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    color: var(--col-b);
    letter-spacing: .1rem;
    text-decoration: none;
    font-weight: 500;
    z-index: 2;
    padding: 1rem 1.5rem;
  }

  &:hover {
    a {
      color: var(--col2);
      background-color: var(--col3);
    }
  }

  &:hover ${FillerEffect} {
    transform: scale(8);
    opacity: 0.96;
  }

  @media ${breakpoints.desktopS} {
    a {
      padding: 1.4rem 2rem;
    }
  }
`
