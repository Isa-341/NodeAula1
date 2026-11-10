const aluno1 = {
    nome: 'Alice',
    prova1: 8,
    prova2: 6,
    trabalho: 10
};

const aluno2 = {
    nome:'Matheus',
    prova1: 9,
    prova2: 10,
    trabalho: 3
};

const aluno3 = {
    nome: 'Joana',
    prova1: 10,
    prova2: 7,
    trabalho: 5  
};

function media(n1,n2,n3){
    return (n1+n2+n3) / 3
}

const mediaAl1 = media(aluno1.prova1, aluno1.prova2, aluno1.trabalho)
const mediaAl2 = media(aluno2.prova1, aluno2.prova2, aluno2.trabalho)
const mediaAl3 = media(aluno3.prova1, aluno3.prova2, aluno3.trabalho)

if(mediaAl1>= 6){
    situacao = 'Aprovado'
} else if(mediaAl1 < 6 && mediaAl1 >= 4){
    situacao = 'Em recuperação'
} else {
    situacao = 'Reprovado'
}

if(mediaAl2>= 6){
    situacao = 'Aprovado'
} else if(mediaAl2 < 6 && mediaAl2 >= 4){
    situacao = 'Em recuperação'
} else {
    situacao = 'Reprovado'
}

if(mediaAl3>= 6){
    situacao = 'Aprovado'
} else if(mediaAl3 < 6 && mediaAl3 >= 4){
    situacao = 'Em recuperação'
} else {
    situacao = 'Reprovado'
}

console.log(`${aluno1.nome} - ${mediaAl1.toFixed(1)} - ${situacao}`)
console.log(`${aluno2.nome} - ${mediaAl2.toFixed(1)} - ${situacao}`)
console.log(`${aluno3.nome} - ${mediaAl3.toFixed(1)} - ${situacao}`)