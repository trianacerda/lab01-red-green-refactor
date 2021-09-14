const capitalizeAndFilter = (arr) => {
  const newArr = [];
  for (const string of arr) {
    const upString = string.toUpperCase();
    if (!upString.startsWith('F')) {
      newArr.push(upString);
    }
  }
  return newArr;
};

export default capitalizeAndFilter;
