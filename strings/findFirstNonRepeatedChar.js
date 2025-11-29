// Find the first non-repeating character from a String

const UserInputString = "Iamvipinmavi";

function findTheChar(stringToOperate) {
    let result = null;
    outerLoop :for (let i = 0; i < stringToOperate.length-1; i++) {
        const elementLookingFor = stringToOperate[i];
        for (let j = i+1; j < stringToOperate.length; j++) {
            const machingFrom = stringToOperate[j];
            if(elementLookingFor.toUpperCase() == machingFrom.toUpperCase()){
                break;
            }else if( j ==  stringToOperate.length-1 ){
                result = elementLookingFor;
                break outerLoop;
            }
        }
    }
    return result;
}
let foundNonRepeatedChar = findTheChar(UserInputString);
console.log(foundNonRepeatedChar);