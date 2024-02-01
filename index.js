const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRanking(vitoria, derrota) {
    const saldoDeVitorias = vitoria - derrota;
    let nivel;

    if (vitoria < 10) {
        nivel = "Ferro";
    } else if (vitoria >= 11 && vitoria <= 20) {
        nivel = "Bronze";
    } else if (vitoria >= 21 && vitoria <= 50) {
        nivel = "Prata";
    } else if (vitoria >= 51 && vitoria <= 80) {
        nivel = "Ouro";
    } else if (vitoria >= 81 && vitoria <= 90) {
        nivel = "Diamante";
    } else if (vitoria >= 91 && vitoria <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoDeVitorias, nivel };
}

// Exemplo de uso
rl.question('Digite a quantidade de vitórias: ', (vit) => {
    rl.question('Digite a quantidade de derrotas: ', (der) => {
        const { saldoDeVitorias, nivel } = calcularRanking(parseInt(vit), parseInt(der));
        console.log(`O Herói tem um saldo de ${saldoDeVitorias} está no nível de ${nivel}`);
        rl.close();
    });
});
