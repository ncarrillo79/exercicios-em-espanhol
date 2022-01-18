/*Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje, solo estructuras de control

Ejemplos:
invertir('hola'  Devuelve 'aloh')

Como hacerlo
-Funcion con parametro 'texto'
-Crear una variable para guardar la variable invertida
-Bucle que recorra el string y guarde los caracteres en la variable

*/


function invertir(texto){
    let invertido=''
    for(letra of texto){
        invertido=letra+invertido

    }
   
   return invertido
}

console.log(invertir("hola"))


//Otro método

function invierte (frase){
    return frase.split('').reverse().join('')

}

console.log(invierte("norma"))