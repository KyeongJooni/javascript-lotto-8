import BonusNumberValidator from '../src/validators/BonusNumberValidator.js';

describe('BonusNumberValidator 테스트', () => {
  test('정상적인 보너스 번호가 입력되면 숫자로 반환한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(BonusNumberValidator.validate('7', winningNumbers)).toBe(7);
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      BonusNumberValidator.validate('a', winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1보다 작으면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      BonusNumberValidator.validate('0', winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 45보다 크면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      BonusNumberValidator.validate('46', winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      BonusNumberValidator.validate('6', winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('공백이 포함된 보너스 번호도 정상적으로 처리한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(BonusNumberValidator.validate(' 7 ', winningNumbers)).toBe(7);
  });
});
