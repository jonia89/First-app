'use strict'
const promptSync = require('prompt-sync');
const prompt = promptSync();
const fruitList = [
    'ananas',
    'appelssiini',
    'banaani',
    'greippi',
    'kiivi',
    'kirsikka',
    'kookospähkinä',
    'mandariini',
    'mango',
    'meloni',
    'nektariini',
    'omena',
    'oliivi',
    'persikka',
    'päärynä',
    'sitruuna',
    'tomaatti',
    'vesimeloni',
    'viinirypäle'
];

let cart = [];
let fruit;
let price;


for (let i = 0; i < fruitList.length; i++) {
    fruit = prompt('Syötä hedelmä, tai e lopettaaksesi: ')
    if (fruit === 'e') {
        break;
    }
    if (fruitList.includes(fruit.toLowerCase())) {
    } else {
        console.log(`${fruit}ei ole hedelmä!`)
        fruit = prompt('Kokeile uudestaan: ')
    }


    price = prompt(`Anna hedelmän ${fruit} hinta: `)
    cart.push({ fruit, price });

};
cart.sort(function (a, b) {
    return parseFloat(b.price) - parseFloat(a.price);
});


let sum = 0;
for (let i = 0; i < cart.length; i++) {
    sum += Number(price);
}

console.log(cart);

console.log(`Kokonaishinta: ${sum}€`);
if (sum > 1000) {
    console.log(`Luottoraja ylitetty ${sum - 1000} eurolla!`);
}
