// Pratica 4 : Convertendo de milhas para quilometros
// Utilizando Funcao

// Adiciomado os valores dentro da variaveis 
const distanciaMilhasLuaTerra = 238900;
const quilometrosEmMilhas = 1.6093; 

// Realizando a funcao
function valorConversaoMilhas(fatorConversao){    
    fatorConversao = distanciaMilhasLuaTerra * quilometrosEmMilhas; // Calculo utilizando as variaveis
    return fatorConversao; // Retornando o valor
}

//Exibindo os valores 
console.log("Distancia em milhas: "+ distanciaMilhasLuaTerra);
console.log("Valor de 1 milha em km: "+quilometrosEmMilhas);
console.log("Conversao de Milha/KM: "+ valorConversaoMilhas());  




