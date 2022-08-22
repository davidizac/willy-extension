import React from 'react'
import { CloneIcon, DiscardIcon, RemoveIcon, SaveIcon } from '../../icons'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
`
const ToolBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const IconWrapper = styled.div`
  padding: 5px 14px;
  border-radius: 3px;
  cursor: pointer;
`

const Between = styled.div`
  &:after {
    content: '';
    width: 1px;
    height: 16px;
    background: rgba(163, 176, 184, 0.26);
  }
`

export default function ControlToolbar({ handleSaveButtonClick }) {
  return (
    <Wrapper>
      <ToolBar>
        <ToolBar>
          <IconWrapper
            onClick={handleSaveButtonClick}
            style={{
              backgroundColor: 'rgba(141, 204, 164)',
              boxShadow: '-1px 1px 6px rgb(0 0 0 / 8%)',
              padding: '0px 14px',
            }}
          >
            <SaveIcon />
          </IconWrapper>
          <IconWrapper>
            <DiscardIcon />
          </IconWrapper>
        </ToolBar>
        <Between />
        <ToolBar>
          <IconWrapper>
            <RemoveIcon />
          </IconWrapper>
          <IconWrapper>
            <CloneIcon />
          </IconWrapper>
        </ToolBar>
      </ToolBar>
    </Wrapper>
  )
}
