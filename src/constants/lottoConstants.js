const LOTTO = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBERS_COUNT: 6,
  PRICE: 1000,
});

const PRIZE = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

const WINNING_CONDITION = Object.freeze({
  FIRST: { match: 6, bonus: false },
  SECOND: { match: 5, bonus: true },
  THIRD: { match: 5, bonus: false },
  FOURTH: { match: 4, bonus: false },
  FIFTH: { match: 3, bonus: false },
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_LOTTO_NUMBERS_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATE_LOTTO_NUMBERS: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  INVALID_PURCHASE_AMOUNT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  INVALID_PURCHASE_AMOUNT_TYPE: '[ERROR] 구입 금액은 숫자여야 합니다.',
  INVALID_WINNING_NUMBERS_FORMAT: '[ERROR] 당첨 번호는 쉼표로 구분된 숫자여야 합니다.',
  INVALID_BONUS_NUMBER_DUPLICATE: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  INVALID_BONUS_NUMBER_TYPE: '[ERROR] 보너스 번호는 숫자여야 합니다.',
});

const INPUT_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.',
});

const OUTPUT_MESSAGES = Object.freeze({
  PURCHASE_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  STATISTICS_HEADER: '\n당첨 통계\n---',
  TOTAL_PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

const RANK_INFO = Object.freeze({
  FIRST: { message: '6개 일치', prize: PRIZE.FIRST },
  SECOND: { message: '5개 일치, 보너스 볼 일치', prize: PRIZE.SECOND },
  THIRD: { message: '5개 일치', prize: PRIZE.THIRD },
  FOURTH: { message: '4개 일치', prize: PRIZE.FOURTH },
  FIFTH: { message: '3개 일치', prize: PRIZE.FIFTH },
});

export {
  LOTTO,
  PRIZE,
  WINNING_CONDITION,
  ERROR_MESSAGES,
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  RANK_INFO,
};
