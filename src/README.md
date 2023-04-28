1. Introdução
# Validador de Cartão 
- O que é um Validador de Cartão?

Um validador de cartão de crédito é uma ferramenta usada para verificar se um número de cartão de crédito é válido e se está formatado corretamente.

Cartões de débito, cartões pré-pagos e cartões-presente também podem ser validados usando esta ferramenta. Tudo o que você precisa fazer é inserir as informações do cartão e clicar em validar.

### Lembre-se: Esta ferramenta não verifica ou valida CVV/CVC,data de vencimento do cartão e outros detalhes confidenciais do cartão. Ele apenas verifica e valida o número do cartão de crédito se está no formato correto e se passou na verificação do Algoritmo Luhn. 
# Como usar o Validador de Cartão de Crédito?

Para utilizar este Validador de Cartão de Crédito, basta seguir os passos abaixo e você poderá validar qualquer número de cartão de crédito.

Etapa 1: Insira o número do cartão de crédito no campo de entrada. Certifique-se de que não há espaços ou hífens entre os números. 
Etapa 2: Clique no botão "VALIDAR" e a ferramenta validadora de cartão de crédito fará o resto.

# Quais são os usos de um validador de cartão de crédito?
Existem várias razões pelas quais você pode querer usar um validador de cartão de crédito. Alguns dos motivos mais comuns são:
* Para verificar se um número de cartão de crédito é válido: Você pode usar um validador de cartão de crédito para verificar se um número de cartão de crédito é válido. Isso é útil se você estiver tentando verificar se um número de cartão de crédito está correto.
* Para garantir um processamento de pagamento tranquilo: Você pode usar um validador de cartão de crédito para garantir um processamento de pagamento tranquilo. Isso porque pode ajudá-lo a formatar corretamente o número do cartão de crédito. Isso pode ajudar a reduzir as chances de ocorrência de erros/fraude durante o processamento do pagamento.

# Perguntas Frequentes (FAQ)
1. Devemos manter esses números de cartão de crédito em arquivo?
Não, os números não são armazenados em nosso sistema. Os números são usados apenas para fins de validação e não são armazenados em nenhum lugar de nossos servidores.

2. O que é o Algoritmo de Luhn?
O Algoritmo Luhn é uma verificação usada para validar números de cartão de crédito. Essa verificação é executada pela ferramenta Validador de Cartão de Crédito para garantir que o número esteja formatado corretamente.

3. Como posso saber se um cartão de crédito é válido?
Você pode usar um validador de cartão de crédito para verificar se um cartão de crédito é válido. Isso é útil se você estiver tentando verificar se um número de cartão de crédito está correto e seguir o algoritmo de Luhn.

4. Quais tipos de cartões de crédito podem ser validados?
A ferramenta Validador de Cartão de Crédito pode validar todos os principais cartões de crédito, incluindo Visa, Mastercard, American Express, JCB, Discover, Diners Club e muito mais.
----------------------------------------------------------------------
## Solicitado do projeto:

2. Resumo do projeto
Neste projeto, você precisará criar um aplicativo da Web que permita ao usuário validar o número de um cartão de crédito. Além disso, você precisará implementar a funcionalidade para ocultar todos os dígitos de um cartão, exceto os quatro últimos.

O tema é livre. Você deve pensar em quais situações da vida real um cartão de crédito precisaria ser validado e em como deveria ser a experiência do usuário (telas, explicações, mensagens, cores, marca?) etc.

Como continuação do projeto de pré-admissão, você retrabalhará os fundamentos do JavaScript, incluindo conceitos como variáveis, condicionais e funções, bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS. Ao desenvolver este projeto, você também se familiarizará com novos conceitos.

Os objetivos gerais deste projeto são os seguintes
Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes pastas (através de módulos em JS).
Conhecer as ferramentas de manutenção e melhoria do código (linters e testes unitários).
Aprenda sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
Implementar controle de versão com git (e a plataforma github)
3. Considerações gerais
Resolvemos este projeto individualmente. Recomendamos uma duração de 1-3 sprints.
Concentre-se em aprender e não apenas "concluir" o projeto.
Sugerimos que você não tente saber tudo antes de começar a codificar. Não se preocupe muito agora com o que você ainda não entende. Você vai aprender.
4. Marco: Critérios de Aceitação Mínimos do Projeto
Esses são os requisitos que seu projeto deve atender para garantir que seu trabalho atenda aos objetivos principais.

1. Uma interface que deve permitir ao usuário:

