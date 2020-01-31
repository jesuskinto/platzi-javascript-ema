const data = {
    frontend: 'Jesus',
    backend: 'Jose',
    desing: 'Juan',  //Training Comma
}

// ENTRIES
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// VALUES
const values = Object.values(data);
console.log(values);
console.log(values.length);


// PADING
console.log('Name:'.padEnd(12, '--------'))
console.log('LastName:'.padEnd(12, '--------'))


// ASYNC AWAIT
const myPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) setTimeout(() => resolve('Ok!'), 1000)
        else reject('Opsss!')
    })
}
// es6
myPromise()
    .then(res => console.log(res))
    .catch(err => console.error(err))

// es8
const foo = async () => {
    try {
        const res = await myPromise()
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
foo()