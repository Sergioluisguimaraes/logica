var user = require('readline-sync'); 
var resultadoDoUsuario = user.question("Insira um número: ");
console.log("O usuário inseriu : " + resultadoDoUsuario);
if (numero < 16 ) {
    console.log("Não pode votar")
} else if (idade > 18) {
    console.log("Deve votar")
}