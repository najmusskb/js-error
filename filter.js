

// for numbers with filter 


const numbers = [154, 58, 26, 478, 26, 475, 84, 1, 5];
const results = numbers.filter(num => num < 100);
console.log(results)


const numb = [154, 58, 26, 478, 26, 475, 84, 1, 5];
const results2 = numbers.filter(num => num > 100);
console.log(results2)




// for finding even numbers 
const even = [154, 58, 26, 478, 26, 475, 84, 1, 5];
const evennumbers = numbers.filter(num => num % 2 == 0);
console.log(evennumbers);





// for string 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length < 6);
console.log(result);



// for object 


const pdrts = [
    { id: 1, Name: 'laptop', price: 45000 },
    { id: 2, Name: 'mobile', price: 5000 },
    { id: 3, Name: 'tv', price: 51000 },
    { id: 4, Name: 'AC', price: 75000 }
];


const uperfotithousand = pdrts.filter(upper => upper.price > 70000);
const lowerfotithousand = pdrts.filter(upper => upper.price < 30000);
console.log(uperfotithousand);
console.log(lowerfotithousand);