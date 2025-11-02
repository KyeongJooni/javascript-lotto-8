import { Random } from '@woowacourse/mission-utils';
import LottoMachine from '../src/services/LottoMachine.js';

describe('LottoMachine 테스트', () => {
  describe('로또 개수 계산', () => {
    test('구입 금액에 따른 로또 개수를 계산한다.', () => {
      expect(LottoMachine.calculateLottoCount(8000)).toBe(8);
      expect(LottoMachine.calculateLottoCount(1000)).toBe(1);
      expect(LottoMachine.calculateLottoCount(14000)).toBe(14);
    });
  });

  describe('로또 발행', () => {
    test('요청한 개수만큼 로또를 생성한다.', () => {
      const lottos = LottoMachine.generateLottos(3);
      expect(lottos.length).toBe(3);
    });

    test('생성된 각 로또는 6개의 번호를 가진다.', () => {
      Random.pickUniqueNumbersInRange = jest.fn(() => [1, 2, 3, 4, 5, 6]);

      const lottos = LottoMachine.generateLottos(2);
      lottos.forEach((lotto) => {
        expect(lotto.getNumbers().length).toBe(6);
      });
    });

    test('생성된 로또 번호는 1부터 45 사이의 값이다.', () => {
      const lottos = LottoMachine.generateLottos(5);
      lottos.forEach((lotto) => {
        const numbers = lotto.getNumbers();
        numbers.forEach((number) => {
          expect(number).toBeGreaterThanOrEqual(1);
          expect(number).toBeLessThanOrEqual(45);
        });
      });
    });
  });
});
