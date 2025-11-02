import InputValidator from '../src/validators/InputValidator.js';

describe('InputValidator 테스트', () => {
  describe('구입 금액 검증', () => {
    test('정상적인 구입 금액이 입력되면 숫자로 변환하여 반환한다.', () => {
      expect(InputValidator.validatePurchaseAmount('8000')).toBe(8000);
    });

    test('구입 금액이 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('abc');
      }).toThrow('[ERROR]');
    });

    test('구입 금액이 1000원 미만이면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('500');
      }).toThrow('[ERROR]');
    });

    test('구입 금액이 1000원으로 나누어떨어지지 않으면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('1500');
      }).toThrow('[ERROR]');
    });
  });
});
