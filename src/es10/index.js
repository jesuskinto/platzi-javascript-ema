// ARRAY PROTOTYPE FLAT
// aplanador de arreglos
let list = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]]
console.log(list);
console.log(list.flat());
console.log(list.flat(2));


// ARRAY PROTOTYPE FLATMAP
// aplanador y mapeador de arreglos
var arr1 = [1, 2, 3, 4];
arr1.map(x => [x * 2]);
arr1.flatMap(x => [x * 2]);


// TRIM START
let string = '      HELLO';
console.log(string.trimStart());
// TRIM END
let string2 = 'HELLO      ';
console.log(string2.trimEnd());


// TRY AND CACTH WITHOUT error
// es7
try { }
catch (error) { console.log(error) }
// es10
try { }
catch { console.log(error) }


// ENTRIES TO OBJECTS
let entries = [['nombre', 'jesus'], ['edad', 22]]
obj = Object.fromEntries(entries)
console.log(entries)
console.log(obj)


// DESCRIPTION IN SIMBOL
let s = Symbol('Esta es la descripcion del simbolo')
console.log(s.description);