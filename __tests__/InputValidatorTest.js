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

  describe('당첨 번호 검증', () => {
    test('정상적인 당첨 번호가 입력되면 숫자 배열로 반환한다.', () => {
      expect(InputValidator.validateWinningNumbers('1,2,3,4,5,6')).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    });

    test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('1,2,3,4,5,a');
      }).toThrow('[ERROR]');
    });

    test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('1,2,3,4,5');
      }).toThrow('[ERROR]');
    });

    test('당첨 번호가 1보다 작으면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('0,1,2,3,4,5');
      }).toThrow('[ERROR]');
    });

    test('당첨 번호가 45보다 크면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('1,2,3,4,5,46');
      }).toThrow('[ERROR]');
    });

    test('당첨 번호에 중복이 있으면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers('1,2,3,4,5,5');
      }).toThrow('[ERROR]');
    });

    test('공백이 포함된 당첨 번호도 정상적으로 처리한다.', () => {
      expect(
        InputValidator.validateWinningNumbers(' 1 , 2 , 3 , 4 , 5 , 6 ')
      ).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
