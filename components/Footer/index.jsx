//libs
import styled from 'styled-components'
import { breakpoints } from '../../styles'

const Footer = () => {
  return (
    <StyledFooter name="footer">
      <div>
        Barbora Nováková ©2021, vytvořil{' '}
        <a href="https://pavelzapletal.cz/">Pavel Zapletal</a>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  margin-bottom: 1rem;
  text-align: left;
  padding: 0 var(--side-p);

  a {
    color: inherit;
    text-underline-offset: 0.5rem;
  }

  @media ${breakpoints.tabletS} {
    text-align: center;
  }
`

export default Footer
