/**
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
 */

import { runTests, TestCase } from '../util/testUtils';

function solution(genres: string[], plays: number[]) {
  const count: Record<string, any> = {};
  const albums = genres.map((genre, id) => {
    if (!count[genre]) {
      count[genre] = {
        albumCount: 0,
        totalCount: 0,
      };
    }
    count[genre].totalCount += plays[id];
    return {
      genre: genre,
      id: id,
      play: plays[id],
    };
  });
  return albums
    .sort((a, b) => count[b.genre].totalCount - count[a.genre].totalCount || b.play - a.play || a.id - b.id)
    .map((album) => {
      if (count[album.genre].albumCount >= 2) {
        return;
      }
      count[album.genre].albumCount++;
      return album.id;
    })
    .filter((x) => x != undefined);
}

const testCase: TestCase[] = [
  {
    input: [
      ['classic', 'pop', 'classic', 'classic', 'pop'],
      [500, 600, 150, 800, 2500],
    ],
    result: [4, 1, 3, 0],
  },
  {
    input: [
      ['classic', 'pop', 'classic', 'classic', 'pop'],
      [800, 600, 800, 801, 2500],
    ],
    result: [4, 1, 3, 0],
  },
];

runTests(solution, testCase);
