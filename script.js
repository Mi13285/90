let capitals = function (word) {
  return word
    .split("")
    .map(function (item, i) {
      return item === item.toUpperCase() ? i : null;
    })
    .filter(function (x) {
      return x != null;
    });
};
console.log(capitals("CodEWaRs"));
