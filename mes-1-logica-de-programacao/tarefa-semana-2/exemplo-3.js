/* Função debug

Criando um função debug para observar o tipo de variaveis e os seus valores

[DEBUG] Valor: valorDaVariavel - Tipo: tipoVariavel
*/
// Método toUpperCase coloca o texto em maiusculo


function debug(variavel) {
  const tipo = (typeof variavel).toUpperCase();

  console.log(`[DEBUG] Valor:  ${variavel}  - Tipo: ${tipo}`);
}

debug("Guilherme");

debug(25);
