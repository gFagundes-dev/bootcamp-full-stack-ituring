/* Criação de um numero aleatorio entre 0 e 10000 
lembrando que (a funcao sem parametro)
*/

function valorAleatorio(){
    const min = 0;
    const max = 10000;
    const calculoValor = Math.random()*(max-min)+1;
    
    return calculoValor;
}



console.log(`O número aleatório é de: `+valorAleatorio().toFixed());