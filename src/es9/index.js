// ADVANCED DESTRUCTURING
const obj = {
    name: 'Jesus',
    age: 23,
    country: 'VE'
}

let { name, ...all } = obj;
console.log(name, all);


// STRUCTURING
const obj1 = {
    name: 'Jesus',
    age: 23,
}

const obj2 = {
    sex: 'MALE'
}

let objFinall = {
    country: 'VE',
    ...obj1,
    ...obj2
};
console.log(objFinall)


//FINALLY
try { }
catch { }
finally { }


// REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(day, month, year);
console.log(match)