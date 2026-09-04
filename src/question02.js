/* Uma escola deseja registrar o resultado de três estudantes em uma atividade.

Para cada estudante, solicite:

* Nome.
* Nota.

Cada estudante deverá ser representado por um **objeto** contendo o nome e a nota.

Todos os estudantes deverão ser armazenados em um **vetor**.

Ao final, o programa deverá apresentar:

* Nome e nota de todos os estudantes.
* Quantidade de estudantes com nota maior ou igual a `7`.
* Quantidade de estudantes com nota menor que `7`.
Caso seja informada uma nota inválida, solicite a nota novamente. */

import leia from 'readline-sync';

var nome;
var nota;

var alunos = [];

var quantMaior = 0;
var quantMenor = 0;

for (var i = 1; i <= 3; i++) {
    nome = leia.question(" Digite o nome do aluno: ");
    nota = leia.questionInt(" Digite a nota do aluno: ");

    var aluno = [
        nome,
        nota
    ]

    alunos.push(aluno)

    if (nota >= 7) {
        quantMaior = quantMaior + 1
    }

    if (nota < 7) {
        quantMenor = quantMenor + 1
    }

};

console.log(alunos[0][0] + " - " + alunos[0][1]);
console.log(alunos[1][0] + " - " + alunos[1][1]);
console.log(alunos[2][0] + " - " + alunos[2][1]);
console.log("\nQuantidade de estudantes com nota maior ou igual a 7: " + quantMaior)
console.log("Quantidade de estudantes com nota menor que 7: " + quantMenor)



