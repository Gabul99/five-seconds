import {koreaCommonTestSet} from "./testsets/koreaCommon";
import {artTestSet} from "./testsets/art";
import {gameLOLTestSet} from "./testsets/gameLOL";
import {countryAndCapitalsTestSet} from "./testsets/countryAndCapitals";
import {gameKartriderTestSet} from "./testsets/gameKartrider";
import {soccerTestSet} from "./testsets/soccer";
import {TestSetInfo} from "../type/TestSetInfo";
import {historyTestSet} from "./testsets/history";
import {foodTestSet} from "./testsets/food";

export enum TestSetType {
  KOREA_COMMON,
  ART,
  GAME_LOL,
  GAME_KARTRIDER,
  COUNTRY_CAPTITALS,
  SOCCER,
  HISTORY,
  FOOD,
}

const availableTestSetType: TestSetType[] = [
  TestSetType.KOREA_COMMON,
  // TestSetType.ART,
  TestSetType.GAME_LOL,
  // TestSetType.GAME_KARTRIDER,
  // TestSetType.COUNTRY_CAPTITALS,
  TestSetType.SOCCER,
  // TestSetType.HISTORY,
  TestSetType.FOOD,
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
    case TestSetType.HISTORY:
      return "역사"
    case TestSetType.FOOD:
      return "음식"
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
    case TestSetType.HISTORY:
      return historyTestSet
    case TestSetType.FOOD:
      return foodTestSet
    default:
      return []
  }
}

export function getTestSetList(): TestSetInfo[] {
  return availableTestSetType.map((elem) => {
    return {
      type: elem,
      name: getTestSetNameByType(elem),
      count: getTestSetByType(elem).length
    }
  })
}

export function getTestSet(selectedTestSet: TestSetType[]): string[] {
  return selectedTestSet.map((elem) => {
      return getTestSetByType(elem)
    }
  ).reduce((l, r) => {
    return [...l, ...r]
  })
}