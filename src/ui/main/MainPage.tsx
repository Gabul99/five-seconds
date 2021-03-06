import React, {useEffect, useState} from "react";
import styled from "styled-components";
import GamePlayPage from "../game/GamePlayPage";
import TestSetModal from "./components/TestSetModal";
import {getTestSetList, TestSetType} from "../../data/TestSetFactory";
import {TestSetInfo} from "../../type/TestSetInfo";

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
  color: white;
  cursor: pointer;
  
  font-family: "bold", serif;
  
  &:hover {
    background-color: lightskyblue;
  }
`

const SettingButton = styled.div`
  width: 256px;
  height: 48px;
  background-color: lightpink;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  
  margin-top: 12px;
  
  font-family: "bold", serif;
  
  &:hover {
    background-color: pink;
  }
`

const MainPage = () => {
  const [isInGame, setInGame] = useState<boolean>(false)
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [selectedTestSet, setSelectedTestSet] = useState<TestSetType[]>([])
  const [testSetTypeList, setTestSetTypeList] = useState<TestSetInfo[]>([])

  useEffect(() => {
    const testSetList = getTestSetList()
    setTestSetTypeList(testSetList)
    setSelectedTestSet(testSetList.map(elem => elem.type))
  }, [])

  return (
    <Container>
      { !isInGame &&
      <MainContainer>
        <TitleText>5초 준다!</TitleText>
        <StartButton onClick={() => {
          if (selectedTestSet.length !== 0) {
          setInGame(true)
          } else {
            alert('출제 범위 설정에서 최소 하나 이상의 범위를 설정해주세요!')
          }
        }}>
          가져와!
        </StartButton>
        <SettingButton onClick={() => setModalOpen(true)}>
          출제 범위 설정
        </SettingButton>
      </MainContainer>
      }
      { isInGame &&
        <GamePlayPage selectedTestSet={selectedTestSet} setInGame={setInGame}/>
      }
      { isModalOpen &&
        <TestSetModal
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
            selectedTestSet={selectedTestSet}
            setSelectedTestSet={setSelectedTestSet}
            testSetTypeList={testSetTypeList}
        />
      }
    </Container>
  )
}

export default MainPage