import styled from 'styled-components'

export const FillerEffect = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 4rem;
  width: 4rem;
  background: ${({ background }) => (background ? background : 'var(--col3)')};
  opacity: ${({ opacity }) => (opacity ? opacity : '0')};
  transform: ${({ active }) => (active ? active : 'scale(0)')};
  border-radius: 50%;
  transition: all
    ${({ transitionSpeed }) =>
      transitionSpeed ? `${transitionSpeed}s` : '0.5s'}
    ease-in-out;
  z-index: 1;
`
