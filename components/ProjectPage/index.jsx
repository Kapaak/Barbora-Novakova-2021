//libs
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import ReactBnbGallery from 'react-bnb-gallery'
import 'react-bnb-gallery/dist/style.css'
//components
import { breakpoints, Headline, Section } from '../../styles'
import { urlFor } from '../../utils/imageBuilder'

const ProjectPage = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [gallery, setGallery] = useState([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const selectImageIndex = (index) => {
    setSelectedImageIndex(index)
    setIsOpen(true)
  }

  useEffect(() => {
    projects.map((project) => {
      const imageURLs = project.image?.map((image) => {
        return urlFor(image).url()
      })

      setGallery((prev) => [
        ...prev,
        { projectName: project.subheadline, imageURLs },
      ])
    })
  }, [projects])

  return (
    <Section colored scrollName="projects">
      <Headline>Portfolio</Headline>
      <Gallery>
        {projects?.map((project, index) => {
          return (
            <GalleryItem key={index} onClick={() => selectImageIndex(index)}>
              {project?.thumbnail && (
                <Image
                  loading="lazy"
                  src={urlFor(project?.thumbnail)?.url()}
                  blurDataURL={urlFor(project?.thumbnail)?.url()}
                  layout="fill"
                  alt={project?.headline}
                />
              )}
            </GalleryItem>
          )
        })}
      </Gallery>
      {isOpen && (
        <ReactBnbGallery
          photos={gallery[selectedImageIndex].imageURLs}
          show={isOpen}
          onClose={() => setIsOpen(false)}
          showThumbnails={false}
        />
      )}
    </Section>
  )
}


const GalleryItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: 25rem;
  border-radius: 1rem;
  transition: all .1s ease-in-out;

  & > div {
    position: absolute;
    left: 5%;
    top: 10%;
    color: var(--col2);
  }

  &:hover  {
    scale: 1.05;
    transition: all .3s ease-in-out;
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
