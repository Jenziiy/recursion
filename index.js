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