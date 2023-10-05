El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

Este método recibe dos argumentos:

La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
array.some(function(), thisArg)
La función, que recibe como argumento el método some, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
array.some(function(element, index, array))
Diferencia entre la estructura for y el método some
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un array existe al menos un número par.

Si utilizamos la estructura for, necesitaremos una variable de tipo booleana con el valor false e iterar hasta que la condición se cumpla. La palabra reservada break rompe el ciclo repetitivo.

const numbers = [1, 2, 3, 5]

let respuesta = false
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element % 2 === 0) {
        respuesta = true
        break
    }
}

console.log(respuesta) // true
Con el método some solo debemos establecer la función que indique la condición a cumplir para cada elemento.

const numbers = [1, 2, 3, 5]

const respuesta = numbers.some(item => item % 2 === 0)
console.log(respuesta) // true