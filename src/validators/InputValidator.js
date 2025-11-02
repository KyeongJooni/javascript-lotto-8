import { LOTTO, ERROR_MESSAGES } from '../constants/lottoConstants.js';

class InputValidator {
  static validatePurchaseAmount(input) {
    const amount = Number(input);

    if (Number.isNaN(amount)) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT_TYPE);
    }

    if (amount < LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }

    if (amount % LOTTO.PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }

    return amount;
  }
}

export default InputValidator;
