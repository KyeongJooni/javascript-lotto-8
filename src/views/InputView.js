import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/lottoConstants.js';

class InputView {
  static async readPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
    return input;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
    return input;
  }

  static async readBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    return input;
  }
}

export default InputView;
