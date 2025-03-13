//Variáveis: Lista de heróis com nome e xp
let herois = [
  {nome: "Herói Supremo", xp: 800},
  {nome: "Guerreiro Estrelar", xp: 1500},
  {nome: "Mestre das Sombras", xp: 2200},
  {nome: "Titã de Aço", xp:3500},
  {nome: "Lenda Celestial", xp: 5000 },
  {nome: "Filho do Trovão", xp: 8200 },
  {nome: "Senhor das Chamas", xp: 9300 },
  {nome: "Arcanjo da Justiça", xp: 10500 }
];

// Estrutura de Decisão: Função para classificar o herói baseado no XP
function classificarHeroi(xp) {
    let patente = ""; // Variável para armazenar a patente
    if (xp < 1000) {
        return "ferro";
    } else if (xp >= 1001 && xp <=2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <=5000) {
        return "Prata";  
    } else if (xp >= 6001 && xp <=7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <=8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <=9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <=10000) {
        return "Imotal";
    } else {
        return "Radiante";
    }   

    return patente; // Retorna a patente do herói

    
}

// Laço de Repetição: Percorre a lista de heróis
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome; // Variável para armazenar o nome
    let xp = herois[i].xp; // Variável para armazenar o XP
    let patente = classificarHeroi(xp); // Chama a função para obter a patente


// Saída final usando operadores de concatenação (+) para exibir as informações
console.log("Nome: " + nome + ",xp: " + xp + ",Patente: " + patente);

}
