let quantidade, desconto, result

let escolha = Number(prompt("Fala dog bão? iai tu ta ligado q o bglho aqui é 12,50 né ent escolhe ai se tu faz parte de uma desas porra ai\n1) pikadasgalaxia(20% de desconto e frete alem de ir a jato é gratis papai)\n2) boladasgalaxia(esse te da 20% de desconto)\n3) djojodas ideia(esse qui é o mais bostinha é só 12% de desconto)\n4) fudidinhodasideia"))

switch (escolha) {
    case 1:
        quantidade = Number(prompt("iai meu rei quantos bghlho tu quer? "))
        result = quantidade * 0.20
        alert(`ta ai patrão esse é o preço do bghlho ${result}`)

        break;
    case 2:
        quantidade = Number(prompt("iai meu rei quantos bghlho tu quer? "))
        result = (quantidade + 12.50)*0.20
        alert(`ta ai patrão esse é o preço do bghlho ${result}`)

        break;
    case 3:
        quantidade = Number(prompt("iai meu rei quantos bghlho tu quer? "))
        result = (quantidade + 12.50)*0.12 
        alert(`ta ai patrão esse é o preço do bghlho ${result}`)

        break;
    case 4:
        quantidade = Number(prompt("iai meu rei quantos bghlho tu quer? "))
        result = (quantidade + 12.50)
        alert(`ta ai patrão esse é o preço do bghlho ${result}`)

        break;

    default:
        alert("escolhe certo mazanza do krl")
        break;
}