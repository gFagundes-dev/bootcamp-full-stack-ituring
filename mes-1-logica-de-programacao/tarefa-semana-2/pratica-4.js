/* Pratica 4 - Funções de parametros e retornando valores
Desconto de produto
*/

const valoresDeDesconto = calcularDesconto(1000,25);

function calcularDesconto(valorProduto,desconto){
   const valorAtual = valorProduto;
   const valorDesconto = desconto;
   const calculoDeDesconto = valorProduto - (valorProduto*desconto/100);

   return{valorAtual,valorDesconto,calculoDeDesconto};
}

console.log(`Valor Original do Produto: ${valoresDeDesconto.valorAtual.toFixed(2)}`);
console.log(`Desconto(%): ${valoresDeDesconto.valorDesconto}`);
console.log(`Valor final a pagar: ${valoresDeDesconto.calculoDeDesconto.toFixed(2)}`);