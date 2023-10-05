/*El método everyes inmutable y consiste retornar un valor lógico verdadero si todos los elementos cumplen con la condición establecida en la función (callback).

Este método recibe dos argumentos:

La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.*/

array.every(function(), thisArg)
/*
La función, que recibe como argumento el método every, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.*/

array.every(function(element, index, array))

/*Diferencia entre la estructura for y el método every
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un array, todos los elementos son menores o iguales a 40.

Si utilizamos la estructura for, necesitaremos una variable de tipo booleana con el valor true e iterar hasta que una condición contraria al enunciado se cumpla. La palabra reservada break rompe el ciclo repetitivo.*/

const numbers = [1, 30, 41, 29, 10, 13]

let respuesta = true
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = false
        break
    }
}

console.log(respuesta) // false

/*Con el método every, solo debemos establecer la función que indique la condición a cumplir para cada elemento.*/

const numbers = [1, 30, 39, 29, 10, 13]

const respuesta = numbers.every(item => item < 40)
console.log(respuesta) // true