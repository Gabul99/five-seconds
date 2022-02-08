import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {AiOutlineHome} from "react-icons/ai"
import {getTestSet} from "../../data/TestSet";
import WordDisplay from "./WordDisplay";
import ControlBar from "./ControlBar";

const Container = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TopBar = styled.header`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  margin-bottom: 24px;
`

const TopBarTitle = styled.p`
  font-family: "bold", serif;
  font-size: 24px;
  color: black;
  margin: 0;
`

const HomeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

const HomeIcon = styled(AiOutlineHome)`
  width: 24px;
  height: 24px;

  &:hover {
    fill: darkgray;
  }
`

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: calc(100% - 56px);
`

interface Props {
  setInGame(_: boolean): void;
}

const GamePlayPage = ({setInGame}: Props) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [testSet, setTestSet] = useState<string[]>([])
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const [notUsedList, setNotUsedListIdx] = useState<number[]>([])

  useEffect(() => {
    setLoading(true)

    const set = getTestSet()
    setTestSet(set)
    setCurrentIdx(getRandomIndex(set.length))
    let array: number[] = []
    for (let i = 0; i < set.length; i++) {
      array.push(i)
    }
    setNotUsedListIdx(array)

    setLoading(false)
  }, [])

  function getRandomIndex(length: number): number {
    const randomNumber = Math.random() * length
    return Math.ceil(randomNumber) - 1
  }

  function setNextIndex() {
    const newIdxList = notUsedList.filter((elem, index) => {
      return index !== currentIdx
    })
    setNotUsedListIdx(newIdxList)
    const newIndex = getRandomIndex(newIdxList.length)
    setCurrentIdx(newIndex)
  }

  return (
    <Container>
      <TopBar>
        <TopBarTitle>5초 준다!</TopBarTitle>
        <HomeIconContainer onClick={() => setInGame(false)}>
          <HomeIcon/>
        </HomeIconContainer>
      </TopBar>
      <ContentsContainer>
        {currentIdx === -1 &&
          <p>모든 데이터를 사용했습니다!</p>
        }
        {currentIdx >= 0 &&
        <>
          <WordDisplay name={testSet[currentIdx]}/>
          <ControlBar setNextIndex={setNextIndex}/>
        </>
        }
      </ContentsContainer>
    </Container>
  )
}

export default GamePlayPage;