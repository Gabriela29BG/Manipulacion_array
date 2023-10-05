El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

Este procedimiento recibe los mismos argumentos que el método map.

const strings = ["Nunca pares", "de Aprender"]

strings.map(string => string.split(" ")) 
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]

strings.flatMap(string => string.split(" ")) 
// [ 'Nunca', 'pares', 'de', 'Aprender' ]
const numbers = [1, 2, 3, 4]

numbers.map(number => [number * 2]) 
// [[2], [4], [6], [8]]

numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]
Cuidado con el método flatMap, primero realiza el map y luego el flat.

const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number