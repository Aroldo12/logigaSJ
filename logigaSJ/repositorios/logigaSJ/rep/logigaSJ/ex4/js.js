


alert("olá digite suas notas e faremos a media")
let media, loop = 0, notas = 0, soma = 0

while (notas != -1) {
 notas = Number(prompt("digite suas notas (uma por vez e digite -1 para para)"))
if(notas != -1){
 soma = soma + notas
 loop++
}
}
media = soma / loop
alert(`sua media é igual a ${media}`)