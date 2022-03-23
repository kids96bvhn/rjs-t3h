// Bài 1
const array = [0, 5, 4, 2, 8];
let result = 0;
array.forEach(e => {
    result += e;
});
console.log('Output1: ' + result);

// Bài 2
const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 }
];
let names = [];
person.forEach(e => {
    names.push(e.name);
})
console.log('Output2: ' + names);

//Bài 3
const arr1 = ['John', 'Pete', 'Mary']
const arr2 = ['Mary', 'Henry', 'Harry']

const arrMerge = arr1.concat(arr2);
let uniqueArr = [...new Set(arrMerge)];
console.log('Output3: ' + uniqueArr);