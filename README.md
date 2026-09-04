# Atividade Avaliativa IV - Prática

* Curso - Desenvolvimento de Sistemas
* Unidade Curricular - Lógica de Programação
* Docente - Gustavo Roberto de Souza

## Orientações Gerais

* A avaliação deverá ser realizada individualmente.
* Não é permitido o uso do celular durante a realização da atividade.
* Não é permitido o uso de nenhum tipo de auxílio de IA (Inteligência Artificial).
* Poderão ser utilizados os conceitos de entrada e saída de dados, variáveis, operadores, estruturas condicionais, estruturas de repetição, vetores e objetos.
* Os exercícios deverão ser desenvolvidos utilizando JavaScript.
* Quando solicitado, os dados deverão ser armazenados em vetores e/ou objetos.
* A entrega deverá ser feita no AVA, enviando apenas o link do repositório do GitHub.

## Passo-a-Passo (Clonar e Entrega)

1. Você deve fazer um fork deste repositório. Na parte superior da página, clique no botão de **Fork**.
2. Depois disso, você deve clonar o repositório para o seu computador utilizando o seguinte comando:

   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o comando `git clone <url_do_repositório>`.
3. Abra no VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar, você deverá commitar e enviar novamente para o GitHub suas modificações.

   1. Adicione as alterações ao stage utilizando o comando `git add .`.
   2. Faça o commit utilizando o comando `git commit -m "sua mensagem"`.
   3. Envie as alterações utilizando o comando `git push origin master`.
6. Por fim, copie o link do seu repositório e faça o envio no AVA.

   1. O link deverá ser adicionado como comentário na entrega da atividade.

## Questões

### Questão 01

Uma empresa deseja analisar os valores de cinco vendas realizadas durante o dia.

Desenvolva um algoritmo que solicite ao usuário o valor de **5 vendas**.

Todos os valores deverão ser armazenados em um **vetor**.

Após realizar os cadastros, o programa deverá apresentar:

* Todos os valores cadastrados.
* O valor total das vendas.
* A média das vendas.
* O maior valor registrado.

---

### Questão 02

Uma escola deseja registrar o resultado de três estudantes em uma atividade.

Para cada estudante, solicite:

* Nome.
* Nota.

Cada estudante deverá ser representado por um **objeto** contendo o nome e a nota.

Todos os estudantes deverão ser armazenados em um **vetor**.

Ao final, o programa deverá apresentar:

* Nome e nota de todos os estudantes.
* Quantidade de estudantes com nota maior ou igual a `7`.
* Quantidade de estudantes com nota menor que `7`.

Considere notas válidas entre `0` e `10`. // opcional

Caso seja informada uma nota inválida, solicite a nota novamente.

---

### Questão 03

Uma loja deseja cadastrar alguns produtos para consulta.

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

`Produto não encontrado.`

---

### Questão 04

Uma empresa deseja verificar a idade de seus funcionários.

Inicialmente, solicite ao usuário a quantidade de funcionários que serão cadastrados.

Para cada funcionário, solicite:

* Nome.
* Idade.

Cada funcionário deverá ser representado por um **objeto** e armazenado em um **vetor**.

Ao final, apresente:

* Nome e idade de todos os funcionários.
* Quantidade de funcionários com `18 anos ou mais`.
* Quantidade de funcionários com menos de `18 anos`.
* Nome do funcionário mais velho.

---

### Questão 05

Uma biblioteca deseja criar um sistema simples para cadastrar e consultar livros.

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
