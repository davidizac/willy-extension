import React from 'react'
import styled from 'styled-components'

const WillyDropDown = styled.div`
position: absolute !important;
z-index: 9999;
border-radius: 3px;
animation: popup-animation 0.3s ease-in-out;
transition: opacity 0.3s linear;
transform: translateZ(0);
/* will-change: transform;
`

const WillyPopup = styled.div`
background: #ACB5BD
box-shadow: 0px 0px 6px rgb(0 0 0 / 6%);
border-radius: 5px;
text-align: left;
padding-top: 15px;
cursor: auto;
`
const WillyPopupToolbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 350px;
  transition: top 0.3s linear;
  background-color: white;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
`

const PopupTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #212429;
  font-weight: 500;
  font-size: var(--font-size-large);
  padding: 0px 25px 10px 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

const PopupToolBarTitle = styled.div`
  padding: 10px 18px;
  font-family: var(--font-family-tertiary);
  font-weight: 600;
  font-size: var(--font-size-small);
  color: var(--color-font-primary);
`

const PopupToolbarContainer = styled.div`
  padding: 10px 0px 10px 0px;
`
