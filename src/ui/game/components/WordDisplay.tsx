import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`

const WordContainer = styled.div<{ hideWord: boolean }>`
  width: 100%;
  height: 496px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lemonchiffon;
  border-radius: 12px;
  border: 3px solid lightsteelblue;

  ${props => {
    if (props.hideWord) {
      return css`cursor: pointer;`
    }
  }}

  margin-bottom: 24px;
`

const WordText = styled.p`
  font-size: 48px;
  font-family: "bold", serif;
  margin: 0;
  color: black;
  animation: fadein 0.5s;
  -webkit-animation: fadein 0.5s;
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const WordSubText = styled.p`
  font-size: 24px;
  font-family: "regular", serif;
  color: gray;
`

interface Props {
  name: string;
  round: number;
}

const WordDisplay = ({ name, round }: Props) => {
  const [hideWord, setHideWord] = useState<boolean>(true)

  useEffect(() => {
    setHideWord(true)
  }, [round])

  return (
    <Container>
      <WordContainer hideWord={hideWord} onClick={() => setHideWord(false)}>
        {hideWord &&
        <WordSubText>
          뭔지 한 번 볼까? (클릭)
        </WordSubText>
        }
        {!hideWord &&
        <>
          <WordText>
            {name}
          </WordText>
          <WordSubText>
            3가지를 말해라!
          </WordSubText>
        </>
        }
      </WordContainer>
    </Container>
  );
};

export default WordDisplay;