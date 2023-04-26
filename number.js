function findSecondLowestAndGreatest(numbers) {
  numbers.sort(function(a, b) {
    return a - b;
  });

  var secondLowest = numbers[1];
  var secondGreatest = numbers[numbers.length - 2];

  return [secondLowest, secondGreatest];
}

var numbers = [1, 2, 3, 4, 5];
var result = findSecondLowestAndGreatest(numbers);
console.log(result[0] + "," + result[1])