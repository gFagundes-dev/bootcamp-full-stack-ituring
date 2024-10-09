const numeroMaiorMenor =(valor1,valor2)=>{
    const n1 = valor1;
    const n2 = valor2;

    if(n1 > n2) {
      return (console.log(`O número.1: ${n1} é MAIOR que o número.2: ${n2}`));
    }
    if(n1==n2){
      return (console.log(`Os números obtem os mesmos valores n1:${n1} - n2:${n2}`))
    }
      return (console.log(`O número.2: ${n2} é MAIOR que o número.1: ${n1}`));
}

const valores = numeroMaiorMenor(5000,5000.6);
