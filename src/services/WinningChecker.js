import { WINNING_CONDITION } from '../constants/lottoConstants.js';

class WinningChecker {
  static countMatchingNumbers(lotto, winningNumbers) {
    const lottoNumbers = lotto.getNumbers();
    return lottoNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  static checkBonusMatch(lotto, bonusNumber) {
    const lottoNumbers = lotto.getNumbers();
    return lottoNumbers.includes(bonusNumber);
  }

  static determineRank(matchCount, hasBonusMatch) {
    if (this.#isFirstPlace(matchCount)) {
      return 'FIRST';
    }
    if (this.#isSecondPlace(matchCount, hasBonusMatch)) {
      return 'SECOND';
    }
    if (this.#isThirdPlace(matchCount)) {
      return 'THIRD';
    }
    if (this.#isFourthPlace(matchCount)) {
      return 'FOURTH';
    }
    if (this.#isFifthPlace(matchCount)) {
      return 'FIFTH';
    }
    return null;
  }

  static #isFirstPlace(matchCount) {
    return matchCount === WINNING_CONDITION.FIRST.match;
  }

  static #isSecondPlace(matchCount, hasBonusMatch) {
    return (
      matchCount === WINNING_CONDITION.SECOND.match &&
      hasBonusMatch === WINNING_CONDITION.SECOND.bonus
    );
  }

  static #isThirdPlace(matchCount) {
    return matchCount === WINNING_CONDITION.THIRD.match;
  }

  static #isFourthPlace(matchCount) {
    return matchCount === WINNING_CONDITION.FOURTH.match;
  }

  static #isFifthPlace(matchCount) {
    return matchCount === WINNING_CONDITION.FIFTH.match;
  }
}

export default WinningChecker;
