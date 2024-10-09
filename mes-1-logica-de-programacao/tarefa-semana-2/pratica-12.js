const diaSemana= (nDia)=>{
    const dia = nDia;

    switch (dia){
        case  1:
            return(console.log(`Segunda-feira`));
        
        case  2:
            return(console.log(`Terça-Feira`));

        case 3:
            return(console.log(`Quarta-Feira`));

        case 4:
            return(console.log(`Quinta-Feira`));

        case 5:
            return(console.log(`Sexta-feira`));

        case 6:
            return(console.log(`Sábado`));

        case 7:
            return(console.log(`Domingo`));

            default:
                return(console.log(`O número ${dia} não é válido para dia de semana`));

    }
}

const valoresDia = diaSemana(23);