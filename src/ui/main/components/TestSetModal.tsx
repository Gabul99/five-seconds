import React, {useEffect, useState} from 'react';
import styled, {keyframes} from "styled-components";
import {getTestSetList, TestSetType} from "../../../data/TestSetFactory";
import {TestSetInfo} from "../../../type/TestSetInfo";
import {AiFillCheckSquare} from "react-icons/ai";

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
  width: calc(512px - 32px);
  height: 640px;
  padding: 0 16px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  animation: ${ModalFadeIn} 0.2s;

  @media screen and (max-width: 511px) {
    width: calc(100% - 16px);
  }
`

const ModalTitleText = styled.p`
  font-family: "bold", serif;
  font-size: 24px;
  margin: 12px 0;
`

const TypeListContainer = styled.div`
  width: 100%;
  height: calc(100% - 48px - 80px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

const SaveButton = styled.div`
  width: 100%;
  height: 48px;
  background-color: limegreen;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  
  margin-top: auto;
  margin-bottom: 16px;
  
  font-family: "bold", serif;
  
  &:hover {
    background-color: palegreen;
  }
`

const ListItemContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const CheckIcon = styled(AiFillCheckSquare)<{ selected: boolean }>`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  fill: ${props => props.selected ? 'limegreen' : 'gray'};
  border-radius: 8px;
`

interface Props {
  isModalOpen: boolean;
  selectedTestSet: TestSetType[];

  setModalOpen(_: boolean): void;
  setSelectedTestSet(_: TestSetType[]): void;
}

const TestSetModal = ({isModalOpen, setModalOpen, selectedTestSet, setSelectedTestSet}: Props) => {
  const [testSetTypeList, setTestSetTypeList] = useState<TestSetInfo[]>([])

  useEffect(() => {
    const testSetList = getTestSetList()
    setTestSetTypeList(testSetList)
    setSelectedTestSet(testSetList.map(elem => elem.type))
  }, [])

  return (
    <Container>
      <Background onClick={() => setModalOpen(false)}/>
      <ModalContainer isModalOpen={isModalOpen}>
        <ModalTitleText>출제 범위 설정</ModalTitleText>
        <TypeListContainer>
          {
            testSetTypeList.map((info) => {
              return <ListItem
                key={info.type}
                name={info.name}
                selected={selectedTestSet.includes(info.type)}
                onClick={() => {
                  if (selectedTestSet.includes(info.type)) {
                    setSelectedTestSet(selectedTestSet.filter(elem => elem !== info.type))
                  } else {
                    setSelectedTestSet([...selectedTestSet, info.type])
                  }
                }} />
            })
          }
        </TypeListContainer>
        <SaveButton onClick={() => setModalOpen(false)}>
          확인
        </SaveButton>
      </ModalContainer>
    </Container>
  );
};

interface ListItemProps {
  name: string,
  selected: boolean,
  onClick(): void
}

const ListItem = ({ name, selected, onClick }: ListItemProps) => {

  return (
    <ListItemContainer onClick={onClick}>
      <p>{name}</p>
      <CheckIcon selected={selected} />
    </ListItemContainer>
  )
}

export default TestSetModal;