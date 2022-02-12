import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {start} from "repl";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const TimerText = styled.p`
  font-size: 32px;
  font-family: "bold", serif;
`

interface Props {
  startTimer: boolean;

  setStartTimer(_: boolean): void;
}

const Timer = ({startTimer, setStartTimer}: Props) => {
  const [sec, setSec] = useState<number>(6)
  const timerId = useRef<any>(null);

  useEffect(() => {
    setTimer()

    return () => clearInterval(timerId.current)
  })

  useEffect(() => {
    if (startTimer) {
      clearInterval(timerId.current)

      setSec(6)
      setTimer()
      setStartTimer(false)
    }
  }, [startTimer])

  function setTimer() {
    timerId.current = setInterval(() => {
      if (sec === 0) {
        clearInterval(timerId.current)
        return
      } else {
        setSec(sec - 1)
      }
    }, 1000)
  }

  return (
    <Container>
      <TimerText>
        {sec}
      </TimerText>
    </Container>
  );
};

export default Timer;