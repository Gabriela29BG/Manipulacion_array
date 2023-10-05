/*El método map consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback) y es inmutable.

La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro array. Las posibilidades son infinitas.

Este método recibe dos argumentos:

La función que itera y transforma cada elemento del array (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.*/

let otherArray = array.map(function(), thisArg)

/*La función, que recibe como argumento el método map, utiliza tres parámetros:
El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.*/

const other = array.map(function(element, index, array))

/*Diferencia entre la estructura for y el método map
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que transforme cada elemento de un array en el doble de sí mismo.

Si utilizamos la estructura For, necesitaremos un array adicional vacío y utilizarlo con el método push para agregar los elementos transformados. El método push es mutable.*/

const numbers = [1,2,3,4,5]
const newNumbers = []

for(let i=0; i< numbers.length; i++){
    const number = numbers[i]
    newNumbers.push(number*2)
}

console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]

Con el método map, solo debemos establecer la función que indique la transformación para cada elemento.

const numbers = [1,2,3,4,5]
const newNumbers = numbers.map( function(number){
    return number * 2
})
// o 
const newNumbers = numbers.map(number => number * 2)

console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]

/*Recuerda siempre retornar un valor en la función callback del método.

Diferencia entre forEach y map
La principal diferencia entre estos dos es que forEach solamente itera cada elemento, mientras que map itera y transforma cada elemento en un nuevo array.

¿Pero también se pueden transformar los elementos con forEach? Sí, sin embargo, necesitas agregar cada elemento en cada iteración a un array nuevo, caso contrario puedes mutar el array original.*/