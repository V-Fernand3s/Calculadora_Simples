Calculadora em React

Sobre o Projeto

Este projeto consiste no desenvolvimento de uma **calculadora utilizando React.js**, com o objetivo de aplicar conceitos fundamentais do desenvolvimento de interfaces utilizando componentes.

A aplicação permite que o usuário informe dois números, escolha uma operação matemática e visualize o resultado diretamente na tela.

As operações disponíveis são:

* ➕ Adição
* ➖ Subtração
* ✖️ Multiplicação
* ➗ Divisão

Além disso, o sistema possui os botões **Calcular** e **Limpar**, validações para campos vazios e tratamento de divisão por zero.


Objetivo

O principal objetivo do projeto é praticar os conceitos básicos do **React.js**, principalmente:

* Criação de componentes;
* JSX;
* Uso de estados com `useState`;
* Eventos em elementos HTML;
* Manipulação de formulários;
* Funções em JavaScript;
* Renderização condicional;
* Organização de arquivos;
* Importação e exportação de componentes;
* Estilização utilizando CSS;
* Responsividade.

O projeto também demonstra como uma aplicação React pode ser dividida em partes menores e organizadas.

Conceitos de React Aplicados

1. Componentes

O projeto utiliza componentes para organizar a aplicação.

O principal componente criado foi:

FormCalculadora


Esse componente concentra os campos da calculadora, os botões, a lógica dos cálculos e a apresentação do resultado.

No arquivo `App.jsx`, o componente é importado:

import FormCalculadora from "./components/FormCalculadora";


Depois, ele é utilizado dentro do componente principal:

<FormCalculadora />


Isso demonstra o conceito de **componentização**, que permite dividir uma interface em partes menores e reutilizáveis.


2. JSX

O projeto utiliza **JSX**, uma sintaxe utilizada pelo React que permite escrever estruturas semelhantes ao HTML dentro do JavaScript.

Exemplo:

<div className="form-calculadora">

    <h2>Faça seu cálculo</h2>

    <p>
        Informe os valores e escolha uma operação.
    </p>

</div>


O JSX facilita a construção da interface porque permite combinar a estrutura visual com a lógica do componente.


3. useState

O projeto utiliza o Hook `useState` para controlar as informações da calculadora.

Exemplo:

const [numero1, setNumero1] = useState("");

O `useState` permite armazenar um valor e atualizá-lo durante a execução da aplicação.

Foram utilizados estados para:

* Primeiro número;
* Segundo número;
* Operação selecionada;
* Resultado;
* Mensagens;
* Controle da exibição do resultado.

Exemplo:

xero2, setNumero2] = useState("");
const [operacao, setOperacao] = useState("+");
const [resultado, setResultado] = useState(null);


4. Eventos

O projeto utiliza eventos para detectar as ações realizadas pelo usuário.

Por exemplo, quando o usuário altera um campo:

onChange={(event) =>
    setNumero1(event.target.value)
}


O evento `onChange` detecta a alteração do campo e atualiza o estado correspondente.

Também foi utilizado o evento `onClick` nos botões:

onClick={calcular}


Esse evento executa a função responsável pelo cálculo.


5. Funções

Foram criadas funções JavaScript para organizar as ações da aplicação.

A principal função é:

function calcular() {
    // lógica do cálculo
}


Ela é responsável por:

1. Verificar os campos;
2. Converter os valores para números;
3. Identificar a operação selecionada;
4. Realizar o cálculo;
5. Verificar divisão por zero;
6. Armazenar o resultado;
7. Exibir o resultado na tela.

Também existe a função:


function limpar() {
    // limpa os dados
}

Ela restaura os valores iniciais da calculadora.

6. Estrutura Condicional

A calculadora utiliza o `switch` para identificar qual operação matemática deve ser executada.

Exemplo:

switch (operacao) {

    case "+":
        resultadoCalculado = valor1 + valor2;
        break;

    case "-":
        resultadoCalculado = valor1 - valor2;
        break;

    case "*":
        resultadoCalculado = valor1 * valor2;
        break;

    case "/":
        resultadoCalculado = valor1 / valor2;
        break;
}


Dessa forma, o programa executa uma operação diferente dependendo da escolha do usuário.


7. Validação de Dados

A aplicação possui algumas validações para evitar resultados incorretos.

Uma delas verifica se os dois campos foram preenchidos:

if (numero1 === "" || numero2 === "") {
    // mensagem de erro
}


Também existe uma validação para impedir divisão por zero:

if (valor2 === 0) {
    // mensagem de erro
}

Essas validações melhoram a experiência do usuário e evitam erros durante a execução do programa.


8. Renderização Condicional

O resultado não aparece imediatamente na tela.

Ele é exibido somente depois que o usuário realiza uma tentativa de cálculo.

Para isso, foi utilizada uma condição:

{calculou && (
    <div className="resultado">
        ...
    </div>
)}


O React verifica o valor de `calculou`.

Se ele for verdadeiro, o bloco do resultado será exibido.

Esse conceito é chamado de **renderização condicional**.

9. Conversão de Dados

Os valores digitados nos campos de formulário são recebidos inicialmente como texto.

Por isso, o projeto utiliza:

const valor1 = Number(numero1);
const valor2 = Number(numero2);


A função `Number()` converte os valores para o tipo numérico, permitindo realizar operações matemáticas corretamente.

Conceitos de CSS

Além do React, o projeto utiliza CSS para construir a aparência da aplicação.

Os estilos foram separados em arquivos para facilitar a organização.

10. CSS Global

O arquivo:
index.css


possui estilos gerais da aplicação.

Ele contém:

