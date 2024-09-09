/**
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
 */
import { runTests, TestCase } from '../util/testUtils';

function solution(prices: number[]) {
  const end = prices.length;
  return prices.map((price, index) => {
    let result = -1;
    for (let i = index + 1; i < end; i++) {
      if (price > prices[i]) {
        result = i;
        break;
      }
    }
    if (result == -1) {
      result = end - 1;
    }
    return result - index;
  });
}

const testCase: TestCase[] = [
  {
    input: [[1, 2, 3, 2, 3]],
    result: [4, 3, 1, 1, 0],
  },
];

runTests(solution, testCase);
