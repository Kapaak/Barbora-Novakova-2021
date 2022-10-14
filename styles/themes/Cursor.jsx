import { useRef, useEffect } from 'react'
import styled from 'styled-components'

export const Cursor = () => {
  const cursorRef = useRef(null)

  const moveCursor = (e) => {
    cursorRef.current.style.left = e.pageX + 'px'
    cursorRef.current.style.top = e.pageY + 'px'
  }

  useEffect(() => {
    document?.addEventListener('mousemove', (e) => moveCursor(e))
  }, [])

  return (
    <StyledCursor ref={cursorRef}>
      <HorizontalLine />
      <VerticalLine />
    </StyledCursor>
  )
}

const HorizontalLine = styled.div`
  position: absolute;
  width: 2rem;
  height: 0.1rem;
  background-color: var(--col1);
`
const VerticalLine = styled.div`
  position: absolute;
  width: 2rem;
  height: 0.1rem;
  background-color: var(--col1);
  transform: rotate(90deg);
`

const StyledCursor = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--col1);
  border-radius: 50%;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  top: 0;
  left: 0;
  z-index: 1000;
  pointer-events: none;
`
