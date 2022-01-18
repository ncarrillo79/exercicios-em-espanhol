/*Dibujar un cuadrado hueco com asteriscos

Ejemplos:
cuadrado(4)

// Devuelve:

****
****  
****  
****

Como hacerlo
-Funcion lado para crear el lado de arriba y abajo del cuadrado
-Funcion cuadrado que haga los lados y el hueco del cuadrado
-Bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y bajo
-Bucle para pintar los espacios, menos dos para equilibrar con el asterisco de izq. y der.
-Ir concatenando en una variable cada línea del cuadrado
-Mostrar el cuadrado.

*/

function lado(numero) {
  let lado = "";

  for (let i = 0; i < numero; i++) {
    lado += "*";
  }
  return lado;
}

function cuadrado(numero) {
  let dibujo = lado(numero) + "\n";

  let contenido = "";

  for (let i = 0; i < numero - 2; i++) {
    //tambien puede ser así:for(let i=2;numero;i++)
    contenido = "*";
    for (let x = 0; x < numero-2; x++) {
      contenido += " ";
    }
    contenido += "*";

    dibujo += contenido + "\n";
  }

  dibujo += lado(numero);

  return dibujo;
}

console.log(cuadrado(4));
