

const numeroMaiorMenor = (valor1,valor2,valor3)=>{
    const n1 = valor1;
    const n2 = valor2;
    const n3 = valor3;

    if (n1 > n2 && n1 > n3){
        return(console.log(`O numero 1 é o MAIOR: ${n1}`));
    }
    else if(n2 > n1 && n2 > n3){
        return(console.log(`O número 2 é o MAIOR: ${n2}`));
    }
    else if(n1==n2 && n1==n3 && n2==n1 && n2==n3){
        return(console.log(`Os valores são iguais: ${n1},${n2},${n3}`));
    }
        return(console.log(`O número 3 é o MAIOR: ${n3}`));
}

const valores = numeroMaiorMenor(20,90,120);