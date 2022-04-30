function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao:\n 1- Somar\n 2- Subtrair\n 3- Dividir\n 4- Multiplicar'));

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    function somar() {
        resultado = n1 + n2;
        alert(n1 + ' + ' + n2 + ' = ' + resultado);
    }

    if (operacao == 1)
    {
        somar();
    }
    else if (operacao == 2)
    {
        subtrair();
    }
    else if (operacao == 3)
    {
        dividir();
    }
    else if (operacao == 4)
    {
        multiplicar();
    }
}

calculadora();

