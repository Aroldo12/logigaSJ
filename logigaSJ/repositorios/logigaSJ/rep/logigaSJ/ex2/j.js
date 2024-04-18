
let saldo, deposito, saque
let o 
let usuario = prompt("Óla, digite sua senha ")

let escolha = Number(prompt(`olá ${usuario} oque você gostaria de fazer\n1) saldo\n2)deposito\n3)Saque`))

saldo = 500


    

switch(escolha){
    case 1:
        alert(`seu saldo atual é de ${saldo} algo mais?`)
    break
    case 2:
     deposito =Number(prompt(`quanto deseja depositar?`))
        saldo = deposito + saldo
        alert(`se saldo atual é de ${saldo} algo mais?`)
    break

    case 3:
        saque =Number(prompt(`quanto deseja sacar?`))
        saldo = saldo - saque
        if(saldo < saque){
        alert("ta maluko?? vai sacar n ")
        }
        else{
        alert(`seu saldo atual é de ${saldo}`)
        }
    break

default:
alert("digite um meio valido")
}

