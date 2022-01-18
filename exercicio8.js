/*Enunciado Ejercicio 8

Dado un número entero, inviertelo y devuelve de nuevo el entero

Ejemplos:
invertirNumero(67  //Devuelve 76)

como hacerlo
-Funcion que reciba el numero
-Convertir el número en una String
-Crear un array para cada letra
-Darle la vuelta
-Unir el array en un string
-Convertir el string en un entero
*/

function invertirNumero(numero){
    let invertido=parseInt( 
                    numero
                    .toString()
                    .split('')
                    .reverse()
                    .join(''))*Math.sign(numero)


    return invertido
                   
}

console.log(invertirNumero(-1256))

