// In this algorithm we are finding the largest Number in a Array

const userInputArray = [3, 9, 1, 12, 7];

function findNumber(arrayForIterate) {
    return arrayForIterate.reduce((result, value) =>{
        if(result < value) result = value;
        return result;
    })
}
console.log("The largest number is : ",findNumber(userInputArray));