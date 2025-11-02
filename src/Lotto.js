import { LOTTO, ERROR_MESSAGES } from './constants/lottoConstants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateCount(numbers);
    this.#validateRange(numbers);
    this.#validateDuplication(numbers);
  }

  #validateCount(numbers) {
    if (numbers.length !== LOTTO.NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_COUNT);
    }
  }

  #validateRange(numbers) {
    const hasInvalidRange = numbers.some(
      (number) => number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER
    );
    if (hasInvalidRange) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
    }
  }

  #validateDuplication(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBERS);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
