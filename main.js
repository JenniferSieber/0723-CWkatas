// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/602db3215c22df000e8544f0/train/javascript
function twoArePositive(a,b,c) {
  return [...arguments].filter(num => num > 0).length === 2;
}

console.log(twoArePositive(2, 4, -3));
console.log(twoArePositive(0, -4, -3));

// KATA 2 7kyu
// https://www.codewars.com/kata/5592fc599a7f40adac0000a8/train/javascript
const sum = matrix => matrix.reduce((sum, line, i) => sum + line[i] + line[matrix.length-i-1], 0);

console.log(sum([[1,2,3], [4,5,6], [7,8,9]]));

// KATA 3 7kyu
//https://www.codewars.com/kata/57e2dd0bec7d247e5600013a/train/javascript
function unflatten(arr) {
  let newarr = [];
  while (arr.length) {
    newarr.push(arr[0] < 3 ? arr.shift() : arr.splice(0, arr[0]));
  }
  return newarr;
}

console.log(unflatten([3, 5, 2, 1 ]));

// KATA 4 7kyu
// https://www.codewars.com/kata/5a438bc1e1ce0e129100005a
function unusualLexOrder(arr) {
  let reverse = arr.map(str => {
    return str.split('').reverse().join('');
  });
  
  return reverse.sort().map(word => {
    return word.split('').reverse().join('');
  });
}

console.log(unusualLexOrder(["nigeb","ta","eht","gninnigeb"]));

// KATA 5 7kyu
// https://www.codewars.com/kata/59b0a6da44a4b7080300008a/train/javascript

function to24hourtime(hour, minute, period) {
  if (period === 'pm' && hour !== 12) {
    hour += 12;
  }
  if (period === 'am' && hour === 12) {
    hour = 0;
  }
  const formatHour = hour.toString().padStart(2, '0');
  const formatMinute = minute.toString().padStart(2, '0');

  return formatHour + formatMinute;
}

console.log(to24hourtime(6, 30, "am"));
console.log(to24hourtime(6, 30, "pm"));
console.log(to24hourtime(1,  0, "am"));
console.log(to24hourtime(12,  0, "am"));
console.log(to24hourtime(12,  0, "pm"));


