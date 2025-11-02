import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/lottoConstants.js';
import Lotto from '../Lotto.js';

class LottoMachine {
  static generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(this.#generateLotto());
    }
    return lottos;
  }

  static #generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBERS_COUNT
    );
    return new Lotto(numbers);
  }

  static calculateLottoCount(amount) {
    return amount / LOTTO.PRICE;
  }
}

export default LottoMachine;
