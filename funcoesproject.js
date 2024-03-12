// CALCULADORA DE RANKEADAS
let nivel = calcularSaldo(0, 5)
let ranking = ""

function calcularSaldo(vitorias, derrotas) {
    let saldo = (vitorias - derrotas)
    return saldo
}
    if (nivel < 10){
        ranking = "Ferro"
    }else if(nivel >= 11 && nivel <=20){
        ranking = "Bronze"
    }else if(nivel>= 21 && nivel <= 50){
        ranking = "Prata"
    }else if(nivel >= 51 && nivel <= 80){
        ranking = "Ouro"
    }else if( nivel >= 81 && nivel <= 90){
        ranking = "Diamante"
    }else if(nivel >= 91 && nivel <= 100){
        ranking = "Lendário"
    }else if(nivel >= 101)
        ranking = "Imortal"

console.log("O Héroi tem saldo de " + nivel + " está no nível " + ranking)