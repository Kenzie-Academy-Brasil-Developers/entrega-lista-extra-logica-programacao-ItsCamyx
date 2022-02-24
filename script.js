//CALCULA SALARIO E COMISSAO
//declarar parametro salario fixo
// declarar parametro vendas
// declarar
//calcular comissao 3% de até 1200
//calcular comissao 5% acima de 1200 de vendas
// declarar let salario Total dentro de if
function calculateSalary(salarioFixo, vendas) {
  let comissao;
  if (vendas <= 1200) {
    comissao = vendas * 0.03;
    let salarioTotal = salarioFixo + comissao;
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
  } else if (vendas > 1200) {
    comissao = vendas * 0.05;
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
    return " Não consta nenhum dado de comissão! Favor verificar com RH";
  }
}

//Declarar função com parametros saque, salario fixo e vendas

function cashMachine(saque, salarioFixo, vendas) {}
