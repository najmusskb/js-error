/*  01.get an array 

     02- for every elements of an array do somethings 
     03-store the result in an array 
     04.return the result  array 







  */


// const numbers = [10, 20, 30, 40, 50, 60];
// const output = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);





// now for the function 
const numbers = [10, 20, 30, 40, 50, 60];
function GetDoubles(numbers) {

    const output = [];
    for (const number of numbers) {
        const doubled = number * 2;
        output.push(doubled);
    }
    return output
}
const result = GetDoubles(numbers);
console.log(result);






// map oeration 
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]





const numbersss = [1, 4, 9];
const roots = numbersss.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]