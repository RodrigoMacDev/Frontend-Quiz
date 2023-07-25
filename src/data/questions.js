const data = [
  {
    category: "HTML",
    questions: [
      {
        question:
          "Qual atributo é usado para especificar a URL de um stylesheet externo no HTML?",
        options: ["href", "src", "link", "style"],
        answer: "href",
      },
      {
        question:
          "Qual tag é usada para exibir uma imagem?",
        options: ["<img>", "<picture>", "<image>", "<src>"],
        answer: "<img>",
      },
      {
        question:
          "Qual atributo é usado para especificar o estilo CSS para um element HTML?",
        options: ["style", "css", "class", "id"],
        answer: "style",
      },
      {
        question: "O que é o Document Object Model(DOM)?",
        options: [
          "Interface de programação que apresenta o HTML através do CSS",
          "Interface de programação que representa a estrutura de um documento HTML ou XML como uma arvore de objetos",
          "Um modelo de organizar os documentos do HTML em linha",
          "Modelo de interface de que foi utilizado no HTML 4 e caiu em desuso no HTML 5",
        ],
        answer:
          "Interface de programação que representa a estrutura de um documento HTML ou XML como uma arvore de objetos",
      },
      {
        question:
          "Qual tag é usada para definir o título principal de uma página?",
        options: ["<title>", "<h1>", "<header>", "<main>"],
        answer: "<h1>",
      },
      
      {
        question: "Quantas tags title existem no HTML?",
        options: [
          "Há apenas uma tag <title> no HTML",
          "Existem 6 tags title no HTML, partindo de <h1> à <h6>",
          "Existem apenas duas tags <title> no HTML, uma para o nome da página e outra para nomear as seções do documento",
          "Existem apenas duas tags <title> no HTML, uma para o nome da página e outra para títulos na interface",
        ],
        answer: "Há apenas uma tag <title> no HTML",
      },
      {
        question: "Qual a diferença entre div e span?",
        options: [
          "<div> é um block-level elemento usado para agrupar e estruturar conteúdo, <span> é um inline-level elemento usado para aplicar estilos e manipular pequenas porções de texto",
          "<span> é um block-level elemento usado para agrupar e estruturar conteúdo, <div> é um inline-level elemento usado para aplicar estilos e manipular pequenas porções de texto",
          "<span> é um elemento que só pode ser utilizado no elemento <div>",
          "<div> é um elemento que só pode ser utilizado no elemento <span>",
        ],
        answer:
          "<div> é um block-level elemento usado para agrupar e estruturar conteúdo, <span> é um inline-level elemento usado para aplicar estilos e manipular pequenas porções de texto",
      },
      {
        question: "Qual é a tag correta para criar uma lista ordenada?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ol>",
      },
      {
        question: "Qual é a tag correta para criar um hyperlink?",
        options: ["<href>", "<li>", "<link>", "<a>"],
        answer: "<a>",
      },
      {
        question:
          "Em HTML, qual é o atributo usado para definir o texto alternativo para uma imagem?",
        options: ["src", "img", "title", "alt"],
        answer: "alt",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "CSS é a sigla para:",
        options: [
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Component Style Sheets",
          "Cascading Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question: "Como selecionar um elemento com a classe 'exemplo' no CSS",
        options: [".exemplo", "#exemplo", "<exemplo>", "*exemplo"],
        answer: ".exemplo",
      },
      {
        question:
          "Qual propriedade do CSS é usada para adicionar sombra aos elementos?",
        options: [
          "shadow-color",
          "text-shadow",
          "element-shadow",
          "box-shadow",
        ],
        answer: "box-shadow",
      },
      {
        question:
          "Qual propriedade do CSS é usada para controlar a transparência de um elemento?",
        options: ["opacity", "transparent", "depth", "transparency"],
        answer: "opacity",
      },
      {
        question:
          "Qual propriedade do CSS é usada para controlar o espaçamento entre linhas de texto?",
        options: [
          "letter-spacing",
          "text-spacing",
          "line-height",
          "line-spacing",
        ],
        answer: "line-height",
      },
      {
        question:
          "Como você pode selecionar todas as tags '<a>' com a classe 'link'?",
        options: ["a.link", ".link a", "a > .link", ".link > a"],
        answer: ".link a",
      },
      {
        question:
          "Qual propriedade do CSS é usada para especificar a font de um elemento?",
        options: ["font-family", "text-family", "font-style", "text-style"],
        answer: "font-family",
      },
      {
        question: "Como você pode esconder um elemento em CSS?",
        options: [
          "display: none",
          "visibility: hidden",
          "opacity: 0",
          "Todas as respostas acima",
        ],
        answer: "Todas as respostas acima",
      },
      {
        question:
          "Qual propriedade do CSS é usada para deixar um texto em negrito?",
        options: ["test-style", "font-weight", "font-size", "bold"],
        answer: "font-weight",
      },
      {
        question:
          "Qual é propriedade CSS é usada para mudar a cor do texto de um elemento?",
        options: ["background-color", "font-color", "color", "text-color"],
        answer: "color",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "Qual o resultado da seguinte expressão: 5 + '2'?",
        options: ["'7'", "'52'", "7", "52"],
        answer: "'52'",
      },
      {
        question: "Como converter um numero para uma string em Javascript?",
        options: ["parseInt()", "parseFloat()", "String()", "toString()"],
        answer: "toString()",
      },
      {
        question: "Como criar uma função em JavaScript?",
        options: [
          "function myFunction() {}",
          "const myFunction = function() {}",
          "const myFunction = () => {}",
          "Todas as respostas acima",
        ],
        answer: "Todas as respostas acima",
      },
      {
        question: "Como comentar apenas uma linha em JavaScript",
        options: [
          "**Isso é um comentário**",
          "<!-- Isso é um comentário -->",
          "// Isso é um comentário",
          "<--! Isso é um comentário -->",
        ],
        answer: "// Isso é um comentário",
      },
      {
        question: "O que o operador 'typeof' faz no JavaScript",
        options: [
          "Determina o tipo de uma expressão",
          "Converte um valor para booleano",
          "Checa se o valor é 'undefined'",
          "Checa se o valor booleano é falso ou verdadeiro",
        ],
        answer: "Determina o tipo de uma expressão",
      },
      {
        question: "O que a keyword 'this' se refere no JavaScript",
        options: [
          "A função atual",
          "O objeto global",
          "O objeto parent",
          "O atual objeto",
        ],
        answer: "O atual objeto",
      },
      {
        question: "Qual o propósito do método 'splice()' em JavaScript",
        options: [
          "Remover elementos de um array",
          "Adicionar elementos a um array",
          "Repor elementos em um array",
          "Todas as respostas acima",
        ],
        answer: "Todas as respostas acima",
      },
      {
        question:
          "Como selecionar um elemento HTML usando sua ID em JavaScript",
        options: [
          "document.selectById('elementID')",
          "document.getElementByID('elementID')",
          "document.querySelector('#elementID')",
          "document.getElementById('elementID')",
        ],
        answer: "document.getElementById('elementID')",
      },
      {
        question:
          "Qual a forma correta de adicionar um elemento ao início de um array em JavaScript?",
        options: [
          "array.add(element)",
          "array.shift(element)",
          "array.unshift(element)",
          "array.push(element)",
        ],
        answer: "array.unshift(element)",
      },
      {
        question: "Qual o propósito da função Math.random() em JavaScript",
        options: [
          "Gerar um numero aleatório entre 0 e 1",
          "Arredondar um número para o número inteiro mais próximo",
          "Performar operações matematicas",
          "Converter uma string para number",
        ],
        answer: "Gerar um numero aleatório entre 0 e 1",
      },
    ],
  },
  {
    category: "React",
    questions: [
      {
        question: "O que é React?",
        options: [
          "Uma linguagem de programação",
          "Uma biblioteca de Front-End do JavaScript",
          "Uma biblioteca de Back-End do JavaScript",
          "Uma database de JavaScript",
        ],
        answer: "Uma biblioteca de Front-End do JavaScript",
      },
      {
        question: "O que é JSX em React?",
        options: [
          "Um estilo de linguagem para componentes do React",
          "Uma engine do React",
          "Uma extensão de sintaxe para o JavaScript em React",
          "Um estado de manutenção da biblioteca React",
        ],
        answer: "Uma extensão de sintaxe para o JavaScript em React",
      },
      {
        question: "Como lidar com um input do usuário em React",
        options: [
          "Utilizando um gerenciador de evento e atualizando o estado do componente",
          "Diretamente modificando no DOM usando JavaScript",
          "Diretamente modificando no Virtual DOM do React",
          "Chamando o método handleUserInput() no componente",
        ],
        answer:
          "Utilizando um gerenciador de evento e atualizando o estado do componente",
      },
      {
        question: "O que são React Hooks",
        options: [
          "Funções que permitem o uso de diferentes estados e outros recursos em componentes funcionais",
          "Métodos  usado para lidar com interações do usuário em componentes de classe",
          "Ferramentas para debugging e otimização de performance em React",
          "Bibliotecas que extendem as funcionalidades do React",
        ],
        answer:
          "Funções que permitem o uso de diferentes estados e outros recursos em componentes funcionais",
      },
      {
        question:
          "Como passar Data de um componente pai para um componente filho em React?",
        options: [
          "Utilizando o sistema de props",
          "Modificando o estado do componente filho",
          "Utilizando a keyword 'state' no componente filho",
          "Chamando o método getChildProps() no componente pai",
        ],
        answer: "Utilizando o sistema de props",
      },
      {
        question: "O que é o virtual DOM em React",
        options: [
          "Um componente que renderiza outros componentes",
          "Uma versão mais leve do DOM",
          "Uma ferramenta utilizada para debugging do DOM em React",
          "Uma linguagem de programação baseada no React",
        ],
        answer: "Uma versão mais leve do DOM",
      },
      {
        question: "Qual o propósito do React Router",
        options: [
          "Gerenciar estados em uma aplicação React",
          "Gerenciar inputs e interações do usuário",
          "Navegar entre diferentes páginas em uma aplicação React",
          "Fazer chamadasa de APIs em uma aplicação React",
        ],
        answer: "Navegar entre diferentes páginas em uma aplicação React",
      },
      {
        question: "Como fazer uma solicitação HTTP em React",
        options: [
          "Utilizando a fetch() API",
          "Chamando a função httpRequest() em React",
          "Solicitando através do HTML",
          "Utilizando a biblioteca react-http",
        ],
        answer: "Utilizando a fetch() API",
      },
      {
        question: "Qual o propósito do hook 'useContext' em React?",
        options: [
          "Definir o estilo do componente",
          "Gerenciar o estado global da aplicação React",
          "Lidar com a autentificação do usuário em React",
          "Criar componentes reutilizáveis",
        ],
        answer: "Gerenciar o estado global da aplicação React",
      },
      {
        question: "Qual o propósito do hook useEffect em React?",
        options: [
          "Lidar com as interações do usuário com os componentes",
          "Definir o estado inicial de um componente",
          "Lidar com efeitos colaterais e realizar a limpeza em componentes funcionais",
          "Atualizar o estado do componente baseado em mudanças via props",
        ],
        answer:
          "Lidar com efeitos colaterais e realizar a limpeza em componentes funcionais",
      },
    ],
  },
];

export default data;
