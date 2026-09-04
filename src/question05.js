/* Uma biblioteca deseja criar um sistema simples para cadastrar e consultar livros.

O programa deverá apresentar repetidamente o seguinte menu:

`1 - Cadastrar livro`
`2 - Listar livros`
`3 - Pesquisar livro`
`0 - Sair`

Cada livro deverá ser representado por um **objeto** contendo:

* Título.
* Autor.

Todos os livros deverão ser armazenados em um **vetor**.

Na opção `Cadastrar livro`, solicite o título e o autor e adicione o livro ao vetor.

Na opção `Listar livros`, apresente todos os livros cadastrados.

Na opção `Pesquisar livro`, solicite o título de um livro e procure no vetor.

Caso encontre, apresente o título e o autor.

Caso não encontre, apresente:

`Livro não encontrado.`

O menu deverá continuar sendo apresentado até que o usuário escolha a opção `0`.
 */

import leia from "readline-sync";

var livros = [];

var opcao = "";

do {

    console.log("================== MENU ==================")
    console.log("            1 - Cadastrar livros          ")
    console.log("            2 - Listar livros             ")
    console.log("            3 - Pesquisar livro           ")
    console.log("            0 - Sair                      ")
    console.log("==========================================")

    opcao = leia.questionInt(" Digite a opção desejada: ")

    switch(opcao) {
        case 0:
            console.log("Sistema encerrado!")
            break;
        case 1:
    
            var titulo = leia.question("Digite o titulo do livro: ");
            var autor = leia.question("Digite o nome do autor: ");
    
            var livro = [
                titulo,
                autor
            ];
    
            livros.push(livro);
    
            console.log("\nProduto cadastrado com sucesso!");
    
            break;
        case 2:
            var contador = 0
    
            while (contador < livros.length) {
    
                console.log("\n=============================");
                console.log("Nome: " + livros[contador][0]);
                console.log("Autor: " + livros[contador][1]);
    
                contador++;
            }
            break;
        case 3:
            var pesquisa = leia.question("Digite o titulo do livro que deseja pesquisar: ");
    
            var contador = 0;
            var encontrado = false;
    
            while (contador < livros.length) {
    
                if (livros[contador][0].toLowerCase().includes(pesquisa.toLowerCase())) {
    
                    console.log("\nProduto encontrado:");
                    console.log("Titulo: " + livros[contador][0]);
                    console.log("Autor: " + livros[contador][1]);
    
                    encontrado = true;
                }
    
                contador++;
            }
    
            if (encontrado == false) {
    
                console.log("\nNenhum livro encontrado!");
            }
            break;
        default:
            console.log("Opcao invalida!")
    }
    

} while (opcao !== 0)

