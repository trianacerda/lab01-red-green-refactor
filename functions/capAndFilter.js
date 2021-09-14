const capitalizeAndFilter = (arr) => {
  const newArr = arr.map((string) => string.toUpperCase());
  const filterArr = newArr.filter((string) => !string.startsWith('F'));

  return filterArr;
};

export default capitalizeAndFilter;
