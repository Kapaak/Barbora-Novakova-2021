//libs
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/future/image'
//components
import { breakpoints, Button, Headline, Section, Text } from '../../styles'
import { urlFor } from '../../utils/imageBuilder'

const AboutPage = ({ aboutData }) => {
  return (
    <Section colored scrollName="about">
      <Headline>O mně</Headline>
      <Wrapper>
        <SImage
          width={638}
          height={760}
          src={urlFor(aboutData?.photo).url()}
          alt="my profile image"
        />
        <TextWrapper>
          <Text>
            <BlockContent blocks={aboutData.text} />
          </Text>
          <Button>
            <a
              download
              rel="noreferrer"
              target="_blank"
              href={aboutData.file.url}
            >
              životopis
            </a>
          </Button>
        </TextWrapper>
      </Wrapper>
    </Section>
  )
}

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap);
`

const SImage = styled(Image)`
  display: none;
  object-fit: cover;
  width: 100%;
  height: 30rem;

  @media ${breakpoints.tabletS} {
    display: block;
  }

  @media ${breakpoints.desktopS} {
    height: 38rem;
  }

  @media ${breakpoints.desktopX} {
    height: 44rem;
  }
`

const Wrapper = styled.div`
  display: flex;
  gap: var(--gap);
`

export default AboutPage
