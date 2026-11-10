//decidindo a situação de um aluno;

const nota1 = 6.0;
const nota2 = 7.0;
const media = (nota1 + nota2) / 2;

//O que é estrutura de decisão (condicionais if/else, else if)

let situacao;

if(media >= 7){
    situacao = "Aprovado"
} else if(media >= 5){
    situacao = "Recuperação"
} else {
    situacao = 'Reprovado'
}

console.log(`Média ${media.toFixed(1)}: ${situacao}`)