let numbers = [5 , 3 ,8 ,1 , 2];
function addNumber(array , number){
    array.push(number);
}

function removeNumber(array , number){
    const index = array.indexOf(number);
    if(index!== -1){
        array.splice(index , 1);
    }
}

function sortNumbers(array){
    return array.sort((a,b)=> a-b);
}
function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
function calculateAvg(array){
    if(array.length == 0) return 0;
    const addition =  calculateSum(array)
    return addition/array.length;
}
console.log("Initial array: ", numbers);

addNumber(numbers , 4)
console.log("After adding 4: ", numbers);

removeNumber(numbers , 3)
console.log("After removing 3: ", numbers);

const sortedarray =  sortNumbers(numbers)
console.log("Sorted Array: ", sortedarray);

const add = calculateSum(numbers)
console.log("Sum of numbers: ", add);

const avg = calculateAvg(numbers)
console.log("Average of numbers: ", avg);