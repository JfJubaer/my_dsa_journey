const array = [5, 2, 9, 1, 5, 6];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      console.log(array);
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);

//alternative way to sort

const array11 = [5, 2, 9, 1, 5, 6];

const sortedArray = array11.sort((a, b) => a - b);

console.log(sortedArray);
