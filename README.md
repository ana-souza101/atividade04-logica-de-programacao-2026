# Atividade Avaliativa IV - Prática

* Curso - Desenvolvimento de Sistemas
* Unidade Curricular - Lógica de Programação
* Docente - Gustavo Roberto de Souza

## Orientações Gerais

* A avaliação deverá ser realizada individualmente.
* Não é permitido o uso do celular durante a realização da atividade.
* Não é permitido o uso de nenhum tipo de auxílio de IA (Inteligência Artificial).
* Poderão ser utilizados os conceitos de:

  * Entrada e saída de dados.
  * Variáveis.
  * Operadores.
  * Estruturas condicionais.
  * Estruturas de repetição.
  * Vetores.
  * Objetos.
* Os exercícios deverão ser desenvolvidos utilizando JavaScript.
* Quando solicitado, os dados deverão ser armazenados em vetores e/ou objetos.
* A entrega deverá ser feita no AVA, enviando apenas o link do repositório do GitHub.

## Passo-a-Passo (Clonar e Entrega)

1. Faça um **fork** deste repositório utilizando o botão **Fork** disponível na parte superior da página.
2. Clone o repositório para o seu computador:

   1. Selecione uma pasta no computador.
   2. Abra o CMD ou Terminal.
   3. Execute o comando `git clone <url_do_repositório>`.
3. Abra a pasta do projeto no VS Code.
4. Desenvolva os exercícios.
5. Ao finalizar:

   1. Execute `git add .`
   2. Execute `git commit -m "sua mensagem"`
   3. Execute `git push origin master`
6. Copie o link do seu repositório e envie no AVA.

   1. O link deverá ser adicionado como comentário na entrega da atividade.

## Questões

### Questão 01

Uma escola deseja registrar as notas obtidas por uma turma em uma determinada avaliação.

Desenvolva um algoritmo que inicialmente solicite ao usuário a quantidade de estudantes que serão cadastrados.

Para cada estudante, solicite:

* Nome.
* Nota da avaliação.

Cada estudante deverá ser representado por um **objeto**, contendo seu nome e sua nota.

Todos os estudantes deverão ser armazenados em um **vetor**.

Ao finalizar os cadastros, o programa deverá percorrer o vetor e apresentar:

* Nome e nota de todos os estudantes.
* Quantidade de estudantes com nota maior ou igual a `7`.
* Quantidade de estudantes com nota menor que `7`.
* Média das notas da turma.
* Nome do estudante que obteve a maior nota.

Considere notas válidas entre `0` e `10`.

Caso seja informada uma nota inválida, o programa deverá solicitar a nota novamente.

---

### Questão 02

Uma loja deseja controlar os produtos disponíveis em seu estoque.

O programa deverá solicitar inicialmente a quantidade de produtos que serão cadastrados.

Para cada produto, solicite:

* Nome do produto.
* Preço.
* Quantidade disponível em estoque.

Cada produto deverá ser armazenado como um **objeto** e todos os produtos deverão ser adicionados em um **vetor**.

Após realizar todos os cadastros, o programa deverá apresentar:

* Nome, preço e quantidade de todos os produtos cadastrados.
* Quantidade de produtos que possuem estoque igual a `0`.
* Quantidade de produtos que possuem estoque menor que `5`.
* Valor total do estoque, considerando preço × quantidade de cada produto.
* Nome do produto com maior quantidade disponível.

Produtos com quantidade igual a `0` deverão ser apresentados com a mensagem:

`Produto sem estoque.`

---

### Questão 03

Uma locadora de veículos deseja registrar os automóveis disponíveis para aluguel.

O programa deverá inicialmente solicitar quantos veículos serão cadastrados.

Para cada veículo, solicite:

* Modelo.
* Ano.
* Valor da diária.
* Situação:

  * `1 - Disponível`
  * `2 - Alugado`

Cada veículo deverá ser representado por um **objeto** e armazenado em um **vetor**.

Após finalizar os cadastros, o programa deverá apresentar:

* Todos os veículos cadastrados.
* Quantidade de veículos disponíveis.
* Quantidade de veículos alugados.
* Valor médio das diárias.
* Modelo do veículo com a diária mais cara.

Além disso, solicite ao usuário um valor máximo que ele deseja pagar por uma diária.

O programa deverá apresentar todos os veículos que estejam **disponíveis** e que possuam diária menor ou igual ao valor informado.

Caso nenhum veículo atenda aos critérios, apresente:

`Nenhum veículo encontrado.`

---

### Questão 04

Um organizador de campeonato deseja registrar os resultados de diferentes jogadores.

Inicialmente, solicite ao usuário a quantidade de jogadores que participarão do campeonato.

Para cada jogador, solicite:

* Nome.
* Quantidade de vitórias.
* Quantidade de empates.
* Quantidade de derrotas.

Cada jogador deverá ser representado por um **objeto** e armazenado em um **vetor**.

Considere a seguinte pontuação:

* Vitória: `3 pontos`.
* Empate: `1 ponto`.
* Derrota: `0 pontos`.

O programa deverá calcular e armazenar também a pontuação total de cada jogador.

Após todos os cadastros, apresente:

* Nome e pontuação de cada jogador.
* Quantidade total de vitórias registradas no campeonato.
* Quantidade total de empates.
* Quantidade total de derrotas.
* Nome do jogador com maior pontuação.
* Média de pontos dos jogadores.

Caso dois ou mais jogadores possuam a maior pontuação, considere como vencedor o primeiro encontrado.

---

### Questão 05

Uma clínica deseja organizar sua fila de atendimentos do dia.

Inicialmente, solicite a quantidade de pacientes que serão cadastrados.

Para cada paciente, solicite:

