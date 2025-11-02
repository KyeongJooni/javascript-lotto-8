import { LOTTO, ERROR_MESSAGES } from '../constants/lottoConstants.js';

class BonusNumberValidator {
  static validate(input, winningNumbers) {
    const bonusNumber = this.#parseBonusNumber(input);
    this.#validateBonusNumberRange(bonusNumber);
    this.#validateBonusNumberDuplication(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  static #parseBonusNumber(input) {
    const bonusNumber = Number(input.trim());

    if (Number.isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_TYPE);
    }

    return bonusNumber;
  }

  static #validateBonusNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO.MIN_NUMBER || bonusNumber > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
    }
  }

  static #validateBonusNumberDuplication(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_DUPLICATE);
    }
  }
}

export default BonusNumberValidator;
