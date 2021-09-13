import capitalizeAndFilter from '../functions/capAndFilter.js';

describe('capitalizeAndFilter', () => {
  it(
    'takes an array of strings--capitalize all strings and filter out any string that starts with the letter F/f.'
  );
  const randomArray = ['Frank', 'the', 'Ford', 'is', 'fun'];
  expect(capitalizeAndFilter(randomArray)).toEqual('THE', 'IS');
});
