/**
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 */

import { runTests, TestCase } from '../util/testUtils';

function solution(participant: string[], completion: string[]) {
  let _completion: any = {};
  for (const name of completion) {
    _completion[name] = _completion[name] ? ++_completion[name] : 1;
  }
  for (const name of participant) {
    if (_completion[name] == undefined || _completion[name] == 0) {
      return name;
    }
    _completion[name]--;
  }
}

const testCase: TestCase[] = [
  {
    input: [
      ['leo', 'kiki', 'eden'],
      ['eden', 'kiki'],
    ],
    result: 'leo',
  },
  {
    input: [
      ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
      ['josipa', 'filipa', 'marina', 'nikola'],
    ],
    result: 'vinko',
  },
  {
    input: [
      ['mislav', 'stanko', 'mislav', 'ana'],
      ['stanko', 'ana', 'mislav'],
    ],
    result: 'mislav',
  },
  {
    input: [
      ['a', 'a', 'b', 'b', 'c'],
      ['a', 'a', 'b', 'c'],
    ],
    result: 'b',
  },
];

runTests(solution, testCase);
