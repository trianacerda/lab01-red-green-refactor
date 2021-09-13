import getName from './getName';

describe('getName', () => {
  it('returns name of the property in obj', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };

    expect(getName(spot)).toEqual('spot');
  });
  it('returns name of the name of char in obj', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

    expect(getName(character)).toEqual('Aang');
  });
});
