/* Pratica 2 - Criando 3 Funções para um email
Cada Função terá que receber um parametro
*/


// Função 1 - Dados do Comprador

const valoresComprador = dadosComprador("Guilherme Fagundes");

function dadosComprador(nome){
    const nomeComprador = nome;

    return {nomeComprador};
}

console.log(`Olá, ${valoresComprador.nomeComprador}\n`);


// Função 2 - Dados do Cliente

const valoresCliente = dadosCliente("Computador", "Felipe Tristante", "Rua Cosolação");

function dadosCliente(produto,nomecliente,enderecoEntrega){
    const nomeProduto = produto;
    const cliente = nomecliente;
    const entrega = enderecoEntrega;

    return{nomeProduto,cliente,entrega};
}

console.log(`Fizemos a sua entrega do produto ${valoresCliente.nomeProduto} no endereco ${valoresCliente.entrega} com sucesso!\n`);
console.log(`O seu produto foi recebido por: ${valoresCliente.cliente}\n`);
console.log(`Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.\n`);


// Função 3 - Dados de envio

const valoresEnvio = dadosDeEnvio("Enrique Duran");

function dadosDeEnvio(nomeRemetente){
    const remetente = nomeRemetente;

    return{remetente};
}

console.log(`Atenciosamente,\n${valoresEnvio.remetente}`);