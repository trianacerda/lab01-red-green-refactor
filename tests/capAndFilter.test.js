import capitalizeAndFilter from '../functions/capAndFilter.js';

describe('capitalizeAndFilter', () => {
  it('takes arr and caps + filter it without "F/f"', () => {
    const randomArray = ['Frank', 'the', 'Ford', 'is', 'fun'];
    expect(capitalizeAndFilter(randomArray)).toEqual(['THE', 'IS']);
  });
});
