import fetchQuotes from '../functions/fetchQuotes.js';

describe('fetchQuotes', () => {
  it('returns single quote from futramaAPI', async () => {
    const quotes = await fetchQuotes();

    expect(quotes).toEqual(
      expect.arrayContaining([
        {
          character: '',
          quote: '',
          image: '',
        },
      ])
    );
  });
});
