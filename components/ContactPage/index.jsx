//libs
import styled from 'styled-components'
import { breakpoints, Headline, Section, H3 } from '../../styles'

const ContactPage = () => {
  return (
    <Section scrollName="contact">
      <Headline>Kontakt</Headline>
      <Wrapper>
        <StyledItem>
          <SectionHeadline>E-Mail</SectionHeadline>
          <SectionSubheadline>
            <a href="mailto:barca.novako15@gmail.com">
              Barca.novako15@gmail.com
            </a>
          </SectionSubheadline>
        </StyledItem>
        <StyledItem>
          <SectionHeadline>Telefon</SectionHeadline>
          <SectionSubheadline>
            <a href="tel:+">+420 723 593 698</a>
          </SectionSubheadline>
        </StyledItem>
      </Wrapper>
    </Section>
  )
}

const SectionHeadline = styled(H3)`
  text-transform: uppercase;
`

const SectionSubheadline = styled.h4`
  color: var(--col3);
  font-weight: 500;
  font-size: var(--t);
  letter-spacing: 0.05rem;

  @media ${breakpoints.mobileX} {
    width: 22rem;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap);
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${breakpoints.mobileX} {
    flex-direction: row;
    width: 40rem;
    justify-content: space-between;
    align-items: center;
  }
`

export default ContactPage
