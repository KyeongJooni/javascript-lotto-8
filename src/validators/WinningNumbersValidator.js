import { LOTTO, ERROR_MESSAGES } from '../constants/lottoConstants.js';

class WinningNumbersValidator {
  static validate(input) {
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
}

export default WinningNumbersValidator;
