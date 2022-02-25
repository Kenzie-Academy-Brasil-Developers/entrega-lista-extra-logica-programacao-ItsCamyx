//CALCULA SALARIO E COMISSAO
//declarar parametro salario fixo
// declarar parametro vendas
// declarar
//calcular comissao 3% de até 1200
//calcular comissao 5% acima de 1200 de vendas
// declarar let salario Total dentro de if
function calculateSalary(salarioFixo, vendas, mostrarMensagem) {
  let comissao;
  if (vendas <= 1200) {
    comissao = vendas * 0.03;
    let salarioTotal = salarioFixo + comissao;
    if (mostrarMensagem) {
      return (
        "Seu salário é " +
        "R$ " +
        salarioFixo +
        ", sua comissão é " +
        "R$ " +
        comissao +
        ", O total do mês é " +
        "R$ " +
        salarioTotal
      );
    } else {
      return salarioTotal;
    }
  } else if (vendas > 1200) {
    comissao = vendas * 0.08;
    if (mostrarMensagem) {
      return (
        "Seu salário é " +
        "R$ " +
        salarioFixo +
        ", sua comissão é " +
        "R$ " +
        comissao +
        ", O total do mês é " +
        "R$ " +
        salarioTotal
      );
    } else {
      return salarioTotal;
    }
  } else {
    return " Não consta nenhum dado de comissão! Favor verificar com RH";
  }
}

//Declarar função com parametros saque, salario fixo e vendas
// Calcula quantidad d enotas de cada valor necessária para o saque
// variável que recebe quantidade restante do salário pós saque
//Retorne os resultado dos dois calculos em formato de string.
//Exemplo: Notas sacadas: 2 notas de R$200, 1 nota de R$100, 1 nota de R$50, Saldo Atual: R$500

function cashMachine(saque, salarioFixo, vendas) {
  const total = calculateSalary(salarioFixo, vendas, false);
  if (saque > total) {
    return "Dinheiro insuficiente para este saque. Por favor, tente um igual ou menor que seu saldo.";
  }
  let mensagem = "NotasSacadas: ";
  let saqueRestante = saque;
  let quantidade200 = 0;
  let quantidade100 = 0;
  let quantidade50 = 0;
  let quantidade20 = 0;
  let quantidade10 = 0;
  let quantidade5 = 0;
  let quantidade2 = 0;
  let quantidade1 = 0;

  if (saqueRestante > 0) {
    quantidade200 = Math.floor(saqueRestante / 200);
    if (quantidade200 > 0) {
      saqueRestante = saqueRestante - quantidade200 * 200;
      mensagem += quantidade200 + " notas de R$200, ";
    }
  }

  if (saqueRestante > 0) {
    quantidade100 = Math.floor(saqueRestante / 100);
    if (quantidade100 > 0) {
      saqueRestante -= quantidade100 * 100;
      mensagem += quantidade100 + " notas de R$100, ";
    }
  }

  if (saqueRestante > 0) {
    quantidade50 = Math.floor(saqueRestante / 50);
    if (quantidade50 > 0) {
      saqueRestante -= quantidade50 * 50;
      mensagem += quantidade50 + " notas de R$50, ";
    }
  }

  if (saqueRestante > 0) {
    quantidade20 = Math.floor(saqueRestante / 20);
    if (quantidade20 > 0) {
      saqueRestante -= quantidade20 * 20;
      mensagem += quantidade20 + " notas de R$20, ";
    }
  }

  if (saqueRestante > 0) {
    quantidade10 = Math.floor(saqueRestante / 10);
    if (quantidade10 > 0) {
      saqueRestante -= quantidade10 * 10;
      mensagem += quantidade10 + " notas de R$10, ";
    }
  }

  if (saqueRestante > 0) {
    quantidade5 = Math.floor(saqueRestante / 5);
    if (quantidade5 > 0) {
      saqueRestante -= quantidade5 * 5;
      mensagem += quantidade5 + " notas de R$5, ";
    }
  }

  if (saqueRestante > 0) {
    quantidade2 = Math.floor(saqueRestante / 2);
    if (quantidade2 > 0) {
      saqueRestante -= quantidade2 * 2;
      mensagem += quantidade2 + " notas de R$2, ";
    }
  }
  if (saqueRestante > 0) {
    quantidade1 = Math.floor(saqueRestante / 1);
    if (quantidade1 > 0) {
      saqueRestante -= quantidade1 * 1;
      mensagem += quantidade1 + " notas de R$1, ";
    }
  }

  const saldoAtual = total - saque;
  mensagem += "Saldo Atual: " + saldoAtual;
  return mensagem;
}

function calculateStock(atualEst, maxEst, minEst) {
  mediaEst = (maxEst + minEst) / 2;
  if (atualEst >= mediaEst) {
    return "Não efetuar compra";
  } else {
    return "Efetuar compra";
  }
}

function calculateAge(anoNasc, anoAtual) {
  let idadeAno = anoAtual - anoNasc;
  console.log("Sua idade em anos é: " + idadeAno);
  let idadeMes = idadeAno * 12;
  console.log("Sua idade em meses é: " + idadeMes);
  let idadeDia = idadeAno * 365;
  console.log("Sua idade em dias são: " + idadeDia);
  let idadeSem = Math.round(idadeDia / 7);
  console.log("Sua idade em semanas são: " + idadeSem);
}

function getDiagonal(arr) {
  const n = arr.length;
  const output = [];
  for (i = 0; i < n; i++) {
    output.push(arr[i][i]);
    //output.push recebe arr[0][0],[1][1],[2][2]
  }
  return output;
}
