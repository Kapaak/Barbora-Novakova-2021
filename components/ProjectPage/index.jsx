//libs
import styled from 'styled-components'
import Image from 'next/image'
import ReactBnbGallery from 'react-bnb-gallery'
import 'react-bnb-gallery/dist/style.css'
//components
import { breakpoints, FillerEffect, Headline, Section } from '../../styles'
import { urlFor } from '../../utils/imageBuilder'
import { useState } from 'react'
import { useEffect } from 'react'

const ProjectPage = ({ projectData }) => {
  const [active, setActive] = useState(false)
  const [gallery, setGallery] = useState([])
  const [targetedImage, setTargetedImage] = useState(0)

  const targetActiveImage = (index) => {
    setTargetedImage(index)
    setActive(true)
  }

  useEffect(() => {
    projectData.map((p, i) => {
      const photoArray = []
      p.image?.map((image) => {
        photoArray.push(urlFor(image).url())
      })

      setGallery((prev) => [
        ...prev,
        { projectName: p.subheadline, imageURLs: photoArray },
      ])
    })
  }, [])

  return (
    <Section colored scrollName="projects">
      <Headline>Portfolio</Headline>
      <Gallery>
        {projectData?.map((p, i) => {
          return (
            <GalleryItem key={i} onClick={() => targetActiveImage(i)}>
              <FillerEffect />
              {p.image[0] && (
                <Image
                  loading="lazy"
                  src={urlFor(p.image[0]).url()}
                  layout="fill"
                  alt={p.headline}
                />
              )}
              <ImageDescription>
                <ImageDescriptionHeadline>
                  {p.headline}
                </ImageDescriptionHeadline>
                <ImageDescriptionSubheadline>
                  {p.subheadline}
                </ImageDescriptionSubheadline>
              </ImageDescription>
            </GalleryItem>
          )
        })}
      </Gallery>
      {active && (
        <ReactBnbGallery
          photos={gallery[targetedImage].imageURLs}
          show={active}
          onClose={() => setActive(false)}
          showThumbnails={false}
        />
      )}
    </Section>
  )
}

const ImageDescriptionHeadline = styled.h3`
  font-weight: 500;
  color: var(--col4);
  font-size: var(--t);
  margin-bottom: 1rem;
`

const ImageDescriptionSubheadline = styled.h3`
  font-family: var(--font2);
  font-weight: 500;
  text-transform: uppercase;
  font-size: var(--bt);
`

const ImageDescription = styled.div`
  opacity: 0;
  z-index: 3;
`

const GalleryItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: 25rem;

  & > div {
    position: absolute;
    left: 5%;
    top: 10%;
    color: var(--col2);
  }

  &:hover ${FillerEffect} {
    transform: scale(30);
    opacity: 0.9;
  }

  &:hover ${ImageDescription} {
    opacity: 1;
  }

  @media ${breakpoints.desktopS} {
    height: 30rem;
  }
  @media ${breakpoints.desktopX} {
    height: 33rem;
  }
`

const Gallery = styled.div`
  display: grid;
  gap: var(--gap);

  img {
    width: 100%;
    object-fit: cover;
  }

  @media ${breakpoints.mobileM} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.tabletS} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default ProjectPage
