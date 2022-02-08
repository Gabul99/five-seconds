import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TitleText = styled.p`
  font-size: 48px;
  color: black;
  text-align: center;
`

const StartButton = styled.div`
  width: 256px;
  height: 48px;
  background-color: dodgerblue;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  cursor: pointer;
  
  font-family: "bold", serif;
  
  &:hover {
    background-color: lightskyblue;
  }
`

const MainPage = () => {
  return (
    <Container>
      <MainContainer>
        <TitleText>5초 준다!</TitleText>
        <StartButton>
          가져와!
        </StartButton>
      </MainContainer>
    </Container>
  )
}

export default MainPage