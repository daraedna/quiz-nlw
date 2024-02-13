const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "variable myVar;",
        "v myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para imprimir mensagens no console?",
      respostas: [
        "log()",
        "print()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual declaração é usada para definir uma função em JavaScript?",
      respostas: [
        "function myFunction()",
        "def myFunction()",
        "void myFunction()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de document.querySelector() em JavaScript?",
      respostas: [
        "Selecionar múltiplos elementos",
        "Selecionar o primeiro elemento que corresponde a um seletor CSS",
        "Alterar o conteúdo HTML de um elemento"
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Operador de concatenação",
        "Operador de incremento",
        "Operador lógico 'E' (AND)"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addElement()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "// This is a comment",
        "' This is a comment",
        "<!-- This is a comment -->"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método setInterval() faz em JavaScript?",
      respostas: [
        "Executa uma função a cada intervalo de tempo especificado",
        "Remove um intervalo de tempo especificado",
        "Pausa a execução de um script por um intervalo de tempo especificado"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
  
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const isCorrect = event.target.value == item.correta;
  
        corretas.delete(item);
  
        if(isCorrect){
          corretas.add(item);
        }
  
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
      }
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
  
    quiz.appendChild(quizItem);
  }
  