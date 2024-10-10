/* Tabuada utilizando while
**  
*/


let tabuada = (tabuadaN,valorX)=>{

  // Contador
  let i = 0;

  //loop
  while(i<=valorX){

    // calculo
    let calculo = tabuadaN * i;
      console.log(`${tabuadaN} x ${i} = ${calculo}`);
        i= i + 1;
    }

}

tabuada(2, 10);