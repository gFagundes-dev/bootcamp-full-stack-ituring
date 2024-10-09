/* Função que mostre se o numero é par ou impar 
 
Lembrete: Utilizando o operador resto % para descobrir se o número é par ou ímpar.
 */


const indNumeros=(numero)=>{
    const n = numero;

  if (n % 2 == 0){
    console.log(`Numero Par`);
    }
  else{ 
    console.log(`Numero Impar`);
 }

return {n};

}

const numeros = indNumeros(5);
