let heroi = {
    nome: prompt("Qual é o nome do herói?"),
    experiencia: parseInt(prompt("Qual é a quantidade de experiência do herói?"), 10)
};

let nivel;

if (heroi.experiencia < 1000) {
    nivel = "Ferro";
} else if (heroi.experiencia >= 1001 && heroi.experiencia <= 2000) {
    nivel = "Bronze";
} else if (heroi.experiencia >= 2001 && heroi.experiencia <= 5000) {
    nivel = "Prata";
} else if (heroi.experiencia >= 5001 && heroi.experiencia <= 7000) {
    nivel = "Ouro";
} else if (heroi.experiencia >= 7001 && heroi.experiencia <= 8000) {
    nivel = "Platina";
} else if (heroi.experiencia >= 8001 && heroi.experiencia <= 9000) {
    nivel = "Ascendente";
} else if (heroi.experiencia >= 9001 && heroi.experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + heroi.nome + " está no nível de " + nivel);
