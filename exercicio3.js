// function contarOcurrencias(cadena, subcadena) {
//   let contadorOcurrencias = 0;
//   let posicion = 0;

//   while ((posicion = cadena.indexOf(subcadena, posicion)) !== -1) {
//     ++contadorOcurrencias;
//     posicion += subcadena.length;

//   }
//   return contadorOcurrencias;
// }

// let cadena = "norma josefina carrillo fajardo";

// console.log(contarOcurrencias(cadena, "ar"));

function coincidencias(frase, busqueda) {
  let texto_limpio = frase.toLowerCase().replace(/[!,.-]/gi, "");
  let resultado = 0;

  if (texto_limpio.includes(busqueda)) {
    let palabras = texto_limpio.split(" ");

    console.log();
   
    let mapa = {};
   
    for (let palabra of palabras) {
        console.log("este es el mapa pasando por el array de palabras", mapa);
      if (mapa[palabra]) {
        mapa[palabra]++;
        
      } else {
        mapa[palabra] = 1;
      }
    }

    console.log(palabras)
    console.log(mapa)

    resultado = mapa[busqueda];

  } else {
    resultado = 0;
  }
  return resultado;
}

console.log(
  "Numero de coincidencias en la frase: ",
  coincidencias("Hola, soy norma norma carrillo", "norma")
);
