const valorConta = 100;

const percentualGorjeta = 15;

function calcularGorjeta(n1, n2){
    return n1 * (n2 / 100);
}

const valorGorjeta = calcularGorjeta(valorConta, percentualGorjeta);

function calcularValorTotal(n1, n2){
    return n1 + n2;
}

const valorTotal = calcularValorTotal(valorConta, valorGorjeta);

console.log("Valor da conta: R$" + valorConta)
console.log("Gorjeta (" + percentualGorjeta + "%): R$" + valorGorjeta)
console.log("Total a pagar: R$" + valorTotal)