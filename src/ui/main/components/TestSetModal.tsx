import React from 'react';
import styled, {keyframes} from "styled-components";

const BackgroundFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.3;
  }
`

const ModalFadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${BackgroundFadeIn} 0.2s;
`

const ModalContainer = styled.div<{ isModalOpen: boolean }>`
  width: 512px;
  height: 640px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  animation: ${ModalFadeIn} 0.2s;
  overflow-y: scroll;
`

interface Props {
  isModalOpen: boolean;

  setModalOpen(_: boolean): void;
}

const TestSetModal = ({isModalOpen, setModalOpen}: Props) => {
  return (
    <Container>
      <Background onClick={() => setModalOpen(false)}/>
      <ModalContainer isModalOpen={isModalOpen}>
        모달모달
      </ModalContainer>
    </Container>
  );
};

export default TestSetModal;