/* Uma loja deseja cadastrar alguns produtos para consulta.

Inicialmente, solicite ao usuário a quantidade de produtos que serão cadastrados.

Para cada produto, solicite:

* Nome.
* Preço.

Cada produto deverá ser representado por um **objeto** e armazenado em um **vetor**.

Após realizar todos os cadastros, solicite ao usuário o nome de um produto para pesquisa.

O programa deverá percorrer o vetor procurando pelo produto informado.

Caso encontre, apresente:

* Nome do produto.
* Preço.

Caso não encontre, apresente:

`Produto não encontrado.` */

import leia from 'readline-sync';

var quantidade = leia.questionInt(" Digite a quantidade de produtos que serão cadastrados: ");

var produtos = [];
var nome;
var preco;

for(var i = 1; i <= quantidade; i++){

    nome = leia.question("Digite o nome do produto: ")
    preco = leia.questionFloat(" Digite o preco do produto: ")

    var produto = [
        nome,
        preco
    ]
    
    produtos.push(produto);

}

var nomePesquisa = leia.question(" Digite o nome do produto que deseja encontrar: ")
var nomeEncontrado = false

for(var i = 0; i < produtos.length; i++){
    if(produtos[i][0] === nomePesquisa ){
        console.log("Nome: " + produtos[i][0]);
        console.log("Preco: " + produtos[i][1]);
        nomeEncontrado = true
    }
}

if(nomeEncontrado == false){
    console.log("Produto não encontrado!")
}