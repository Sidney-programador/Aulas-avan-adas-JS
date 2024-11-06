//12. Altere o programa anterior para mostrar no final a soma dos números.

// Solicita os dois números inteiros ao usuário
let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

// Verifica qual é o menor e qual é o maior número para o intervalo
let inicio = Math.min(numero1, numero2);
let fim = Math.max(numero1, numero2);

// Exibe os números no intervalo
let resultado = "Números no intervalo: ";
for (let i = inicio + 1; i < fim; i++) {
    resultado += i + " ";
}

// Exibe o resultado
alert(resultado);

13. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro
entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser
conforme o exemplo abaixo:
a. Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
b. Como fazer a tabuada

// Solicita ao usuário o número para gerar a tabuada
let numero = parseInt(prompt("Digite um número inteiro entre 1 e 10 para ver sua tabuada:"));

// Verifica se o número está entre 1 e 10
if (numero >= 1 && numero <= 10) {
    let resultado = `Tabuada de ${numero}:\n`;
    
    // Laço para gerar a tabuada
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} X ${i} = ${numero * i}\n`;
    }
    
    // Exibe a tabuada
    alert(resultado);
} else {
    alert("Por favor, insira um número entre 1 e 10.");
}

14. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro
número elevado ao segundo número. Não utilize a função de potência da linguagem.15. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números
pares e a quantidade de números ímpares.

    // Solicita a base e o expoente ao usuário
let base = parseInt(prompt("Digite a base (número):"));
let expoente = parseInt(prompt("Digite o expoente (número):"));

// Inicializa o resultado como 1 (qualquer número elevado a 0 é 1)
let resultado = 1;

// Realiza o cálculo da potência utilizando multiplicação repetida
for (let i = 1; i <= expoente; i++) {
    resultado *= base;
}

// Exibe o resultado
alert(`${base} elevado a ${expoente} é igual a ${resultado}`);


//15. Faça um programa que peça 10 números inteiros, 
//calcule e mostre a quantidade de números pares e a quantidade de números ímpares.
var numero;
for (var i = 0; i<10;i++){
numero = parseInt(prompt("peça um numero"));

if(numero % 2 === 0 ){
  document.write("é numero par",)
}
}
