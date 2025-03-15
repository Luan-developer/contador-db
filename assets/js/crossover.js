const btnPositive = document.querySelector(".btn1");
const btnNegative = document.querySelector(".btn2");
const reset = document.getElementById("reset");
const personagem = document.querySelector("#guerreiro");
const level = document.getElementById("lvl");
let h2 = document.querySelector("h2");
const body = document.querySelector(".body");
const LogoDb = document.getElementById("db-logo");
const container = document.querySelector(".container");

let count = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 0;

// Lista de índices usados, salva no localStorage
let usedIndices = localStorage.getItem("usedIndices")
    ? JSON.parse(localStorage.getItem("usedIndices"))
    : [];

const crossover = [
    { nome: "Sonic", src: "./assets/img/crossover/sonic.png", largura: "250px" },
    { nome: "Pica-Pau", src: "./assets/img/crossover/pica-pau.png", largura: "290px" },
    { nome: "Squirtle, Bulbasaur, Chamander", src: "./assets/img/crossover/pkm.png", largura: "350px" },
    { nome: "Zatch Bell", src: "./assets/img/crossover/zatch-bell.png", largura: "350px" },
    { nome: "Patati e Patatá", src: "./assets/img/crossover/patati-patata.png", largura: "450px" },
    { nome: "Gon", src: "./assets/img/crossover/gon.png", largura: "380px" },
    { nome: "Goku Ssj 4", src: "./assets/img/crossover/gokussj4.png", largura: "350px" },
    { nome: "Luffy Gear 5", src: "./assets/img/crossover/luffy-gear5.png", largura: "350px" },
    { nome: "Rock Lee", src: "./assets/img/crossover/rock-lee.png", largura: "250px" },
    { nome: "Jackie-chan", src: "./assets/img/crossover/jack-chan.png", largura: "450px" },
    { nome: "Finn", src: "./assets/img/crossover/finn.png", largura: "280px" },
    { nome: "Shrek", src: "./assets/img/crossover/shrek.png", largura: "300px" },
    { nome: "Gato de Botas", src: "./assets/img/crossover/gato-de-botas.png", largura: "300px" },
    { nome: "Yusuke", src: "./assets/img/crossover/yusuke.png", largura: "300px" },
    { nome: "Mickey", src: "./assets/img/crossover/mickey.png", largura: "220px" },
    { nome: "Ippo", src: "./assets/img/crossover/ippo.png", largura: "350px" },
];

// Função para gerar um índice aleatório sem repetir
function getRandomCharacterIndex() {
    const availableIndices = crossover.map((_, index) => index).filter(index => !usedIndices.includes(index));
    if (availableIndices.length === 0) {
        usedIndices = []; // Reinicia se todos os personagens já foram exibidos
        localStorage.setItem("usedIndices", JSON.stringify(usedIndices));
    }
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    usedIndices.push(randomIndex); // Adiciona o índice à lista de usados
    localStorage.setItem("usedIndices", JSON.stringify(usedIndices)); // Salva no localStorage
    return randomIndex;
}

function atualizarPersonagem() {
    // Calcula o intervalo atual com base no nível
    const nivelAtual = Math.floor(count / 10);

    if (nivelAtual > 0) {
        if (count % 10 === 0 && localStorage.getItem("characterIndex") === null) {
            // Define um novo personagem aleatório apenas ao atingir múltiplos de 10
            const randomIndex = getRandomCharacterIndex();
            localStorage.setItem("characterIndex", randomIndex); // Salva o índice atual
        }

        // Recupera o índice atual do personagem
        const currentCharacterIndex = localStorage.getItem("characterIndex")
            ? parseInt(localStorage.getItem("characterIndex"))
            : null;

        const personagemAtual = crossover[currentCharacterIndex];
        if (personagemAtual) {
            h2.textContent = personagemAtual.nome;
            personagem.setAttribute("src", personagemAtual.src);
            personagem.style.width = personagemAtual.largura;
        }
    } else {
        // Personagem inicial padrão
        h2.textContent = "??????????";
        personagem.setAttribute("src", "./assets/img/crossover/interrogacao.png");
        personagem.style.width = "300px";
    }
}

function levelUp() {
    count++;
    if (count % 10 === 0) {
        // Reseta o índice para disparar a escolha de um novo personagem
        localStorage.removeItem("characterIndex");
    }
    localStorage.setItem("level", count);
    level.textContent = count;
    atualizarPersonagem();
}

function removeLevel() {
    if (count > 0) {
        count--;
        localStorage.setItem("level", count);
        level.textContent = count;
        atualizarPersonagem();
    }
}

function Reset() {
    // Reinicia o nível e o personagem atual
    count = 0;
    usedIndices = [];
    localStorage.setItem("level", count);
    localStorage.setItem("usedIndices", JSON.stringify(usedIndices));
    localStorage.removeItem("characterIndex");
    level.textContent = count;
    atualizarPersonagem();
}

function trocarPersonagem() {
    const select = document.getElementById("escolha-personagem");
    const url = select.value; // Obtém o valor da opção selecionada
    if (url) {
        window.location.href = url; // Redireciona para a página correspondente
    }
}

// Atualiza a interface ao carregar a página
level.textContent = count;
atualizarPersonagem();

// Adiciona eventos aos botões
btnPositive.addEventListener("click", levelUp);
btnNegative.addEventListener("click", removeLevel);
LogoDb.addEventListener("click", Reset);
