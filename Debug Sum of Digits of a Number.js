/*
Description:
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/

function getSumOfDigits(int) {
  let sum = 0;
  let d =  int.toString();
  for(let i=0; i<d.length; i++) {
    sum += Number(d[i]);
  }
  return sum;
}
