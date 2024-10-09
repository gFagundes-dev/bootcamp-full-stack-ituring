/*Passando o parametro na função e realizando a condição dentro da função
- Pegando o ano atual automaticamente = new Date().getfullYear()
*/


// Por padrão se tivesse um input eu não declaro as const dentro da variavel
const verificaAcesso=(nome,anoNascimento)=>{
    const nomeAcesso = nome;
    const idade = new Date().getFullYear() - anoNascimento;

    if (idade>=18){
        console.log(`Pode acessar o site!`);
    } 
    else{
       console.log(`Acesso proibido!`);
    }
    
    return{nomeAcesso,idade};
}

const dadosAcesso = verificaAcesso(`Guilherme Fagundes`,2000);

console.log(`Nome de Acesso: ${dadosAcesso.nomeAcesso}`);
console.log(`Idade: ${dadosAcesso.idade}`);


