var user = require('readline-sync'); 
var resultadoDoUsuario = user.question("Insira seu ano de nascimento: ");
console.log("O usuário inseriu : " + resultadoDoUsuario);
var idade = 2020 - resultadoDoUsuario 
if (idade < 16 ) {
    console.log("Não pode votar")
} else if (idade > 18) {
    console.log("Deve votar")
}