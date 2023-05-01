/*
Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(sen) {
    let count=0;
    var x = ['a', 'e', 'i', 'o', 'u'];
    for (let i of sen.toLowerCase()) {
        if (x.includes(i)) {
            count += 1;
        }
    }    
    return count;
}
