const filtrate = (arr: number[]) :number[] => {
    return arr.filter(num => num % 2 === 0)
}

const average = (arr: number[]) :number => {
    return [...arr].reduce((acc, curr) => acc + curr, 0) / arr.length
}

const sorting = (arr:string[]):string[] => {
    return [...arr].sort((a, b) => a.localeCompare(b))
}

const sumEven = (arr:number[]):number => {
    return [...arr].reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0)
}

const factorial = (num:number):number => {
    if (num < 0) throw new Error('Factorial is not defined for negative numbers');
    return num === 0 ? 1 : num * factorial(num - 1)
}

const sumAndMultiply = (arr:number[]): {sum:number, multiply:number} => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    const multiply = arr.reduce((acc, curr) => acc * curr, 1)
    return {sum, multiply}
}

const sqr = (arr:number[]):number[] => arr.map(num => num * num)

const arrLength = (arr:string[]):string[] => {
    return [...arr].sort((a, b) => a.length - b.length)
}

const wordsCount = (str:string):number => {
    return str.split(' ').length
}

const findNotEmpty = (arr:string[]):string => {
    return arr.find(str => str.length > 0) || ''
}

const isCapitalized = (str:string):boolean => {
    return str.split(' ').every(word =>
        word[0] === word[0].toUpperCase()
    );
}

const findSecondMax = (arr:number[]):number => {
    return [...arr].sort((a, b) => b - a)[1]
}

const findMaxEven = (arr:number[]):number => {
    return [...arr].sort((a, b) => b - a).find(num => num % 2 === 0) || 0
}

console.log('=== Testing functions ===\n');

const checkImmutability = <T>(fn: (arg: T[]) => any, input: T[]): boolean => {
    const inputCopy = [...input];
    fn(input);
    return JSON.stringify(input) === JSON.stringify(inputCopy);
};

console.log('1. Filtrate (Even Numbers)');
const input1 = [1, 2, 3, 4, 5];
const output1 = filtrate(input1);
console.log('   Input:   ', input1);
console.log('   Output:  ', output1);
console.log('   Immutable:', checkImmutability(filtrate, input1) ? '✅ YES' : '❌ NO');
console.log('');

console.log('2. Average');
const input2 = [10, 20, 30];
const output2 = average(input2);
console.log('   Input:   ', input2);
console.log('   Output:  ', output2);
console.log('   Immutable:', checkImmutability(average, input2) ? '✅ YES' : '❌ NO');
console.log('');

console.log('3. Sorting (Alphabetical)');
const input3 = ['banana', 'apple', 'cherry'];
const output3 = sorting(input3);
console.log('   Input:   ', input3);
console.log('   Output:  ', output3);
console.log('   Immutable:', checkImmutability(sorting, input3) ? '✅ YES' : '❌ NO');
console.log('');

console.log('4. Sum even numbers');
const input4 = [1, 2, 3, 4, 5];
const output4 = sumEven(input4);
console.log('   Input:   ', input4);
console.log('   Output:  ', output4);
console.log('   Immutable:', checkImmutability(sumEven, input4) ? '✅ YES' : '❌ NO');
console.log('');

console.log('5. Factorial');
const input5 = 5;
const output5 = factorial(input5);
console.log('   Input:   ', input5);
console.log('   Output:  ', output5);
console.log('   Immutable: ✅ YES');
console.log('');

console.log('6. Sum and multiply');
const input6 = [1, 2, 3, 4];
const output6 = sumAndMultiply(input6);
console.log('   Input:   ', input6);
console.log('   Output:  ', output6);
console.log('   Immutable:', checkImmutability(sumAndMultiply, input6) ? '✅ YES' : '❌ NO');
console.log('');

console.log('7. Square');
const input7 = [1, 2, 3, 4];
const output7 = sqr(input7);
console.log('   Input:   ', input7);
console.log('   Output:  ', output7);
console.log('   Immutable:', checkImmutability(sqr, input7) ? '✅ YES' : '❌ NO');
console.log('');

console.log('8. Arr length (Sort by length)');
const input8 = ['aaa', 'a', 'aaaaa'];
const output8 = arrLength(input8);
console.log('   Input:   ', input8);
console.log('   Output:  ', output8);
console.log('   Immutable:', checkImmutability(arrLength, input8) ? '✅ YES' : '❌ NO');
console.log('');

console.log('9. Words count');
const input9 = 'Hello World Test';
const output9 = wordsCount(input9);
console.log('   Input:   ', input9);
console.log('   Output:  ', output9);
console.log('   Immutable: ✅ YES ');
console.log('');

console.log('10. Find not empty');
const input10 = ['', '', 'Hello', 'World'];
const output10 = findNotEmpty(input10);
console.log('   Input:   ', input10);
console.log('   Output:  ', output10);
console.log('   Immutable:', checkImmutability(findNotEmpty, input10) ? '✅ YES' : '❌ NO');
console.log('');

console.log('11. Is capitalized');
const input11 = 'Hello World';
const output11 = isCapitalized(input11);
console.log('   Input:   ', input11);
console.log('   Output:  ', output11);
console.log('   Immutable: ✅ YES');
console.log('');

console.log('12. Find second max');
const input12 = [1, 5, 3, 9, 2];
const output12 = findSecondMax(input12);
console.log('   Input:   ', input12);
console.log('   Output:  ', output12);
console.log('   Immutable:', checkImmutability(findSecondMax, input12) ? '✅ YES' : '❌ NO');
console.log('');

console.log('13. Find max even');
const input13 = [1, 2, 3, 4, 5, 6];
const output13 = findMaxEven(input13);
console.log('   Input:   ', input13);
console.log('   Output:  ', output13);
console.log('   Immutable:', checkImmutability(findMaxEven, input13) ? '✅ YES' : '❌ NO');
console.log('');

console.log('=== Testing complete ===');