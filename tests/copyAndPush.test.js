import copyAndPush from '../functions/copyAndPush.js';

describe('copyAndPush', () => {
  it('adds the number 4 to end of array', () => {
    const numbersArr = [1, 2, 3];
    expect(copyAndPush(numbersArr, 4)).toEqual([1, 2, 3, 4]);
  });
  it('returns array with appended random num', () => {
    const numbersArr = [1, 2, 3];
    const randomNumber = Math.floor(Math.random() * 10);
    expect(copyAndPush(numbersArr, randomNumber)).toEqual([
      1,
      2,
      3,
      randomNumber,
    ]);
    expect(numbersArr).toEqual([1, 2, 3]);
    console.log('hi', numbersArr);
  });
});
