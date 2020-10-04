
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) return [];
  return matrix.reduce((total, arr, index) => {
    if (index % 2 === 0){
      return total.concat(arr.sort((a, b) => a - b));
    } else {
      return total.concat(arr.sort((a, b) => b - a));
    }
  }, []);
}
