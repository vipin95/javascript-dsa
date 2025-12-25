function FC(arr) {
    let hash = {};
    for(let i=0 ; i< arr.length ; ++i){
        let element = arr[i];
        hash[element] = (hash[element] || 0 )+1;
    }
    return hash;
}
console.log(FC([1, 2, 2, 3, 3, 3]));
console.log(FC([4, 4, 4, 5, 5, 6]));
console.log(FC([7, 8, 7, 8, 8, 9]));
console.log(FC([10, 10, 11, 11, 11, 12]));
console.log(FC([1, 1, 2, 2, 2, 3, 3]));
console.log(FC([5, 6, 6, 6, 7, 7, 8]));