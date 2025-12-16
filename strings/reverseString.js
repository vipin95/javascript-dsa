let word = "hello";
let result1 = "";
let array =[1,3,4,5,9,67];
for (let index = word.length-1; index >= 0 ; index--) {
    const element = word[index];
    result1 +=element;
}
console.log(result1);