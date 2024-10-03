/*Função  que retorne um número inteiro aleatório.
Esse numero está aleatório deve estar entre 1 e 10.
*/

// Método Math.random retorna um numero aleatório entre 0 e 1 
// Método Math.floor transforma o numero em inteiro (de decimal para inteiro)

          // Função
function numeroAleatorio() {
  const min = 1;
  const max = 10;  
  const numero = Math.random()*(max-min)+min;
  
  return Math.floor(numero);
}


 // Exibindo na tela a Função
console.log("O numero inteiro é: "+numeroAleatorio());