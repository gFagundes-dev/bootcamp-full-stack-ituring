// Realizando a classificação
const classificacaoIMC = (classificao)=>{
     const imc = classificao;
     

     if(imc < 18.5){
        return(`Abaixo do peso`);
    }
     else if(imc > 18.5 && imc <= 25) {
        return (`Peso normal`);
    }
    else if (imc > 25 && imc <= 30){
        return (`Sobrepeso`);
    }
    else {
        return(`Obesidade`);
    }

}

// Realizando o calculo
const calculoIMC = (peso,altura)=>{
    const kg = peso;
    const h = altura;

    // Calculo
    const calculo = kg / (h*h);

    //Armazenado o valor
    const imc = calculo;

    return imc;
}

// Variavel que armazena o calculo
valores = calculoIMC(60,1.70);


// Exibição no terminal
console.log(`Resultado (IMC): ${valores.toFixed(2)}`);
console.log(classificacaoIMC(valores));
