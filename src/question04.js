/* Uma empresa deseja verificar a idade de seus funcionários.

Inicialmente, solicite ao usuário a quantidade de funcionários que serão cadastrados.

Para cada funcionário, solicite:

* Nome.
* Idade.

Cada funcionário deverá ser representado por um **objeto** e armazenado em um **vetor**.

Ao final, apresente:

* Nome e idade de todos os funcionários.
* Quantidade de funcionários com `18 anos ou mais`.
* Quantidade de funcionários com menos de `18 anos`.
* Nome do funcionário mais velho. */


import leia from 'readline-sync';

var quantidade = leia.questionInt(" Digite a quantidade de funcionarios que serão cadastrados: ");

var funcionarios = [];
var nome;
var idade;
var quantMaior = 0;
var quantMenor = 0;
var maisVelho = 0;

for (var i = 1; i <= quantidade; i++) {

    nome = leia.question("Digite o nome do funcionario: ")
    idade = leia.questionFloat(" Digite a idade do funcionario: ")

    var funcionario = [
        nome,
        idade
    ]

    funcionarios.push(funcionario);

    if(idade > maisVelho){
        maisVelho = nome
    }

    if (idade >= 18) {
        quantMaior = quantMaior + 1
    }

    if (idade < 18) {
        quantMenor = quantMenor + 1
    }

}



var contador = 0;

while (contador < funcionarios.length) {

    console.log("\nNome: " + funcionarios[contador][0]);
    console.log("Idade: " + funcionarios[contador][1]);
    contador++;
}

console.log("\nQuantidade de funcionários com 18 anos ou mais: " + quantMaior)
console.log("Quantidade de funcionários com menos de: " + quantMenor)
console.log("Funcionário mais velho: " + maisVelho)