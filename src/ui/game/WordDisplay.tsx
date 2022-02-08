import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WordContainer = styled.div`
  width: 100%;
  height: 496px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lemonchiffon;
  border-radius: 12px;
  border: 3px solid lightsteelblue;
  
  margin-bottom: 24px;
`

const WordText = styled.p`
  font-size: 48px;
  font-family: "bold", serif;
  margin: 0;
  color: black;
`

const WordSubText = styled.p`
  font-size: 24px;
  font-family: "regular", serif;
  color: gray;
`

interface Props {
  name: string
}

const WordDisplay = ({ name }: Props) => {
  return (
    <Container>
      <WordContainer>
        <WordText>
          {name}
        </WordText>
        <WordSubText>
          3가지를 말해라!
        </WordSubText>
      </WordContainer>
    </Container>
  );
};

export default WordDisplay;