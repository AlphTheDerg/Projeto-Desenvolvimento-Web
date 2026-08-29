const aluno = {
    nome: "Sandro",
    idade: 27,
    curso: "Eng. Soft",
    formado: true,
    pos: {
        formado: true,
        curso: "Docência Ens. Superior"
    }
}

const aluno2 = {
    nome: "Igor",
    idade: 20,
    curso: "Eng. Soft",
    formado: false,
    pos: undefined
}

console.log("Tipos de referência")
console.log("Objetos")
console.log(aluno)
console.log(aluno2)

console.log("------------------")

console.log("Lista")
const frutas = ["uva", "laranja", "banana", "melancia", "melancia"]
const alunos = [aluno, aluno2]

console.log(frutas)

function printarNome() {
    console.log("Igorxx")
}

function somar(n1, n2) {
    return n1 + n2;
}

const resultado = somar(10, 15);

printarNome()
console.log("Resultado", resultado)

function calcular(f1, f2) {
    return f1() + f2();
}

const result2 = calcular(() => somar(1,2), () => somar(7,0));

console.log(result2);

const vlr1 = "47";
const vlr2 = 47;

console.log("Apenas igual x igual:", vlr1 == vlr2 ? "SIM!" : "NÃO!");
console.log("Igual x igual x igual", vlr1 === vlr2 ? "SIM!" : "NÃO!");

//for (let index = 0; index < frutas.length; index++) {
//    const element = frutas[index];
    
//    console.log(element)
//}

frutas.forEach(fruta => console.log(fruta))

//frutas.forEach(fruta => {
    //processamento
    //return console.log(fruta)
//})

const listaBananas = frutas.map(fruta => "banana");
console.log(listaBananas)
console.log(frutas)

const apenasMelancias = frutas.filter(fruta => fruta != "melancia");

console.log(apenasMelancias)