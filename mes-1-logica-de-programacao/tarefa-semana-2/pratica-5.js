
/* Pratica 5 - Expressao de Funções
Funcões como variaveis
*/



let calculo = function(valorProduto,valorDesconto){
    return valorProduto-(valorProduto*valorDesconto/100);
};

console.log(`Valor de Desconto: `+calculo(1000,25).toFixed(2));

