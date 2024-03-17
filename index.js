const {Aluno, Turma, TurmaPresencial} = require('./classes');

const http = require('http');

let aluno = new Aluno('Giovanna Dias Ferreira', 'A2477971', '2477971');
let turma = new Turma('as64c','8.9', 'Giovanna Dias Ferreira', 'A2477971', '2477971');
let turmaPresencial = new TurmaPresencial('9', 'as64c', '8.9', 'Giovanna Dias Ferreira', 'A2477971', '2477971');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'aplication/json');
    res.end(JSON.stringify({
        "Aluno": aluno,
        "Turma": turma,
        "TurmaPresencial": turmaPresencial,
        "Aprovado": turma.aprovado(),
        "Frequencia": turmaPresencial.aprovadoFrequencia()
    }));
}).listen(3001, ()=>{
    console.log(" 3001 ");
});