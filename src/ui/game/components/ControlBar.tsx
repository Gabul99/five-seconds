import React from 'react';
import styled from "styled-components";
import { VscDebugRestart } from "react-icons/vsc";
import { GrLinkNext } from "react-icons/gr";

const Container = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ButtonContainer = styled.div<{ backgroundColor: string, hoverColor: string }>`
  width: 47.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.hoverColor};
  }
`

const ButtonTitleText = styled.p`
  margin: 0;
  font-family: "bold", serif;
  color: white;
  font-size: 18px;
  
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`

const RestartIcon = styled(VscDebugRestart)`
  width: 24px;
  height: 24px;
  margin-bottom: 12px;
`

const NextIcon = styled(GrLinkNext)`
  width: 24px;
  height: 24px;
  margin-bottom: 12px;
`

interface Props {
  setNextRound(): void;
  setStartTimer(_: boolean): void;
}

const ControlBar = ({ setNextRound, setStartTimer }: Props) => {
  return (
    <Container>
      <AgainButton setStartTimer={setStartTimer} />
      <NextButton setNextRound={setNextRound}/>
    </Container>
  );
};

interface AgainButtonProps {
  setStartTimer(_: boolean): void;
}

const AgainButton = ({ setStartTimer }: AgainButtonProps) => {
  return (
    <ButtonContainer onClick={() => setStartTimer(true)} backgroundColor={'hotpink'} hoverColor={'palevioletred'}>
      <RestartIcon />
      <ButtonTitleText>한 번 더!</ButtonTitleText>
    </ButtonContainer>
  )
}

interface NextButtonProps {
  setNextRound(): void;
}

const NextButton = ({ setNextRound }: NextButtonProps) => {
  return (
    <ButtonContainer onClick={setNextRound} backgroundColor={'limegreen'} hoverColor={'seagreen'}>
      <NextIcon />
      <ButtonTitleText>다음 가져와!</ButtonTitleText>
    </ButtonContainer>
  )
}

export default ControlBar;