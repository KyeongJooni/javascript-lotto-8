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

  static validateWinningNumbers(input) {
    const numbers = this.#parseNumbers(input);
    this.#validateNumbersCount(numbers);
    this.#validateNumbersRange(numbers);
    this.#validateNumbersDuplication(numbers);
    return numbers;
  }

  static #parseNumbers(input) {
    const trimmed = input.trim();
    const parts = trimmed.split(',');
    const numbers = parts.map((part) => Number(part.trim()));

    if (numbers.some((num) => Number.isNaN(num))) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT);
    }

    return numbers;
  }

  static #validateNumbersCount(numbers) {
    if (numbers.length !== LOTTO.NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_COUNT);
    }
  }

  static #validateNumbersRange(numbers) {
    const hasInvalidRange = numbers.some(
      (number) => number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER
    );
    if (hasInvalidRange) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
    }
  }

  static #validateNumbersDuplication(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBERS);
    }
  }

  static validateBonusNumber(input, winningNumbers) {
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

export default InputValidator;
