import { runTests, TestCase } from '../util/testUtils';

/**
 * 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
 */
function solution(num_list: number[]) {
  return num_list.length >= 11
    ? num_list.reduce((a, b) => {
        return a + b;
      })
    : num_list.reduce((a, b) => {
        return a * b;
      });
}

/**
 * 가독성이 좋음.
 */
function otherSolution(num_list: number[]) {
  const mult = (acc: number, v: number) => acc * v;
  const add = (acc: number, v: number) => acc + v;
  return num_list.length > 10 ? num_list.reduce(add, 0) : num_list.reduce(mult, 1);
}

const testCase: TestCase[] = [
  { input: [[3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]], result: 51 },
  { input: [[2, 3, 4, 5]], result: 120 },
];

runTests(solution, testCase);
