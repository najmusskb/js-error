// const numbers = [12, 36, 25, 48, 97, 25, 4];
// const half = numbers.map(n => n / 2);
// const third = numbers.map(x => x / 3);
// console.log(half)
// console.log(third)





// for strings

// const friends = ['najmus sakib', 'sumon fakir', 'shakil', 'fakirrrr'];
// const firstLeters = friends.map(fds => fds[0]);
// // console.log(firstLeters)
// const namelength = friends.map(friends => friends.length);
// console.log(namelength)




// for object 



const products = [
    { id: 1, Name: 'laptop', price: 45000 },
    { id: 2, Name: 'mobile', price: 5000 },
    { id: 3, Name: 'tv', price: 51000 },
    { id: 4, Name: 'AC', price: 75000 }
];


// const items = products.map(product => console.log(product.Name));
const items = products.map(product => product.Name);
const prices = products.map(product => product.price);
const id = products.map(product => product.id);

console.log(items);
console.log(prices);
console.log(id);












