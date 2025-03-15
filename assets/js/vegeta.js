
// Selecionando os elementos HTML
const btnPositive = document.querySelector(".btn1");
const btnNegative = document.querySelector(".btn2");
const reset = document.getElementById("reset");
const personagem = document.querySelector("#guerreiro");
const level = document.getElementById("lvl");
const strenght = document.getElementById("str");
let h2 = document.querySelector("h2");
const LogoDb = document.getElementById("db-logo");
const container = document.getElementById("container");
const body = document.querySelector('body');

// Variável que armazena o número do nível
let count = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 0;

// Função para salvar estado
function salvarEstado() {
    localStorage.setItem("level", count);
    localStorage.setItem("strength", strenght.textContent);
    localStorage.setItem("characterSrc", personagem.getAttribute("src"));
    localStorage.setItem("characterName", h2.textContent);
    localStorage.setItem("characterWidth", personagem.style.width);
    localStorage.setItem("characterHeight", personagem.style.height || "auto");
    localStorage.setItem("characterColor", h2.style.color || "#000");
}

// Função para carregar estado
function carregarEstado() {
    if (localStorage.getItem("level")) {
        count = parseInt(localStorage.getItem("level"));
        level.textContent = count;
        strenght.textContent = localStorage.getItem("strength");
        personagem.setAttribute("src", localStorage.getItem("characterSrc"));
        h2.textContent = localStorage.getItem("characterName");
        personagem.style.width = localStorage.getItem("characterWidth");
        personagem.style.height = localStorage.getItem("characterHeight");
        h2.style.color = localStorage.getItem("characterColor");
    }
}

// Modificação nas funções LevelUp, RemoveLevel e Reset para salvar o estado

function LevelUp() {
    const AddLevel = () => {
        level.textContent = count + 1;
        count++;
    };
    const addStrength = () => {
        strenght.textContent = count * 100;
    };
    if (count === 0) {
        level.innerText = "0";
        strenght.innerText = "0";
    } else if (count === 14) {
        personagem.setAttribute("src", "./assets/img/vegeta-img/vegeta-adulto.png");
        h2.textContent = "Vegeta (Adulto)";
        personagem.style.width = "500px";
        personagem.style.height = "350px";
    } else if (count === 24) {
        personagem.setAttribute("src", "./assets/img/vegeta-img/vegeta-ssj1.png");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Vegeta (Ssj)";
        personagem.style.width = "200px";
    } else if (count === 29) {
        personagem.setAttribute("src", "./assets/img/vegeta-img/vegeta-majin.png");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Vegeta (Ssj majin)";
        personagem.style.width = "200px";
    } else if (count === 49) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-ssj2.jpg");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Vegeta (Ssj2)";
        personagem.style.width = "200px";
    } else if (count === 59) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-god.png");
        h2.style.color = "red";
        h2.textContent = "Vegeta (Ssj-god)";
        personagem.style.width = "150px";
    } else if (count === 79) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-blue.png");
        h2.style.color = "blue";
        h2.textContent = "Vegeta (Ssj-blue)";
        personagem.style.width = "180px";
    } else if (count === 99) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-blue-ev.png");
        h2.style.color = "blue";
        h2.textContent = "Vegeta (ISsj-blue evolution)";
        personagem.style.width = "200px";
    } else if (count === 119) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-ego.png");
        h2.style.color = "purple";
        h2.textContent = "Vegeta (Ultra Ego)";
        personagem.style.width = "200px";
    } else if (count >= 149) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-ultra-ego.png");
        h2.style.color = "purple";
        h2.textContent = "Vegeta (Ultra Ego)";
        personagem.style.width = "250px";
    }
    AddLevel();
    addStrength();
    salvarEstado(); // Salva o estado ao subir de nível
}

function RemoveLevel() {
    const AddLevel = () => {
        level.textContent = count - 1;
        count--;
        if (count <= 0) {
            level.textContent = 0;
            strenght.textContent = 0;
            strenght.innerText = "0";
        }
    };
    const addStrength = () => {
        strenght.textContent = count * 80;
    };
    AddLevel();
    addStrength();
    salvarEstado(); // Salva o estado ao descer de nível
}

function Reset() {
    // Reinicia os valores
    count = 0;
    level.textContent = "0"; // Atualiza o nível no HTML
    strenght.textContent = "0"; // Atualiza a força no HTML

    // Volta o personagem para o estado inicial
    personagem.setAttribute("src", "./assets/img/vegeta-img/vegeta-kid.png");
    h2.textContent = "Vegeta (Criança)";
    personagem.style.width = "175px";
    h2.style.color = "#000";

    salvarEstado(); // Salva o estado ao resetar
}

// Adiciona eventos aos botões
btnPositive.addEventListener("click", LevelUp);
btnNegative.addEventListener("click", RemoveLevel);
LogoDb.addEventListener("click", Reset);

// Carrega o estado ao carregar a página
carregarEstado();








function trocarPersonagem() {
    const select = document.getElementById("escolha-personagem");
    const url = select.value; // Obtém o valor da opção selecionada
    if (url) {
        window.location.href = url; // Redireciona para a página correspondente
    }
}