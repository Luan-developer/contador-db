// Selecionando os elementos HTML
const btnPositive = document.querySelector(".btn1");
const btnNegative = document.querySelector(".btn2");
const reset = document.getElementById("reset");
const personagem = document.querySelector("#guerreiro");
const level = document.getElementById("lvl");
const strenght = document.getElementById("str");
let h2 = document.querySelector("h2");
const body = document.querySelector(".body");
const LogoDb = document.getElementById("db-logo");
const container = document.querySelector(".container");

// Variável que armazena o número do nível
let count = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 0;

// Função para salvar estado
function salvarEstado() {
    localStorage.setItem("level", count);
    localStorage.setItem("strength", strenght.textContent);
    localStorage.setItem("characterSrc", personagem.getAttribute("src"));
    localStorage.setItem("characterName", h2.textContent);
    localStorage.setItem("characterWidth", personagem.style.width);
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
        h2.style.color = localStorage.getItem("characterColor");
    }
}

// Função para aumentar o nível do personagem
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
        personagem.setAttribute("src", "./assets/img/goku-2.png");
        h2.textContent = "Son Goku (Adulto)";
        personagem.style.width = "150px";
        container.style.color = "#000";
    } else if (count === 24) {
        personagem.setAttribute("src", "./assets/img/goku-3.png");
        h2.style.color = "rgb(70, 5, 5)";
        h2.textContent = "Son Goku (Kaioken)";
        personagem.style.width = "200px";
    } else if (count === 29) {
        personagem.setAttribute("src", "./assets/img/goku-4.png");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Son Goku (Ssj)";
        personagem.style.width = "180px";
    } else if (count === 39) {
        personagem.setAttribute("src", "./assets/img/goku-5.png");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Son Goku (Ssj2)";
        personagem.style.width = "200px";
    } else if (count === 49) {
        personagem.setAttribute("src", "./assets/img/goku-7.png");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Son Goku (Ssj3)";
        personagem.style.width = "200px";
    } else if (count === 59) {
        personagem.setAttribute("src", "./assets/img/goku-7.4.png");
        h2.style.color = "red";
        h2.textContent = "Son Goku (Ssj-god)";
        personagem.style.width = "200px";
    } else if (count === 69) {
        personagem.setAttribute("src", "./assets/img/goku-8.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Ssj-blue)";
        personagem.style.width = "270px";
    } else if (count === 79) {
        personagem.setAttribute("src", "./assets/img/goku-7.5.png");
        h2.style.color = "red";
        h2.textContent = "Son Goku (Ssj-blue kaioken)";
        personagem.style.width = "200px";
    } else if (count === 99) {
        personagem.setAttribute("src", "./assets/img/goku-11.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Instinto Superior)";
        personagem.style.width = "200px";
    } else if (count === 119) {
        personagem.setAttribute("src", "./assets/img/goku-12.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Instinto Superior)";
        personagem.style.width = "200px";
    } else if (count === 139) {
        personagem.setAttribute("src", "./assets/img/goku-13.png");
        h2.style.color = "#999";
        h2.textContent = "Son Goku (Instinto Superior)";
        personagem.style.width = "200px";
    } else if (count === 149) {
        personagem.setAttribute("src", "./assets/img/goku-14.png");
        h2.style.color = "#ccc";
        h2.textContent = "Son Goku (Instinto Superior Perfeito)";
        personagem.style.width = "200px";
    }
    AddLevel();
    addStrength();
    salvarEstado();
}

// Função para diminuir o nível do personagem
function RemoveLevel() {
    const AddLevel = () => {
        level.textContent = count - 1;
        count--;
        if (count <= 0) {
            level.textContent = 0;
            strenght.textContent = 0;
            strenght.innerText = "0";
            personagem.setAttribute("src", "./assets/img/goku-1.png");
            h2.style.color = "#000";
            h2.textContent = "Son Goku (Criança)";
            personagem.style.width = "175px";
            container.style.color = "#000";
        }
    };
    const addStrength = () => {
        strenght.textContent = count * 80;
    };
    // Atualiza a imagem e texto para os intervalos de nível abaixo do limite
    if (count > 0) {
        if (count < 14) {
            personagem.setAttribute("src", "./assets/img/goku-1.png");
            h2.style.color = "#000";
            h2.textContent = "Son Goku (Criança)";
            personagem.style.width = "175px";
            container.style.color = "#000";
        } else if (count < 24) {
            personagem.setAttribute("src", "./assets/img/goku-2.png");
            h2.style.color = "#000";
            h2.textContent = "Son Goku (Adulto)";
            personagem.style.width = "150px";
            container.style.color = "#000";
        } else if (count < 29) {
            personagem.setAttribute("src", "./assets/img/goku-3.png");
            h2.style.color = "rgb(70, 5, 5)";
            h2.textContent = "Son Goku (Kaioken)";
            personagem.style.width = "200px";
        } else if (count < 39) {
            personagem.setAttribute("src", "./assets/img/goku-4.png");
            h2.style.color = "rgb(191, 202, 27)";
            h2.textContent = "Son Goku (Ssj)";
            personagem.style.width = "180px";
        } else if (count < 49) {
            personagem.setAttribute("src", "./assets/img/goku-5.png");
            h2.style.color = "rgb(191, 202, 27)";
            h2.textContent = "Son Goku (Ssj2)";
            personagem.style.width = "200px";
        } else if (count < 59) {
            personagem.setAttribute("src", "./assets/img/goku-7.png");
            h2.style.color = "rgb(191, 202, 27)";
            h2.textContent = "Son Goku (Ssj3)";
            personagem.style.width = "200px";
        } else if (count < 69) {
            personagem.setAttribute("src", "./assets/img/goku-7.4.png");
            h2.style.color = "red";
            h2.textContent = "Son Goku (Ssj-god)";
            personagem.style.width = "200px";
        } else if (count < 79) {
            personagem.setAttribute("src", "./assets/img/goku-8.png");
            h2.style.color = "blue";
            h2.textContent = "Son Goku (Ssj-blue)";
            personagem.style.width = "270px";
        } else if (count < 99) {
            personagem.setAttribute("src", "./assets/img/goku-7.5.png");
            h2.style.color = "red";
            h2.textContent = "Son Goku (Ssj-blue kaioken)";
            personagem.style.width = "200px";
        } else if (count < 119) {
            personagem.setAttribute("src", "./assets/img/goku-11.png");
            h2.style.color = "blue";
            h2.textContent = "Son Goku (Instinto Superior)";
            personagem.style.width = "200px";
        } else if (count < 139) {
            personagem.setAttribute("src", "./assets/img/goku-12.png");
            h2.style.color = "blue";
            h2.textContent = "Son Goku (Instinto Superior)";
            personagem.style.width = "200px";
        } else if (count < 149) {
            personagem.setAttribute("src", "./assets/img/goku-13.png");
            h2.style.color = "#999";
            h2.textContent = "Son Goku (Instinto Superior)";
            personagem.style.width = "200px";
        }
    }
    AddLevel();
    addStrength();
    salvarEstado();
}

// Função para resetar o personagem e níveis
function Reset() {
    count = 0;
    level.textContent = "0";
    strenght.textContent = "0";

    personagem.setAttribute("src", "./assets/img/goku-1.png");
    h2.textContent = "Son Goku (Criança)";
    h2.style.color = "#000";
    container.style.color = "#000";
    personagem.style.width = "175px";
    salvarEstado();
}

// Eventos que chamam as suas devidas funções
btnPositive.addEventListener("click", LevelUp);
btnNegative.addEventListener("click", RemoveLevel);
LogoDb.addEventListener("click", Reset);

// Carrega o estado ao carregar a página
carregarEstado();

// Função para trocar de personagem com redirecionamento
function trocarPersonagem() {
    const select = document.getElementById("escolha-personagem");
    const url = select.value;
    if (url) {
        window.location.href = url;
    }
}

