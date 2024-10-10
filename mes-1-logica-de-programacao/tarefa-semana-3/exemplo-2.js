
/* Exibindo valores de 1 a N
** Sendo N = o parametor que o usuário passa
*/

let exibeNumerosde1AN=(valorN) =>{
   let i = 1;
   
   // Condição de valores inválidos ( negativos )
   if(n<0){
    return(`Valor inválido`)
   }

   // loop
   while(i <= valorN){
     console.log(i);

     i++;
   }
}

// Exibição no terminal
exibeNumerosde1AN(10);