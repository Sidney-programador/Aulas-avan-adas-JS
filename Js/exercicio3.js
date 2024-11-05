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
