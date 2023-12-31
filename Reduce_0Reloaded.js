Ahora que ya sabes cómo funciona el método reduce de arrays, podemos utilizarlo para crear un objeto con la frecuencia de cada elemento de un array, es decir, cuántas veces aparece.

Objeto de frecuencias
Para obtener un objeto de frecuencias de cada elemento de un array es necesario tener presente las siguientes consideraciones:

Establecer un objeto vacío como valor inicial del método reduce.
El objeto vacío también será nuestro acumulador.
Verificar si el elemento ya existe en nuestro objeto de frecuencias.
Si no existe, creamos la propiedad referente al elemento del array y le inicializamos en 1.
Si ya existe solamente debemos aumentar en una unidad la propiedad de nuestro objeto referente al elemento del array.
Finalmente, debes retornar el objeto dentro de la función del método reduce.
Por ejemplo, con el siguiente array llamado items:

const items = [5, 6, 7, 6, 5, 7, 7, 8]
El objeto de frecuencias será el siguiente:

{
    5: 2,
    6: 3,
    7: 2,
    8: 1,
}
Utilizando el método reduce para crear un objeto de frecuencias
Una vez entendido la entrada y salida del algoritmo, entonces el código será utilizado de la siguiente manera:

const frecuencias = items.reduce((objeto, elemento) => {
    if (!objeto[elemento]){
        objeto[elemento] = 1
    }else{
        objeto[elemento] = objeto[elemento] + 1
    }
    
    return objeto
}, {})
De esta manera obtendrás el objeto de frecuencias. Puedes utilizar este algoritmo para contar elementos de cualquier array.