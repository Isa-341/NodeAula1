//index.js - seu primeiro script executado no Node

//1) Guarde o nome do curso em uma constante
const curso = "Node.js e APIs"

//2) Crie uma fução que monta a saudação
function saudacao(nome) {
    return `Boas-vindas ao curso de ${curso}, ${nome}!`
}

//3) Mostre o resultado
console.log(saudacao("Turma"));