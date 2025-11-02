import { Console } from '@woowacourse/mission-utils';
import {
  OUTPUT_MESSAGES,
  RANK_INFO,
} from '../constants/lottoConstants.js';

class OutputView {
  static printLottos(lottos) {
    Console.print(OUTPUT_MESSAGES.PURCHASE_COUNT(lottos.length));
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().sort((a, b) => a - b);
      Console.print(`[${numbers.join(', ')}]`);
    });
  }

  static printStatistics(statistics, profitRate) {
    Console.print(OUTPUT_MESSAGES.STATISTICS_HEADER);
    this.#printRank('FIFTH', statistics.FIFTH);
    this.#printRank('FOURTH', statistics.FOURTH);
    this.#printRank('THIRD', statistics.THIRD);
    this.#printRank('SECOND', statistics.SECOND);
    this.#printRank('FIRST', statistics.FIRST);
    Console.print(OUTPUT_MESSAGES.TOTAL_PROFIT_RATE(profitRate));
  }

  static #printRank(rank, count) {
    const rankInfo = RANK_INFO[rank];
    const formattedPrize = rankInfo.prize.toLocaleString();
    Console.print(`${rankInfo.message} (${formattedPrize}원) - ${count}개`);
  }
}

export default OutputView;
