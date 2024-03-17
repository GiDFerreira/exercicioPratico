class Aluno{
    constructor(nome, login, RA){
        this.nome = nome;
        this.login = login;
        this.RA = RA;
    }
}

class Turma extends Aluno{
    #codigo;
    #nota;
    constructor(codigo, nota, nome, login, RA){
        super(nome, login, RA);
        this.#codigo =codigo;
        this.#nota = nota;
    }
    aprovado(){
        if(this.#nota >= 7){
            return true;
        } else {
            return false;
        }
    }

}

class TurmaPresencial extends Turma{
    #frequencia;
    constructor(frequencia, codigo, nota, nome ,login, RA){
        super(codigo, nota, nome, login, RA);
        this.#frequencia = frequencia;
    }
    aprovadoFrequencia(){
        if (this.#frequencia >= 8){
            return true;
        } else{
            return false;
        }
    }
}

module.exports = {
    Aluno,
    Turma,
    TurmaPresencial
};