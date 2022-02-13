import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {start} from "repl";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const TimerText = styled.p<{color: string}>`
  font-size: 44px;
  font-family: "bold", serif;
  color: ${props => props.color};
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

  function getTimerTextColor(sec: number): string {
    switch (sec) {
      case 5:
        return 'lime'
      case 4:
        return 'limegreen'
      case 3:
        return 'yellowgreen'
      case 2:
        return 'orange'
      case 1:
        return 'tomato'
      case 0:
        return 'red'
      default:
        return 'black'
    }
  }

  function secToDisplay(sec: number): string {
    switch (sec) {
      case 6:
        return '시작!'
      case 0:
        return '땡~'
      default:
        return `${sec}`
    }
  }

  return (
    <Container>
      <TimerText color={getTimerTextColor(sec)}>
        {secToDisplay(sec)}
      </TimerText>
    </Container>
  );
};

export default Timer;