const alunos = [
    {
        nome: "lucas",
        idade: 22,
    },
    {
        nome: "Luana",
        idade: 23,
    },
    {
        nome: "Lorenzo",
        idade: 8,
    },
    {
        nome: "Ethan",
        idade: 2
    }
];

const alunosFiltrados = alunos.filter(alunos => alunos.idade <= 18)
console.table(alunosFiltrados)

const idades = alunos.reduce((acc, alunos) =>{
    return acc + alunos.idade
}, 0);

const media = idades / alunos.length
console.log("total:", idades)
console.log(media)