// Declarando Variaveis
console.log("Olá pequeno gafanhoto")
console.log("Qual boneco deseja escolher para sua primeira missão ?")


let nomesBonecos = ["Cj" , "Sweet" , "Ryder"]
let timeDeBonecos = [
    [ "CJ" , "M" , 1000 , 100],
    [ "Sweet", "M" , 1000],
    [ "Ryder", "M" , 1000]
]

console.log("Eu escolho o boneco " + nomesBonecos[0])



console.log(" O boneco " + timeDeBonecos[0][0] + " é do sexo " +  timeDeBonecos[0][1] + 
" e está no nível " + timeDeBonecos[0][2] + " e tem " + timeDeBonecos[0][3] + " de HP")

console.log("Aperte ENTER para iniciar a missão")


console.log(nomesBonecos[0] + " Entrou no Server")



// Saida
console.log("Bem Vindo " + nomesBonecos[0])




console.log(nomesBonecos[0] + " Vamos para sua primeira missão")

// Cj entra na missão contra um boss

let bossName = "Big Smoke"

console.log(nomesBonecos[0] + " Esse é seu primeiro boss, destrua-o e ganhara muitos poderes")
console.log(bossName + " you pick wrong house fool - muaaaaaaah")     


// usando um pouco de algoritimos

let power = 100;
let UpPower = 50;
let result = power + UpPower
console.log(nomesBonecos[0] + " Voce está com " + power + " pontos de poder, pegue aqui mais 50 pontos de poder agora voce esta com um total de " + result )

console.log("Aperte X e ataque seu opononete!")

let bossPower = 175;
let Hp = 100;
let bossFight = (result + Hp) - bossPower



console.log("Wowo, o poder do seu inmigo é superior ao seu")

console.log("Voce tomou um contra ataque e agora esta com " + bossFight + " de HP")

// usando if else 

console.log("Volte um pouco e quebre o baú da sorte que contem alguns poderes e vamos ver o que podemos ganhar" )

let bauPower = true
let powerUp = 2000

if(bauPower === 'powerUp') {
    powerUp = result + powerUp
}
else{
    console.log("Woww, ganhei " + powerUp + " de poder agora eu consigo atacar o Big Smoke")
    powerUp = "Win"
}


console.log("Sinta a furia do meu poder, haaaaaaaaaaaa")

// usando Switch case

let fala = 1;

switch(fala){
    case 3:
    console.log("Eu ainda estou vivo");
    break;
    case 1:
    console.log("ha! Como voce conseguiu me derrota");
    break;
    case 2:
    console.log("Eu vou voltar");
    break;
}

console.log("Wow, Voce passou de fase")

// usando estruturas de decisao

let lvl = 5001;
let resultLvl = timeDeBonecos[0][2] + lvl

console.log("Meu caro jogado " + nomesBonecos[0] + " voce foi um belo guerreiro e obteve o XP total de " + resultLvl)


let nivel;
if (resultLvl < 1000) {
    nivel = "Ferro";
} else if (resultLvl >= 1001 && resultLvl <= 2000) {
    nivel = "Bronze";
} else if (resultLvl >= 2001 && resultLvl <= 5000) {
    nivel = "Prata";
} else if (resultLvl >= 6001 && resultLvl <= 7000) {
    nivel = "Ouro";
} else if (resultLvl >= 7001 && resultLvl <= 8000) {
    nivel = "Platina";
} else if (resultLvl >= 8001 && resultLvl <= 9000) {
    nivel = "Ascendente";
} else if (resultLvl >= 9001 && resultLvl <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// ##Saída
console.log("O Herói de nome " + nomesBonecos[0] + " está no nível de " + nivel);
