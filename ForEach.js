/*El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces.

Este método recibe dos argumentos:

La función que itera cada elemento del array (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.*/

array.forEach(function(), thisArg)

/*La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.*/

array.forEach(function(element o variable asignada al item))

/*Diferencia entre la estructura for y el método forEach
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.*/

const letters=['a','b','c']

// Utilizando la estructura repetitiva for
for(let index=0; index<letters.length; index++){
    const element=letters[index]
    console.log('for',element)
}

// Utilizando el método forEach
letters.forEach(item => console.log('forEach',item))

/*Mostrar elementos de un array al usuario
Ahora que ya conoces cómo funciona el método forEach, utilízalo para agregar elementos al HTML y así que el usuario lo mire.

Por ejemplo, en un archivo HTML agrega una etiqueta div con un id app, que nos servirá para agregar nuestros elementos.*/

<div id="app"></div>

/* crea la lógica en un archivo de JavaScript.*/

const products = [
  { title: 'Burger', price: 121 },
  { title: 'Pizza', price: 20 },
  { title: 'Soda', price: 5 },
]

const app = document.getElementById('app')

products.forEach(product => {
  app.innerHTML += `<li>${product.title} -$ ${product.price}</li>`
})

/*Y listo, en pantalla aparecerán los elementos del array products con su título y precio. Revisa el resultado en este codi.link.

Ejercicio utilizando la función forEach
Crea una lista de tareas, a partir de un array que contenga el título y el estado (completado o no) y muéstralos en un archivo HTML. Puedes utilizar un input de tipo checkbox para indicar el estado de la tarea. ¡Comparte tu trabajo en la sección de aportes!*/