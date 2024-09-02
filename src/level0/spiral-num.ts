import { runTests, TestCase } from '../util/testUtils';

/**
 * 양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
 */
function solution(n: number) {
  var answer = Array.from({ length: n }, () => Array(n).fill(0));
  var value = 1;
  var x = 0;
  var y = 0;
  while (true) {
    answer[y][x] = value;
    if ((y == 0 || answer[y - 1][x] > 0) && x != n - 1 && answer[y][x + 1] == 0) {
      x++;
    } else if ((x == n - 1 || answer[y][x + 1] > 0) && y != n - 1 && answer[y + 1][x] == 0) {
      y++;
    } else if ((y == n - 1 || answer[y + 1][x] > 0) && x != 0 && answer[y][x - 1] == 0) {
      x--;
    } else if ((x == 0 || answer[y][x - 1] > 0) && y != 0 && answer[y - 1][x] == 0) {
      y--;
    }
    if (value == n * n) {
      break;
    }
    value++;
  }
  return answer;
}

const testCase: TestCase[] = [
  {
    input: [4],
    result: [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ],
  },
  {
    input: [5],
    result: [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ],
  },
];

runTests(solution, testCase);
