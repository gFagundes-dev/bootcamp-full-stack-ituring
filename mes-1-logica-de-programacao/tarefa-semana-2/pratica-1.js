// Pratica 1 - Criando a Função de Hello World!

/*1 - Funcão: A função recebe o parametro(mensagem) que é defenida
na variavel global, o parametro é recebido e retorna seu valor e no final
exibe o seu argumento.
*/
const mensagem = apresentacaoPessoal("Hello, World");

function apresentacaoPessoal(mensagem) {
    const apresentacao = mensagem;
    
    return apresentacao;
 }

console.log(`A mensagem é: `+mensagem);



/*2 - Funcão: A função recebe a variavel local à função, retorna o 
valor local e exibe a função com valores - 
*/
function apresentacao(){
   const mensagem = "Hello, World";
   
   return mensagem;
}

console.log(apresentacao());


