//libs
import styled from 'styled-components'
//components
import { breakpoints, Headline, Section, H3 } from '../../styles'

const CVPage = ({ educationData, experienceData }) => {
  return (
    <Section>
      <MarginWrapper>
        <Headline>Vzdělání</Headline>
        <Wrapper firstChild={true}>
          {educationData?.map((e, i) => (
            <StyledItem key={i}>
              <div>
                <SectionHeadline>{e.study}</SectionHeadline>
                <SectionHeadline>{e.location}</SectionHeadline>
              </div>
              <SectionSubheadline>{e.date}</SectionSubheadline>
            </StyledItem>
          ))}
        </Wrapper>
      </MarginWrapper>
      <div>
        <Headline>Zkušenosti</Headline>
        <Wrapper>
          {experienceData?.map((e, i) => (
            <StyledItem key={i}>
              <div>
                <SectionHeadline>{e.job}</SectionHeadline>
                <SectionHeadline>{e.company}</SectionHeadline>
              </div>
              <SectionSubheadline>{e.date}</SectionSubheadline>
            </StyledItem>
          ))}
        </Wrapper>
      </div>
    </Section>
  )
}

const MarginWrapper = styled.div`
  margin-bottom: 2rem;

  @media ${breakpoints.desktopS} {
    margin-bottom: 5rem;
  }
`

const SectionHeadline = styled(H3)`
  font-weight: 500;
  font-size: var(--t);
`

const SectionSubheadline = styled.h3`
  color: var(--col5);
  letter-spacing: 0.2rem;
  font-weight: 500;
  font-size: var(--bt);
  margin-top: 1rem;

  @media ${breakpoints.desktopX} {
    margin: 2rem 0;
  }
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.tabletS} {
    flex: 0 1 30%;
  }

  @media ${breakpoints.desktopS} {
    flex: 0 1 25%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  @media ${breakpoints.mobileX} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export default CVPage