* Nome.
* Idade.
* Tipo de atendimento:

  * `1 - Consulta`
  * `2 - Exame`
  * `3 - Retorno`

Cada paciente deverá ser armazenado em um **objeto** e todos os pacientes deverão ser adicionados em um **vetor**.

Após realizar os cadastros, apresente:

* Todos os pacientes cadastrados.
* Quantidade de pacientes para consulta.
* Quantidade de pacientes para exame.
* Quantidade de pacientes para retorno.
* Média de idade dos pacientes.
* Nome do paciente mais velho.

Em seguida, solicite um nome para pesquisa.

O programa deverá percorrer o vetor procurando pelo paciente informado.

Caso encontre, apresente todas as informações cadastradas sobre ele.

Caso contrário, apresente:

`Paciente não encontrado.`

---

### Questão 06

Uma empresa deseja controlar as horas trabalhadas pelos funcionários durante um determinado período.

Inicialmente, solicite a quantidade de funcionários.

Para cada funcionário, solicite:

* Nome.
* Quantidade de horas trabalhadas.
* Valor recebido por hora.

Cada funcionário deverá ser representado por um **objeto** e armazenado em um **vetor**.

O programa deverá calcular o salário de cada funcionário utilizando:

`horas trabalhadas × valor da hora`

Ao final, apresente:

* Nome e salário de cada funcionário.
* Valor total da folha de pagamento.
* Média salarial.
* Quantidade de funcionários com salário superior a R$ 3.000,00.
* Nome do funcionário com maior salário.

Após isso, solicite ao usuário um valor mínimo de salário.

Apresente todos os funcionários que recebem um salário maior ou igual ao valor informado.

---

### Questão 07

Uma biblioteca deseja registrar os livros disponíveis em seu acervo.

Inicialmente, solicite quantos livros serão cadastrados.

Para cada livro, solicite:

* Título.
* Autor.
* Ano de publicação.
* Situação:

  * `1 - Disponível`
  * `2 - Emprestado`

Cada livro deverá ser representado por um **objeto** e armazenado em um **vetor**.

Após finalizar os cadastros, apresente:

* Todos os livros cadastrados.
* Quantidade de livros disponíveis.
* Quantidade de livros emprestados.
* Título do livro mais antigo.
* Título do livro mais recente.

Em seguida, apresente repetidamente o seguinte menu:

`1 - Listar todos os livros`
`2 - Listar apenas livros disponíveis`
`3 - Pesquisar livro pelo título`
`0 - Sair`

O menu deverá continuar sendo apresentado até que o usuário selecione a opção `0`.

---

### Questão 08

Um restaurante deseja registrar os pedidos realizados durante o almoço.

Inicialmente, solicite ao usuário a quantidade de pedidos que serão registrados.

Para cada pedido, solicite:

* Número do pedido.
* Nome do cliente.
* Valor total.
* Forma de pagamento:

  * `1 - Dinheiro`
  * `2 - Cartão`
  * `3 - PIX`

Cada pedido deverá ser representado por um **objeto** e armazenado em um **vetor**.

Após todos os pedidos serem cadastrados, apresente:

* Número, cliente e valor de cada pedido.
* Quantidade de pagamentos em dinheiro.
* Quantidade de pagamentos no cartão.
* Quantidade de pagamentos via PIX.
* Valor total arrecadado.
* Valor médio dos pedidos.
* Número do pedido de maior valor.

Além disso, apresente todos os pedidos cujo valor seja superior à média dos pedidos.

---

### Questão 09

Uma academia deseja acompanhar o desempenho de seus alunos em um desafio de atividades físicas.

Inicialmente, solicite quantos alunos participarão.

Para cada aluno, solicite:

* Nome.
* Quantidade de minutos de exercício realizados.
* Quantidade de calorias gastas.

Cada aluno deverá ser representado por um **objeto** e armazenado em um **vetor**.

Após realizar todos os cadastros, apresente:

* Todos os alunos cadastrados.
* Total de minutos de exercícios realizados por todos os alunos.
* Total de calorias gastas.
* Média de minutos de exercício.
* Nome do aluno que realizou mais minutos de exercício.
* Quantidade de alunos que realizaram pelo menos `150 minutos`.

Um aluno será considerado como tendo atingido a meta caso tenha realizado pelo menos `150 minutos`.

Para cada aluno, apresente também:

`Meta atingida.`

ou

`Meta não atingida.`

---

### Questão 10

Uma empresa de entregas deseja controlar os pedidos enviados durante o dia.

O sistema deverá apresentar repetidamente o seguinte menu:

`1 - Cadastrar entrega`
`2 - Listar entregas`
`3 - Consultar entrega`
`4 - Alterar situação da entrega`
`5 - Exibir resumo`
`0 - Encerrar`

Cada entrega deverá ser representada por um **objeto** contendo:

* Código.
* Nome do cliente.
* Cidade de destino.
* Valor da entrega.
* Situação.

As entregas deverão ser armazenadas em um **vetor**.

Ao selecionar `Cadastrar entrega`, solicite os dados e adicione uma nova entrega ao vetor.

A situação inicial deverá ser:

`Pendente`

Na opção `Listar entregas`, apresente todas as entregas cadastradas.

Na opção `Consultar entrega`, solicite o código da entrega e apresente seus dados.

Caso não seja encontrada, apresente:

`Entrega não encontrada.`

Na opção `Alterar situação da entrega`, solicite o código e permita selecionar:

`1 - Pendente`
`2 - Em transporte`
`3 - Entregue`

Na opção `Exibir resumo`, apresente:

* Quantidade total de entregas.
* Quantidade de entregas pendentes.
* Quantidade de entregas em transporte.
* Quantidade de entregas entregues.
* Valor total das entregas cadastradas.

O sistema deverá permanecer em execução até que o usuário escolha a opção `0`.
