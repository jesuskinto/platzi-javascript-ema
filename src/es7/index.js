// SEARCH IN ARRAY
const elements = [1, 2, 3, 4];
// old
if (elements.find(e => e === 4))
    console.log('Si contiene el 4')
// es7
if (elements.includes(4))
    console.log('Si contiene el 4')


// POWER
const base = 2;
const expo = 3;
const res = base ** expo;
console.log(res);