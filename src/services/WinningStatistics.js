import { PRIZE } from '../constants/lottoConstants.js';
import WinningChecker from './WinningChecker.js';

class WinningStatistics {
  static calculateStatistics(lottos, winningNumbers, bonusNumber) {
    const statistics = this.#initializeStatistics();

    lottos.forEach((lotto) => {
      const matchCount = WinningChecker.countMatchingNumbers(
        lotto,
        winningNumbers
      );
      const hasBonusMatch = WinningChecker.checkBonusMatch(lotto, bonusNumber);
      const rank = WinningChecker.determineRank(matchCount, hasBonusMatch);

      if (rank) {
        statistics[rank] += 1;
      }
    });

    return statistics;
  }

  static #initializeStatistics() {
    return {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };
  }

  static calculateProfitRate(statistics, purchaseAmount) {
    const totalPrize = this.#calculateTotalPrize(statistics);
    const rate = (totalPrize / purchaseAmount) * 100;
    return Math.round(rate * 100) / 100;
  }

  static #calculateTotalPrize(statistics) {
    return (
      statistics.FIRST * PRIZE.FIRST +
      statistics.SECOND * PRIZE.SECOND +
      statistics.THIRD * PRIZE.THIRD +
      statistics.FOURTH * PRIZE.FOURTH +
      statistics.FIFTH * PRIZE.FIFTH
    );
  }
}

export default WinningStatistics;
