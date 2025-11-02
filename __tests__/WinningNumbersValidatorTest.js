import WinningNumbersValidator from '../src/validators/WinningNumbersValidator.js';

describe('WinningNumbersValidator 테스트', () => {
  test('정상적인 당첨 번호가 입력되면 숫자 배열로 반환한다.', () => {
    expect(WinningNumbersValidator.validate('1,2,3,4,5,6')).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      WinningNumbersValidator.validate('1,2,3,4,5,a');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      WinningNumbersValidator.validate('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      WinningNumbersValidator.validate('0,1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      WinningNumbersValidator.validate('1,2,3,4,5,46');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복이 있으면 예외가 발생한다.', () => {
    expect(() => {
      WinningNumbersValidator.validate('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test('공백이 포함된 당첨 번호도 정상적으로 처리한다.', () => {
    expect(
      WinningNumbersValidator.validate(' 1 , 2 , 3 , 4 , 5 , 6 ')
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
