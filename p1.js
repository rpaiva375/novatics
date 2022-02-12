function removeDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i+1]) {
            array.splice(i, 1); 
            i--;
        }
    }
    return array;
}
  
function ordering_list(array){
    if(array.length <= 1){
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (const el of array.slice(0, array.length - 1)){
        el < pivot ? leftArray.push(el) : rightArray.push(el);
    }

    return [...ordering_list(leftArray), pivot, ...ordering_list(rightArray)];

}
  
// const array1 = [8, 5, 10, 5, 2, 4, 4, 3];
const array2 = [8, 5, 10, 5, 2, 4, 4, 3, 9, 10, 23, 0, 12, 23, 55, 87];
let ordered = ordering_list(array1);
// removeDuplicate(ordered);
console.log(removeDuplicate(ordered));