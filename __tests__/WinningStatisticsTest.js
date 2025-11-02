import WinningStatistics from '../src/services/WinningStatistics.js';
import Lotto from '../src/Lotto.js';

describe('WinningStatistics 테스트', () => {
  describe('당첨 통계 집계', () => {
    test('여러 로또의 당첨 통계를 집계한다.', () => {
      const lottos = [
        new Lotto([1, 2, 3, 4, 5, 6]), // 1등 - 6개 일치
        new Lotto([1, 2, 3, 4, 5, 7]), // 2등 - 5개 일치, 보너스 일치
        new Lotto([1, 2, 3, 4, 5, 8]), // 3등 - 5개 일치
        new Lotto([1, 2, 3, 4, 9, 10]), // 4등 - 4개 일치
        new Lotto([1, 2, 3, 11, 12, 13]), // 5등 - 3개 일치
        new Lotto([20, 21, 22, 23, 24, 25]), // 낙첨
      ];
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      const statistics = WinningStatistics.calculateStatistics(
        lottos,
        winningNumbers,
        bonusNumber
      );

      expect(statistics.FIRST).toBe(1);
      expect(statistics.SECOND).toBe(1);
      expect(statistics.THIRD).toBe(1);
      expect(statistics.FOURTH).toBe(1);
      expect(statistics.FIFTH).toBe(1);
    });

    test('당첨이 없는 경우 모든 통계가 0이다.', () => {
      const lottos = [
        new Lotto([20, 21, 22, 23, 24, 25]),
        new Lotto([30, 31, 32, 33, 34, 35]),
      ];
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      const statistics = WinningStatistics.calculateStatistics(
        lottos,
        winningNumbers,
        bonusNumber
      );

      expect(statistics.FIRST).toBe(0);
      expect(statistics.SECOND).toBe(0);
      expect(statistics.THIRD).toBe(0);
      expect(statistics.FOURTH).toBe(0);
      expect(statistics.FIFTH).toBe(0);
    });
  });

  describe('수익률 계산', () => {
    test('수익률을 소수점 둘째자리까지 반올림하여 계산한다.', () => {
      const statistics = {
        FIRST: 0,
        SECOND: 0,
        THIRD: 1,
        FOURTH: 1,
        FIFTH: 1,
      };
      const purchaseAmount = 8000;

      const profitRate = WinningStatistics.calculateProfitRate(
        statistics,
        purchaseAmount
      );

      expect(profitRate).toBe(19437.5);
    });

    test('당첨이 없는 경우 수익률은 0이다.', () => {
      const statistics = {
        FIRST: 0,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 0,
        FIFTH: 0,
      };
      const purchaseAmount = 8000;

      const profitRate = WinningStatistics.calculateProfitRate(
        statistics,
        purchaseAmount
      );

      expect(profitRate).toBe(0);
    });

    test('1등 당첨 시 수익률을 계산한다.', () => {
      const statistics = {
        FIRST: 1,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 0,
        FIFTH: 0,
      };
      const purchaseAmount = 8000;

      const profitRate = WinningStatistics.calculateProfitRate(
        statistics,
        purchaseAmount
      );

      expect(profitRate).toBe(25000000);
    });
  });
});
