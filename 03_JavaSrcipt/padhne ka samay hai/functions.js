// use rest parameter to accept any number of scores and return the total.

function getScore(...scores) {
  let total = 0;
  scores.forEach(function (val) {
    total = total + val;
  });
  return total;
}

console.log(getScore(45, 65, 87, 24, 35, 12, 2));
