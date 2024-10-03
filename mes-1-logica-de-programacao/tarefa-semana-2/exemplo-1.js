/* Função sem  parametros e sem retorno

1) Função que horas são? 
Vamos criar uma função que moestre que quando chamada ela
mostra no console a seguinte mensagem: Olá, agoras são 08:37:42 PM
*/

function queHorasSao() {
    const horaAtual = new Date();
    const fatorHoras = horaAtual.toLocaleTimeString();    
    console.log("Olá, agora são "+fatorHoras);
}

queHorasSao();
queHorasSao();
queHorasSao();
queHorasSao();
queHorasSao();
