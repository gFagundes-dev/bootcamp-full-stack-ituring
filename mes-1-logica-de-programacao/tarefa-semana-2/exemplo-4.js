/* Função de desconto em porcentagem referente ao valor do produto
A funçã deve calcular o valor de desconto do produto e retornar o valor atual
do produto e o valor com desconto.
   Exemplo: O produto custa R$ 100,00 e terá um desconto de 5%
*/

// toFixed - Exibição de 2 casas decimais







const valores = calcularDesconto(100,5);

function calcularDesconto(valorProduto, desconto) {
   const fatorDesconto = valorProduto - (valorProduto*desconto/100);

   return{ valorAtual: valorProduto.toFixed(2), // 2 casas decimais
           DescontoAplicado: desconto,
           valorFinal: fatorDesconto.toFixed(2) // 2 casas decimais
   };

}

console.log("Valor original: "+valores.valorAtual);
console.log("Desconto (%): "+valores.DescontoAplicado);
console.log("Valor final a pagar: "+valores.valorFinal);
