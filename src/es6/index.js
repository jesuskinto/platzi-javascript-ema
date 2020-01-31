// LITERALS STRINGS
var text1 = 'Hellow';
var text2 = 'World'
// old
var message = text1 + '' + text2;
// ema6
var message2 = `${text1} ${text2}`;


// DESTRUCTURATION
const persona = {
    nombre: 'Jesus',
    apellido: 'Quinto'
}
// old
console.log(persona.nombre, persona.apellido);
// ema6
const { nombre, apellido } = persona;
console.log(nombre, apellido);


// SPREAD OPERATOR (OPERADOR DE PROPAGACION)
const team = ['Jesus', 'Jose'];
const team2 = ['Maria', 'Mario'];
// ema6
const superTeam = ['Pepe', 'Pablo', ...team, ...team2];


// LET (VARIABLE LOCAL)
// solo disponible dentro del bloque
// old
{
    var VariableGlobal = 2;
}
console.log(VariableGlobal);
// ema6
{
    let VariableLocal = 2;
    console.log(VariableLocal);
}


// MULTILINE
// old
let multiline1 = 'Hola mundo\nOtro parrafo';
console.log(multiline1)
// ema6
let multiline2 = `Hola mundo
Otro parrafo`;
console.log(multiline2);


// PARAMS IN OBJECTS
let name = 'jesus';
let age = 23;
// old
const obj = { name: name, age: age };
// ema6
const obj2 = { name, age };


// ANONYMOUS FUNCTIONS
const group = [
    { name: 'Jesus', edad: 11 },
    { name: 'Miguel', edad: 22 },
    { name: 'Quinto', edad: 13 }
];
// old
group.forEach(function (item) {
    console.log(item.name, item.edad);
})
// ema6
group.forEach((item) => console.log(item.name, item.edad));
const squart = num => num * num;
const aXb = (a, b) => a * b;


// PROMISE
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) resolve('Promise resolved')
        else reject('Promise rejected')
    })
}
helloPromise()
    .then(res => console.log(res))
    .then(() => console.log('hola mundo'))
    .catch(err => console.log(err));


// MODULES
import saludo from './mymodule';
saludo();


// CLASS
class Calc {
    constructor() { }
    sum = (n1, n2) => n1 + n2;
    subtraction = (n1, n2) => n1 * n2;
    squart = (n1) => n1 * n1;
}

const calculator = new Calc();
console.log(calculator.sum(2, 3));
console.log(calculator.subtraction(2, 3));
console.log(calculator.squart(2));

// FUNCTION GENETATOR
function* fibonacci() {
    var fn1 = 1;
    var fn2 = 1;
    while (true) {
        var actual = fn2;
        fn2 = fn1;
        fn1 = fn1 + actual;
        var reset = yield actual;
        if (reset) {
            fn1 = 1;
            fn2 = 1;
        }
    }
}

var secuencia = fibonacci();
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3
console.log(secuencia.next().value);     // 5
console.log(secuencia.next().value);     // 8
console.log(secuencia.next().value);     // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3