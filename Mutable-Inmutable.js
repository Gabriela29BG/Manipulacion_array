/*Los conceptos de mutabilidad e inmutabilidad son muy importantes para los siguientes métodos de arrays. Existen métodos mutables que cambian el array original; e inmutables que devuelven un array diferente al original.

Referencias en memoria
En JavaScript, cada estructura está guardada en una referencia en memoria, por lo que si cambiamos un elemento en el array, también lo haremos en esa referencia. Al clonar arrays, se crea un nuevo array que tiene las mismas referencias en memoria que el original, por lo que si se realiza un cambio en el original, también cambiará en la copia.*/

const original = [1,2,3]
const copia = original
copia[0] = "Hola"

console.log(original) // [ 'Hola', 2, 3 ]

/*Diferencia entre mutabilidad e inmutabilidad
Con lo mencionado anteriormente, mutable es aquella acción que cambia el valor en la referencia en memoria del elemento del array original, provocando que cambien el original y la copia. Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original, provocando que el original siga igual.

La mutabilidad es más flexible y una buena opción si se requiere cambiar, actualizar o eliminar datos; pero esto puede ocasionar fallos o resultados erróneos en nuestra aplicación. La inmutabilidad es más exigente, te permite generar nuevas estructuras para manejarlas sin cambiar la original; pero esto puede provocar que la memoria colapse.

Por lo que, ¿cuál es mejor? La respuesta es ninguna, cada uno te permite manejar estructuras de datos, por ende es necesario identificar cuál forma es la adecuada a aplicar en un algoritmo.*/