const flat = function (array, transformedArray) {
  array.forEach(function (element, index) {
    if (index === array.length) {
      return transformedArray;
    }
    if (Array.isArray(element)) {
      return flat(element, transformedArray);
    }
    transformedArray.push(element);
  })
  return transformedArray;
};

flat([1, [2,3], [[5]]], []);