* Reset de margens;
* Configuração do `body`;
* Fonte padrão;
* Configuração do `#root`;
* Estilos de foco;
* Seleção de texto;
* Barra de rolagem.

Exemplo:

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

Esse código remove os espaçamentos padrões dos elementos e facilita o controle do layout.


11. CSS do App

O arquivo:
App.css


é responsável pelo estilo da estrutura principal da aplicação.

Ele controla elementos como:

* Fundo da página;
* Container principal;
* Cabeçalho;
* Ícone da calculadora;
* Título;
* Descrição;
* Rodapé;
* Responsividade.

Dessa forma, o CSS geral da aplicação fica separado do CSS específico da calculadora.

12. CSS do Componente

O arquivo:

FormCalculadora.css


é responsável exclusivamente pela aparência do componente `FormCalculadora`.

Ele contém estilos para:

* Formulário;
* Títulos;
* Labels;
* Inputs;
* Select;
* Botão Calcular;
* Botão Limpar;
* Resultado;
* Mensagens de erro;
* Animações;
* Responsividade.

Essa separação facilita futuras alterações no projeto.

Responsividade

O projeto também possui regras de CSS para diferentes tamanhos de tela.

Foram utilizados `@media queries`.

Exemplo:

@media (max-width: 600px) {

    .form-calculadora {
        padding: 28px 22px;
    }

}


Isso permite adaptar o layout para telas menores, como smartphones e tablets.


Animações

Alguns elementos possuem animações utilizando `@keyframes`.

Exemplo:

@keyframes entradaCalculadora {

    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


Essa animação faz com que a calculadora apareça suavemente quando a página é carregada.

Também existe uma animação específica para a área do resultado.


Estrutura do Projeto

A organização utilizada é:

src/
│
├── components/
│   │
│   ├── FormCalculadora.jsx
│   └── FormCalculadora.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

main.jsx

É o ponto de entrada da aplicação React.

Ele renderiza o componente `App` dentro do elemento `root` do HTML.

App.jsx

É o componente principal da aplicação.

Ele importa o componente `FormCalculadora` e organiza a estrutura geral da página.

App.css

Contém os estilos da estrutura principal do aplicativo.

FormCalculadora.jsx

É o componente responsável pela calculadora.

Nele estão:

* Estados;
* Inputs;
* Select;
* Botões;
* Funções;
* Operações matemáticas;
* Validações;
* Resultado.

FormCalculadora.css

Contém os estilos específicos do componente da calculadora.

index.css

Contém os estilos globais utilizados pela aplicação.

Funcionamento do Sistema

O funcionamento da calculadora pode ser resumido da seguinte forma:
Usuário digita o primeiro número
              ↓
Usuário escolhe uma operação
              ↓
Usuário digita o segundo número
              ↓
Usuário clica em "Calcular"
              ↓
Sistema verifica os dados
              ↓
Sistema realiza a operação
              ↓
Resultado é armazenado no estado
              ↓
React atualiza a interface
              ↓
Resultado aparece na tela


Exemplo de Funcionamento

Supondo que o usuário informe:

Primeiro número: 10
Operação: +
Segundo número: 5


Ao clicar em:
Calcular

o sistema realiza:
10 + 5 = 15

E apresenta:
Resultado
15

Botão Limpar

O botão **Limpar** permite retornar a calculadora ao estado inicial.

Quando pressionado, ele:

* Apaga o primeiro número;
* Apaga o segundo número;
* Volta a operação para adição;
* Remove o resultado;
* Remove mensagens de erro;
* Oculta a área de resultado.

Isso é realizado pela função:

function limpar() 
{
    setNumero1("");
    setNumero2("");
    setOperacao("+");
    setResultado(null);
    setMensagem("");
    setCalculou(false);
}


Tratamento de Erros

O sistema também possui tratamento para situações inválidas.

Campos vazios

Caso o usuário tente calcular sem informar os números:
Preencha-os dois números para realizar o cálculo.


Divisão por zero

Caso o usuário tente realizar:
10 ÷ 0


o sistema apresenta:
Não é possível dividir um número por zero

Esses tratamentos evitam comportamentos inesperados e tornam a aplicação mais segura.

Tecnologias Utilizadas

O projeto foi desenvolvido utilizando:

* **React.js**
* **JavaScript**
* **JSX**
* **HTML**
* **CSS**
* **Vite**

Como Executar o Projeto

Primeiramente, é necessário ter o **Node.js** instalado.

Depois, abra o terminal na pasta do projeto e execute:
npm install

Após a instalação das dependências:
npm run dev

O Vite irá iniciar o servidor de desenvolvimento.

O endereço normalmente será semelhante a:
http://localhost:5173/


Conceitos Aprendidos

Com o desenvolvimento deste projeto, foram praticados conceitos importantes para o desenvolvimento com React:

* Componentização;
* JSX;
* Hooks;
* `useState`;
* Eventos;
* Funções;
* Condicionais;
* Manipulação de formulários;
* Conversão de dados;
* Validação;
* Renderização condicional;
* CSS;
* Animações;
* Responsividade;
* Organização de projetos.

 Conclusão

O desenvolvimento da calculadora permitiu aplicar na prática os principais conceitos iniciais do React.

A aplicação demonstra como componentes podem ser utilizados para organizar uma interface e como os estados permitem controlar as informações apresentadas ao usuário.

Além da lógica matemática, foram aplicados conceitos de validação, tratamento de erros, eventos e renderização condicional.

A separação dos arquivos também contribui para uma melhor organização do projeto, deixando a lógica do componente separada dos estilos visuais.

Dessa forma, o projeto serve como uma aplicação prática para compreender a estrutura e o funcionamento de uma aplicação desenvolvida com **React.js**.