Inserir o número que desejamos validar. Use apenas caracteres numéricos (dígitos) no cartão para validar [0-9].
Constatar se o resultado é válido ou não.
Ocultar todos os dígitos do número do cartão, excetuando os últimos 4 caracteres.
Não deve poder inserir um campo vazio.
2. Testes unitários dos métodos. Os métodos validator (isValid e maskify) devem ser cobertos por testes unitários.

3. Código do seu projeto enviado para seu repositório e interface "implantada". O código final deve estar um repositório no GitHub. A interface, ou página da web, deve ser "implantada" (acessível online publicamente) usando o GitHub Pages.

4. Um README contendo uma definição de produto. No README, conte-nos como você pensou sobre os usuários e qual foi o seu processo para definir o produto final em nível de experiência e interface. Estas perguntas servem de guia:

Quem são os principais usuários do produto
Quais são os objetivos desses usuários em relação ao seu produto
Como você acha que o produto que você está criando está resolvendo seus problemas
Com esses requisitos atendidos, você pode agendar um feedback do projeto com um coach.

5. Marco Opcional: Mostrar a franquia do cartão
As partes opcionais permitem que você se aprofunde um pouco mais nos objetivos de aprendizagem do projeto. Tudo na vida tem prós e contras, decida sabiamente se você quiser gastar o tempo aprofundando/refinando ou aprendendo coisas novas no próximo projeto.

No marco opcional você também pode validar se o número do cartão é válido, mostre a franquia do cartão (por exemplo, Visa, MasterCard, etc) usando estas regras de validação. Se você escrever um novo método para isso, terá que fazer testes de unidade.

6. Considerações técnicas
A lógica do projeto deve estar implementada inteiramente em JavaScript. Nesse projeto NÃO está permitido usar bibliotecas ou frameworks, só vanilla JavaScript.

Para iniciar este projeto você terá que fazer um fork e clone desse repositório, que contém um boilerplate com testes. Um boilerplate é a estrutura básica de um projeto que serve como ponto de partida com arquivos iniciais e configuração básica de dependências e testes.

Os testes unitários devem cobrir no mínimo de 70% dos statements, functions e lines, e um mínimo de 50% de branches. O boilerplate já contem o setup e configurações necessárias para executar os testes assim como code coverage para ver o nível de cobertura dos testes usando o comando npm test.

O boilerplate que fornecemos contém esta estrutura:

./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
Descrição de scripts/arquivos
README.md: deve explicar como "deployar", instalar e executar a aplicação, assim como uma introdução a aplicação, suas funcionalidades e as decisões que foram tomadas.

src/index.html: aqui será o ponto de entrada da sua aplicação. Este arquivo deve conter a marcação HTML e chamar o CSS e JavaScript necessários.

src/validator.js: aqui você deve implementar o objeto validator, o qual já está exportado no boilerplate. Este objeto (validator) deve conter dois métodos:

validator.isValid(creditCardNumber): creditCardNumber é um string com o número do cartão a ser verificado. Esta função deve retornar um boolean, dependendo de sua validade, de acordo com o algoritmo de Luhn.

validator.maskify(creditCardNumber): creditCardNumber é um string com o número do cartão e esta função deve retornar um string onde todos, exceto os últimos quatro caracteres, são substituídos por um número (#) ou 🐱. Essa função deve sempre manter os quatro últimos caracteres intactos, mesmo quando o string for mais curto.

Exemplo de uso:

maskify('4556364607935616') === '############5616'
maskify(     '64607935616') ===      '#######5616'
maskify(               '1') ===                '1'
maskify(               '')  ===                ''
src/index.js: aqui você deve escutar os eventos de DOM, chamar validator.isValid() e validator.maskify().

test/validator.spec.js: este arquivo contem alguns testes de exemplo e aqui você deve implementar os testes para validator.isValid() e validator.maskify().

O boilerplate inclui tarefas que executam eslint e htmlhint para verificar o HTML e JavaScript com respeito a uma guia de estilos. Ambas tarefas são executadas automaticamente antes de executar os testes quando usamos o comando npm run test. No caso do JavaScript estamos usando o eslint que está configurado no arquivo .eslintrc que contem o mínimo de informação como versão do JavaScript/ECMAScript, o ambiente (browser nesse caso) e as regras recomendadas ("eslint:recommended"). Nas regras/guias de estilo usaremos das recomendações padrão tanto para o eslint quanto htmlhint.

Deploy
Disponibilizar os projetos e colocá-los "no ar" vai ser parte cotidiana do ciclo de desenvolvimento em produtos de tecnologia.

Para este projeto, utilizaremos o Github Pages para essa finalidade. O comando npm run deploy pode te auxiliar nessa tarefa e você pode também consultar a documentação oficial.
