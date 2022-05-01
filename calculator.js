function calculadora() {
  const operacao = Number(prompt('Escolha uma operação:\n 1- Somar\n 2- Subtrair\n 3- Dividir\n 4- Multiplicar'));

  if (!operacao || operacao >= 7 || operacao <=0) {
    alert(String.fromCodePoint(0x2716) + ' Opção inválida - Digite uma opção válida');
    calculadora();
  }else {
    let n1 = Number(prompt('Insira o primeiro valor:'));
    
    if(!n1){
      alert(String.fromCodePoint(0x2716) + ' Opção inválida - Digite uma opção válida');
      calculadora();
    }else{
      let n2 = Number(prompt('Insira o segundo valor:'));
      let resultado;
      
      if (!n2){
        alert(String.fromCodePoint(0x2716) + ' Opção inválida - Digite uma opção válida');
        calculadora();
      }else{
        function somar() {
          resultado = n1 + n2;
          alert(n1 + ' + ' + n2 + ' = ' + resultado);
          novaOperacao();
        }

        function subtrair() {
          resultado = n1 - n2;
          alert(n1 + ' - ' + n2 + ' = ' + resultado);
          novaOperacao();
        }

        function dividir() {
          resultado = n1 / n2;
          alert(n1 + ' / ' + n2 + ' = ' + resultado);
          novaOperacao();
        }

        function multiplicar() {
          resultado = n1 * n2;
          alert(n1 + ' * ' + n2 + ' = ' + resultado);
          novaOperacao();
        }
      }

      function novaOperacao() {
        let opcao = prompt('Deseja fazer uma nova operação?\n 1- Sim\n 2- Não');

        if (opcao == 1) {
          calculadora();
        }else if (opcao == 2) {
          alert('Muito obrigado ' + String.fromCodePoint(0x1F917) + '\nVolte sempre ' + String.fromCodePoint(0x2763));
        }else {
          alert('Opcao invalida');
          novaOperacao();
        }
      }

      /*if (operacao == 1) {
        somar();
      }else if (operacao == 2) {
        subtrair();
      }else if (operacao == 3) {
      dividir();
      }else if (operacao == 4) {
        multiplicar();
      }*/
      
      switch(operacao){
        case 1: 
          somar();
          break;
        case 2: 
          subtrair();
          break;
        case 3: 
          dividir();
          break;
        case 4: 
          multiplicar();
          break;
      }
    }
  }
}

calculadora();
