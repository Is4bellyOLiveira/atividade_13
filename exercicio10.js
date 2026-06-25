function verificarPrimo(numero) {
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {

        if (numero % i == 0) {
            divisores++;
        }

    }

    if (divisores == 2) {
        return "Primo";
    } else {
        return "Não Primo";
    }
}

let numero = prompt("Digite um número inteiro positivo:");

console.log(`${numero} é ${verificarPrimo(numero)}`);