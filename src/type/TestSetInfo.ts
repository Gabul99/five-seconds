import {TestSetType} from "../data/TestSetFactory";

export interface TestSetInfo {
  type: TestSetType,
  name: string,
  count: number,
}