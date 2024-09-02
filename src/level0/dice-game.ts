import { runTests, TestCase } from '../util/testUtils';

/**
 * 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
 * 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
 * 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)^2 점을 얻습니다.
 * 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
 * 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
 * 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
 * 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
 */
function solution(a: number, b: number, c: number, d: number) {
  var answer = 0;
  const countList = new Array(7).fill(0);
  const numList = [a, b, c, d];
  numList.forEach((num) => countList[num]++);

  const case1 = { p: countList.indexOf(4) };
  const case2 = { p: countList.indexOf(3), q: countList.indexOf(1) };
  const case3 = { p: countList.indexOf(2), q: countList.lastIndexOf(2) };
  const case4 = { p: countList.indexOf(2), q: countList.indexOf(1), r: countList.lastIndexOf(1) };
  const case5 = count(countList, 1) == 4 ? Math.min(...numList) : 0;

  if (case1.p > 0) {
    answer += 1111 * case1.p;
  } else if (case2.p > 0) {
    answer += (10 * case2.p + case2.q) ** 2;
  } else if (case3.p > 0 && case3.p != case3.q) {
    answer += (case3.p + case3.q) * Math.abs(case3.p - case3.q);
  } else if (case4.p > 0 && case4.q != case4.r && case4.q > 0 && case4.r > 0) {
    answer += case4.q * case4.r;
  } else if (case4.p > 0 && case4.q != case4.r && case4.q > 0 && case4.r > 0) {
    answer += case4.q * case4.r;
  } else if (case5 > 0) {
    answer += case5;
  }
  return answer;
}

function count(list: number[], value: any) {
  return list.filter((x) => x == value).length;
}

const testCase: TestCase[] = [
  { input: [2, 2, 2, 2], result: 2222 },
  { input: [4, 1, 4, 4], result: 1681 },
  { input: [6, 3, 3, 6], result: 27 },
  { input: [2, 5, 2, 6], result: 30 },
  { input: [6, 4, 2, 5], result: 2 },
];

runTests(solution, testCase);
