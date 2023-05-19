export const getUniqueObjectsInArray = (array1, array2) => {
  const mergedArray = [];

  array1.forEach((obj) => {
    mergedArray.push(obj);
  });

  array2.forEach((obj) => {
    const isDuplicate = mergedArray.some((item) => item.id === obj.id);
    if (!isDuplicate) {
      mergedArray.push(obj);
    }
  });

  return mergedArray;
};
