Exercícios de Laços e Loops em JavaScript
1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor
seja inválido e continue pedindo até que o usuário informe um valor válido.

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
