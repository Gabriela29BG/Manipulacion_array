El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos:

El elemento a comparar.
El índice inicial desde donde comparar hasta el último elemento.
Índices positivos y negativos
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.

[0,1,2,3, ...., lenght-1]

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.

[-lenght, ...,  -3, -2, -1]

Diferencia entre la estructura for y el método includes
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un array existe un elemento en específico.

Si utilizamos la estructura for, necesitaremos una variable de tipo booleana con el valor false e iterar hasta que encuentre el elemento específico. La palabra reservada break rompe el ciclo repetitivo.

const pets = [ "cat", "dog", "bat" ]

let includeInArray = false
for (let i = 0; i < pets.length; i++){
    const item = pets[i]
    if (item === "cat"){
        includeInArray = true
        break
    }
}

console.log(includeInArray) // true
Ejemplos utilizando el método includes
El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.

//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true
// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true