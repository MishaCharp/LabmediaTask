function splitTheBill(group) {
  var total = 0;
  var count = 0;
  for (var person in group) {
    total += group[person];
    count++;
  }
  var avg = total / count;
  var result = {};
  for (var person in group) {
    var diff = group[person] - avg;
    result[person] = Math.round(diff * 100) / 100;
  }
  return result;
}

function highAndLow(numbers) {
  const numArr = numbers.split(' ').map(Number);
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  return `${max} ${min}`;
}

function findOdd(arr) {
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (counts[num]) {
      counts[num]++;
    } 
    else {
      counts[num] = 1;
    }
    
  }

  for (let num in counts) {
    if (counts[num] % 2 === 1) {
      return parseInt(num);
    }
  }
}

function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return names[0] + ' likes this';
  } else if (names.length === 2) {
    return names[0] + ' and ' + names[1] + ' like this';
  } else if (names.length === 3) {
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  } else {
    return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}