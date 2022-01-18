//For In em objetos
let user = {
  nome: "norma",
  idade: 51,
  salario: 10.0,
  infoUmaFuncao: function () {
    console.log("info");
  },
};

console.log("==============================================");

console.log("duas formas iguais como acessa a propriedade nome do objeto:");
console.log(user.nome);
console.log(user["nome"]);

console.log("==============================================");

//ForIn em Objetos
for (let prop in user) {
  //let prop retorna as propriedades(chave o índice) do objeto
  console.log("as propriedades(chaves) são:", prop);
}

console.log("==============================================");

for (let valores in user) {
  //let valores asi:  user[valores] retorna o valor das propiedades do objeto
  console.log("os valores das propriedades são:", user[valores]);
}

console.log("==============================================");
//For in en arrays


let aparelhos = ["celular", "fone de ouvido", "microfone"];
for (let indice in aparelhos) {
  // retorna o indice de cada um dos elementos do array
  console.log("o indice de cada um dos elementos do array são:", indice);
}

console.log("==============================================");
for (let elemento in aparelhos) {
  // retorna cada um dos elementos do array
  console.log("os elementos contenidos neste array são:", aparelhos[elemento]);
}

console.log("==============================================");

//For in  para arrays

let names = ["alexandre", "pedro", "aline"];

for (let name in names) {  // retorna o índice de cada um dos elementos do array
  console.log(name);
}

console.log("==============================================");

//For of  para arrays
let amigos = ["alexandre", "pedro", "aline"];

for (let amigo of amigos) {  // retorna cada um dos elementos do array
  console.log(amigo);
}

