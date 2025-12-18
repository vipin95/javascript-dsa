const array = [1,3,1,5,5,6,7,8,6,4,3,11];
let resultArray = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(resultArray.indexOf(element) < 0){
        resultArray.push(element)
    }
}
console.log(resultArray);