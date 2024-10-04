/* Função de desconto em porcentagem referente ao valor do produto
A funçã deve calcular o valor de desconto do produto e retornar o valor atual
do produto e o valor com desconto.
   Exemplo: O produto custa R$ 100,00 e terá um desconto de 5%
*/

// toFixed - Exibição de 2 casas decimais
const valores = calcularDesconto(100,5);

function calcularDesconto(valorProduto, desconto) {
   const valorFinalDesconto = valorProduto - (valorProduto*desconto/100);

   return{valorProduto,desconto,valorFinalDesconto};

}
console.log(`Valor do produto: ${valores.valorProduto.toFixed(2)}`);
console.log(`Desconto (%): ${valores.desconto}`);
console.log(`Valor final c/desconto: ${valores.valorFinalDesconto.toFixed(2)}`);
