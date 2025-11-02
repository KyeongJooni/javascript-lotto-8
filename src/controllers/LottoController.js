import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import InputValidator from '../validators/InputValidator.js';
import LottoMachine from '../services/LottoMachine.js';
import WinningStatistics from '../services/WinningStatistics.js';

class LottoController {
  async run() {
    const purchaseAmount = await this.#getPurchaseAmount();
    const lottos = this.#purchaseLottos(purchaseAmount);
    OutputView.printLottos(lottos);

    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);

    this.#showResults(lottos, winningNumbers, bonusNumber, purchaseAmount);
  }

  async #getPurchaseAmount() {
    return this.#retryOnError(async () => {
      const input = await InputView.readPurchaseAmount();
      return InputValidator.validatePurchaseAmount(input);
    });
  }

  #purchaseLottos(purchaseAmount) {
    const count = LottoMachine.calculateLottoCount(purchaseAmount);
    return LottoMachine.generateLottos(count);
  }

  async #getWinningNumbers() {
    return this.#retryOnError(async () => {
      const input = await InputView.readWinningNumbers();
      return InputValidator.validateWinningNumbers(input);
    });
  }

  async #getBonusNumber(winningNumbers) {
    return this.#retryOnError(async () => {
      const input = await InputView.readBonusNumber();
      return InputValidator.validateBonusNumber(input, winningNumbers);
    });
  }

  #showResults(lottos, winningNumbers, bonusNumber, purchaseAmount) {
    const statistics = WinningStatistics.calculateStatistics(
      lottos,
      winningNumbers,
      bonusNumber
    );
    const profitRate = WinningStatistics.calculateProfitRate(
      statistics,
      purchaseAmount
    );
    OutputView.printStatistics(statistics, profitRate);
  }

  async #retryOnError(callback) {
    try {
      return await callback();
    } catch (error) {
      Console.print(error.message);
      return await this.#retryOnError(callback);
    }
  }
}

export default LottoController;
