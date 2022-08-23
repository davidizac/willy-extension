import styled from 'styled-components'

const WillyPopup = styled.div`
  position: absolute !important;
  z-index: 9999;
  animation: popup-animation 0.3s ease-in-out;
  transform: translateZ(0);
  border-radius: 5px;
  text-align: left;
  padding-top: 15px;
  cursor: auto;
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 18px;
  font-weight: 600;
  font-size: 12px;
  color: #495057;
`

const PopupToolbarContainer = styled.div`
  padding: 10px 0px 10px 0px;
`

export const HeadingPopup = ({ left }) => {
  return (
    <WillyPopup style={{ top: '60px', left }}>
      <PopupTitle> Test </PopupTitle>
      <PopupToolbarContainer>
        <div>test2</div>
      </PopupToolbarContainer>
    </WillyPopup>
  )
}
