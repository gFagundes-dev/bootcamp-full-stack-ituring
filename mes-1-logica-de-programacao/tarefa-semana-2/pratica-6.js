/* Pratica 6 - Funções de parametros e retornando valores
Utilizando a aula pratica-4.js, mas com o conceito
arrow funtions

Lembrete: em  arrow funtion a declaração da função deve ser realizada entre a exibição 
*/



const calcularDesconto = (valorProduto,desconto) => {
   const valorAtual = valorProduto;
   const valorDesconto = desconto;
   const calculoDeDesconto = valorProduto - (valorProduto*desconto/100);
   
   return valorAtual,valorDesconto,calculoDeDesconto;
  // return {valorAtual,valorDesconto,calculoDeDesconto};
};

const valorDeDesconto = calcularDesconto(1000,25);

console.log(`valor orig: `+calcularDesconto(1000,25));
//console.log(`desconto `+calcularDesconto(1000,25).valorDesconto);
//console.log(`valor final: `+calcularDesconto(1000,25).calculoDeDesconto);


//console.log(`Valor Original do produto: ${valorDeDesconto.valorAtual.toFixed(2)}`);
//console.log(`Desconto (%): ${valorDeDesconto.valorDesconto}`);
//console.log(`Valor final a pagar ${valorDeDesconto.calculoDeDesconto.toFixed(2)}`);

