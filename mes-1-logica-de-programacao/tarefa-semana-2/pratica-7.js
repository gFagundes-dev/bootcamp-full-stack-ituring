 /* Apresentação 
 
 */

const idiomas=(idioma)=>{
    const apresentacao=idioma;

    

 if(idioma == `es` || idioma == `espanhol`) {
    console.log(`Holla, Mundo!`);
 }
 else if (idioma === `en` || idioma == `english`){
    console.log(`Hello, World!`);
 }
 else if(idioma !== `pt` || idioma !==`portuguese`){
    console.log(`Olá, Mundo!`);
 }
 
 return{apresentacao};
}

//const dadosApresentacao = idiomas(`espanhol`);
console.log(idiomas());
//console.log(`Idioma informado: ${dadosApresentacao.apresentacao}`)

