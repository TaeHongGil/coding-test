import { runTests, TestCase } from '../util/testUtils';

/**
 * 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */
function solution(num_list: number[], n: number) {
  return num_list.filter((_, index) => index % n == 0);
}

const testCase: TestCase[] = [
  { input: [[4, 2, 6, 1, 7, 6], 2], result: [4, 6, 7] },
  { input: [[4, 2, 6, 1, 7, 6], 4], result: [4, 7] },
];

runTests(solution, testCase);
