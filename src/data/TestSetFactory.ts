import {koreaCommonTestSet} from "./testsets/koreaCommon";
import {artTestSet} from "./testsets/art";
import {gameLOLTestSet} from "./testsets/gameLOL";
import {countryAndCapitalsTestSet} from "./testsets/countryAndCapitals";
import {gameKartriderTestSet} from "./testsets/gameKartrider";
import {soccerTestSet} from "./testsets/soccer";
import {TestSetInfo} from "../type/TestSetInfo";

export enum TestSetType {
  KOREA_COMMON,
  ART,
  GAME_LOL,
  GAME_KARTRIDER,
  COUNTRY_CAPTITALS,
  SOCCER,
}

const allTestSetType: TestSetType[] = [
  TestSetType.KOREA_COMMON,
  TestSetType.ART,
  TestSetType.GAME_LOL,
  TestSetType.GAME_KARTRIDER,
  TestSetType.COUNTRY_CAPTITALS,
  TestSetType.SOCCER
]

function getTestSetNameByType(type: TestSetType): string {
  switch (type) {
    case TestSetType.KOREA_COMMON:
      return "국내 일반"
    case TestSetType.ART:
      return "예술"
    case TestSetType.GAME_LOL:
      return "게임: 롤"
    case TestSetType.GAME_KARTRIDER:
      return "게임: 카트라이더"
    case TestSetType.COUNTRY_CAPTITALS:
      return "국가와 수도"
    case TestSetType.SOCCER:
      return "축구"
    default:
      return ""
  }
}

function getTestSetByType(type: TestSetType): string[] {
  switch (type) {
    case TestSetType.KOREA_COMMON:
      return koreaCommonTestSet
    case TestSetType.ART:
      return artTestSet
    case TestSetType.GAME_LOL:
      return gameLOLTestSet
    case TestSetType.GAME_KARTRIDER:
      return gameKartriderTestSet
    case TestSetType.COUNTRY_CAPTITALS:
      return countryAndCapitalsTestSet
    case TestSetType.SOCCER:
      return soccerTestSet
    default:
      return []
  }
}

export function getTestSetList(): TestSetInfo[] {
  return allTestSetType.map((elem) => {
    return {
      type: elem,
      name: getTestSetNameByType(elem),
      count: getTestSetByType(elem).length
    }
  })
}

export function getTestSet(): string[] {
  let testSets = [
    koreaCommonTestSet,
    artTestSet,
    gameLOLTestSet,
    gameKartriderTestSet,
    countryAndCapitalsTestSet,
    soccerTestSet,
  ]

  return testSets.reduce((l, r) => {
    return [...l, ...r]
  })
}