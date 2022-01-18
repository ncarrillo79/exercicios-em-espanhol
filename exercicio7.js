/*
Enunciado Ejercicio 7
Dados dos números, devolver cuantos números IMPARES hay entre ellos

Exemplos:
impares(1, 100) // Devuelve 49

Como hacerlo:
-Funcion que reciba los dos números
-Bucle numero 1 al número 2
-Condición, si el resto es distinto a cero, es impar 
-Aumentar en uno el contador
-Devolver el contador
*/

function contarImpares(numero1, numero2){
    let contador=0
    while(numero1<numero2){
        if(numero1%2 !==0) contador++

            numero1++
        
    
        
    }
    return contador
}

console.log(contarImpares(1,100))