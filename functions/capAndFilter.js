const capitalizeAndFilter = (arr) => {
  for (const string of arr) !string.startsWith('f' || 'F');
  return arr;
};

export default capitalizeAndFilter;
