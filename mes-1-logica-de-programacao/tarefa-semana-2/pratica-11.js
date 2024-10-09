
const coresRGB = (cor) =>{
    const cores = cor;
 
    switch (cores){
        case "vermelha":
            return(console.log(`rgb(255,0,0)`));
        
        case "laranja":
            return(console.log(`rgb(225,128,0)`));
        
        case "amarela":
            return(console.log(`rgb(255,255,0)`));

        case "verde":
            return(console.log(`rgb(,255,)`));

        case "azul claro":
            return(console.log(`rgb(0,0,255)`));

        case "rosa":
            return(console.log(`rgb(255,0,255)`));


            default:
                return(console.log(`rgb(255,255,255)`));
    }
}

const valoresCores=coresRGB('verde');