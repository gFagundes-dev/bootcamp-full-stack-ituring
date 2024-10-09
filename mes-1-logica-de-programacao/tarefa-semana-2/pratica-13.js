const funcaoMaior = (valor1,valor2)=>{
    const n1 = valor1;
    const n2 = valor2;

    // Valores iguais
    if(n1==n2){
        return(console.log(`Os valores são iguais: ${n1}`));
    }

    // Maior valor
    const maior = n1 > n2 ? n1 : n2;

    // Menor valor
    const menor = n1 < n2 ? n1 : n2;

    console.log(`O maior valor é de: ${maior}`);
    console.log(`O menor valor é de: ${menor}`);
    
    return(maior,menor);


}

const valor = funcaoMaior(175,25);





const imc=(peso,altura)=>{
    const kg = peso;
    const h = altura;

    // calculo IMC
    const calculoIMC = kg / (h*h);
   
    // Variavel que guarda o calculo
    const valor = calculoIMC;

    // Comparação do peso
    if(valor < 18.5){
        return(console.log(`Abaixo do peso - ${valor.toFixed(2)}kg`));
    }
    else if(valor >= 18.5 && valor < 25){
        return(console.log(`Peso normal - ${valor.toFixed(2)}kg`));
    }   
    else if(valor >= 25 && valor < 30){
        return(console.log(`Sobrepeso - ${valor.toFixed(2)}kg`));
    }
    else {
        return(console.log(`Obesidade - ${valor.toFixed(2)}kg`));
    }
}

const calcula = imc(60,1.70);


