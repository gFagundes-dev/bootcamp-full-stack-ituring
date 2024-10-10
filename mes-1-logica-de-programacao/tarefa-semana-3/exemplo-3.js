/** Exibindo valores pares e impares de 1 a N 
 * Resto da divisao deve ser igual a 0
 * 
 * calculoPar = i % 2 == 0;
*/

let exibeImpar = (valorN)=>{
    let i = 1;

    console.log(`Valores Impares`)
    while(i<=valorN){
        if(i % 2 == 1){
            console.log(i);
        }
        i = i +1;
    }

}


let exibePares = (valorN) =>{
    // Contadora
    let i = 1;

    console.log(`Valores Pares:`);
    
    while (i<=valorN){
        // Condicao de verificação de números pares
        if (i % 2 == 0){
            console.log(i);
           }
            i = i + 1;
    }


}

exibeImpar(10);
exibePares(10);