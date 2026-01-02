function SLN(array) {
    let largest = array[0],
        result=largest;
    if(array.length < 2) return undefined; 
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if(largest < element){
            result = largest;
            largest = element;
        }
    }
    return result
}
let secondLargestNumber = SLN([-1, -10]);
console.log(secondLargestNumber);