import WinningChecker from '../src/services/WinningChecker.js';
import Lotto from '../src/Lotto.js';

describe('WinningChecker 테스트', () => {
  describe('당첨 번호 일치 개수 계산', () => {
    test('6개 모두 일치하는 경우', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(WinningChecker.countMatchingNumbers(lotto, winningNumbers)).toBe(
        6
      );
    });

    test('5개 일치하는 경우', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(WinningChecker.countMatchingNumbers(lotto, winningNumbers)).toBe(
        5
      );
    });

    test('3개 일치하는 경우', () => {
      const lotto = new Lotto([1, 2, 3, 10, 11, 12]);
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(WinningChecker.countMatchingNumbers(lotto, winningNumbers)).toBe(
        3
      );
    });

    test('하나도 일치하지 않는 경우', () => {
      const lotto = new Lotto([10, 11, 12, 13, 14, 15]);
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(WinningChecker.countMatchingNumbers(lotto, winningNumbers)).toBe(
        0
      );
    });
  });

  describe('보너스 번호 일치 확인', () => {
    test('보너스 번호가 일치하는 경우', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
      const bonusNumber = 7;
      expect(WinningChecker.checkBonusMatch(lotto, bonusNumber)).toBe(true);
    });

    test('보너스 번호가 일치하지 않는 경우', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 7;
      expect(WinningChecker.checkBonusMatch(lotto, bonusNumber)).toBe(false);
    });
  });

  describe('당첨 등수 판별', () => {
    test('1등 - 6개 일치', () => {
      expect(WinningChecker.determineRank(6, false)).toBe('FIRST');
    });

    test('2등 - 5개 일치, 보너스 일치', () => {
      expect(WinningChecker.determineRank(5, true)).toBe('SECOND');
    });

    test('3등 - 5개 일치, 보너스 불일치', () => {
      expect(WinningChecker.determineRank(5, false)).toBe('THIRD');
    });

    test('4등 - 4개 일치', () => {
      expect(WinningChecker.determineRank(4, false)).toBe('FOURTH');
    });

    test('5등 - 3개 일치', () => {
      expect(WinningChecker.determineRank(3, false)).toBe('FIFTH');
    });

    test('낙첨 - 2개 이하 일치', () => {
      expect(WinningChecker.determineRank(2, false)).toBe(null);
      expect(WinningChecker.determineRank(1, false)).toBe(null);
      expect(WinningChecker.determineRank(0, false)).toBe(null);
    });
  });
});
