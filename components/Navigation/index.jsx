//libs
import { useState } from 'react'
import styled from 'styled-components'
import { breakpoints, FillerEffect } from '../../styles'
//comps
import NavBurger from './NavBurger'
import NavItems from './NavItems'

const Navigation = () => {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive((prev) => !prev)
  }

  return (
    <StyledNavigation active={active}>
      <NavBurger handleActive={handleActive} isActive={active} />
      <NavItems handleActive={handleActive} isActive={active} />
      <StyledFillerEffect
        active={active ? 'scale(80)' : 'scale(0)'}
        opacity="0.9"
        background="var(--col1)"
      />
    </StyledNavigation>
  )
}

const StyledFillerEffect = styled(FillerEffect)`
  @media ${breakpoints.desktopS} {
    display: none;
  }
`

const StyledNavigation = styled.div`
  position: fixed;
  right: 0;
  width: 100%;
  padding: 2rem;
  height: 100vh;
  overflow: hidden;
  z-index: 990;
  pointer-events: ${({ active }) => (active ? 'all' : 'none')};

  @media ${breakpoints.desktopS} {
    position: absolute;
    pointer-events: all;
    width: 18%;
    padding-right: 0;
  }
`

export default Navigation
