import { position } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { usePositionCorrection } from '../../hooks'
import ControlToolbar from '../ControlToolbar'
import StyleToolbar from '../StyleToolbar'

const ToolBarContainer = styled.div`
  position: absolute;
  z-index: 2;
`

export function Toolbar({ editedElement, handleSaveButtonClick, canvasSize }) {
  const ref = useRef(null)

  const getToolbarPosition = () => {
    const { bottom, left } = editedElement?.getClientRects()[0]
    return {
      top: bottom + 30,
      left,
    }
  }

  const [toolbarPosition, setToolbarPosition] = useState(getToolbarPosition())

  useEffect(() => {
    // the height of the canvas element has changed so we are updating the top position of the toolbar.
    // Otherwise the top position of the toolbar will stay the same because of the usePositionCorrection hook.

    const { bottom } = editedElement?.getClientRects()[0]
    setToolbarPosition((position) => {
      return {
        ...position,
        top: bottom + 30,
      }
    })
  }, [canvasSize])

  const { top, left } = usePositionCorrection(ref, {
    leftPos: toolbarPosition.left,
    topPos: toolbarPosition.top,
  })

  useEffect(() => {
    if (top !== toolbarPosition.top) {
      // if the top position has been corrected by the hook, dont use the new correct value.
      // Place the toolbar at the top instead (top: -55px).
      setToolbarPosition((position) => {
        return {
          ...position,
          top: '-55px',
        }
      })
    } else {
      setToolbarPosition((position) => {
        return {
          ...position,
          left,
        }
      })
    }
  }, [top, left])

  return (
    <ToolBarContainer
      ref={ref}
      style={{
        top: toolbarPosition.top,
        left: toolbarPosition.left,
        display: 'flex',
        columnGap: '8px',
      }}
    >
      <StyleToolbar />
      <ControlToolbar handleSaveButtonClick={handleSaveButtonClick} />
    </ToolBarContainer>
  )
}
