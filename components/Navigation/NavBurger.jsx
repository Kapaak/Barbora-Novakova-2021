//libs
import styled from 'styled-components'
import { breakpoints } from '../../styles'

const NavBurger = ({ handleActive, isActive }) => {
  return (
    <StyledBurger onClick={handleActive} isActive={isActive}>
      <p></p>
      <p></p>
      <p></p>
    </StyledBurger>
  )
}

const StyledBurger = styled.div`
  position: relative;
  display: flex;
  width: 4rem;
  height: 2.9rem;
  z-index: 999;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: auto;
  cursor: pointer;
  pointer-events: all;
  overflow: hidden;

  p {
    width: 100%;
    height: 0.3rem;
    background-color: ${({ isActive }) =>
      isActive ? 'var(--col2)' : 'var(--col3)'};
    transition: all 0.35s ease;

    &:first-child {
      transform: ${({ isActive }) =>
        isActive
          ? 'translateY(1.3rem) rotate(45deg)'
          : 'translateY(0) rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ isActive }) =>
        isActive ? 'translateX(-100%)' : 'translateX(0)'};
    }
    &:last-child {
      transform: ${({ isActive }) =>
        isActive
          ? 'translateY(-1.3rem) rotate(-45deg)'
          : 'translateY(0) rotate(0)'};
    }
  }

  @media ${breakpoints.desktopS} {
    display: none;
  }
`

export default NavBurger
