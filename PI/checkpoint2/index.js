// passo1
// tive ajuda do Renan para fazer o exercicio , meritos dele ! 
  class Aluno {
    constructor(nome, quantidade_Faltas, notas) {
        this.nome = nome;
        this.quantidade_Faltas = quantidade_Faltas;
        this.notas = notas;
    }
    // passo2
    calcularMedia() {
        let media = this.notas.reduce((nota, i) => {
            return nota + i;
        });
        return media / this.notas.length;
    }
    // passo3
    faltas() {
        return (this.quantidade_Faltas += 1);
    }
}
// passo4
let curso = {
    nomeCurso: 'piscologia',
    notaAprovacao: 7,
    faltaMaxima: 3,
    lista_Dos_Estudantes: [],
    listaResultado: [],
    adicionar_Aluno(nome, falta, notas) {
        let aluno = new Aluno(nome, falta, notas);
        this.lista_Dos_Estudantes.push(aluno);
    },
  situacao_Aluno(nome) {
        this.lista_Dos_Estudantes.forEach((aluno) => {
            if (aluno.nome == nome) {
                let mediaParcial = aluno.notas.reduce((n, i) => {
                    return n + i;
                });
                let mediaFinal = mediaParcial / aluno.notas.length;
                if (aluno.quantidadeFaltas == this.faltaMaxima) {
                    let notaFinalComAcrescimo =
                        this.notaAprovacao + (this.notaAprovacao / 100) * 10;
                    if (mediaFinal >= notaFinalComAcrescimo) {
                        console.log(`TRUE`);
                    } else {
                        console.log(`FALSE`);
                    }
                } else {
                    if (mediaFinal >= this.notaAprovacao) {
                        console.log(`TRUE`);
                    } else {
                        console.log(`FALSE`);
                    }
                }
            }
        });
    },
    gerarLista() {
        this.lista_Dos_Estudantes.forEach((aluno) => {
            let mediaParcial = aluno.notas.reduce((n, i) => {
                return n + i;
            });
            let mediaFinal = mediaParcial / aluno.notas.length;
            if (aluno.quantidadeFaltas == this.faltaMaxima) {
                let notaFinalComAcrescimo =
                    this.notaAprovacao + (this.notaAprovacao / 100) * 10;
                if (mediaFinal >= notaFinalComAcrescimo) {
                    this.listaResultado.push(`TRUE`);
                } else {
                    this.listaResultado.push(`FALSE`);
                }
            } else {
                if (mediaFinal >= this.notaAprovacao) {
                    this.listaResultado.push(`TRUE`);
                } else {
                    this.listaResultado.push(`FALSE`);
                }
            }
        });
    },
};
curso.adicionar_Aluno('Priscila', 1, [7, 5, 7, 7]);
curso.adicionar_Aluno('Marta', 2, [9, 7, 8, 10]);
curso.adicionar_Aluno('Clarice', 1, [10, 9, 2, 6]);
curso.situacao_Aluno('Priscila');
curso.situacao_Aluno('Marta');
curso.situacao_Aluno('Clarice');
curso.gerarLista();
console.log(curso.listaResultado);
