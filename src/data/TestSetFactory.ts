import {koreaCommonTestSet} from "./testsets/koreaCommon";
import {artTestSet} from "./testsets/art";
import {gameLOLTestSet} from "./testsets/gameLOL";
import {countryAndCapitalsTestSet} from "./testsets/countryAndCapitals";
import {gameKartriderTestSet} from "./testsets/gameKartrider";
import {soccerTestSet} from "./testsets/soccer";


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