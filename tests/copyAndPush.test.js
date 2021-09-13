// import

describe('copyAndPush', () => {
  it('makes copy of array and adds to the end of it', () => {
    const numbers = [1, 2, 3];
    // return [1, 2, 3, 4];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
});
