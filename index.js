// iteration

function fibs(num){
  let numArray = [];
  for (let i = 0; i < num; i++) {
    if ( i === 0 ) {
      numArray.push(i);
      let num2 = i+1;
      numArray.push(num2);
      numArray.push(i + num2);
    } else {
      let val = numArray[i+1] + numArray[i];
      numArray.push(val);
      if (val > 8 ) return numArray;
    };
  };
  return numArray;
};

console.log(fibs(8));

console.log('hi?')

//recursion

function fibsRec(num){
 if (num <= 2){
  return [0,1].slice(0,num);
 } else {
  let numberArray = fibsRec(num-1);
  numberArray.push(numberArray[numberArray.length-1] + numberArray[numberArray.length-2])
   return numberArray;
 }
}

console.log(fibsRec(8));


function mergeSort(arr){
//base 
  if (arr.length <= 1) return arr;
//recursion step
    let middle = Math.floor(arr.length/2);
  //console.log(middle);
    let arrLeft = arr.slice(0, middle);
    let arrRight = arr.slice(middle);
  console.log(arrLeft,arrRight)
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
  }

  function merge (arrLeft, arrRight){
    let sorted = [];
  
    while (arrLeft.length && arrRight.length) {
      if (arrLeft[0] < arrRight[0]) sorted.push(arrLeft.shift());
      else sorted.push(arrRight.shift());
    };
  
    return sorted.concat(arrLeft.slice().concat(arrRight.slice()));
  };
  
  const unsortedArray = [5,8,9,3,9,12,18,2,7,2,4];

console.log(mergeSort(unsortedArray));
