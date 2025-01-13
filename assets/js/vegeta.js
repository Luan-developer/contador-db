// Selecionando os elementos HTML
const btnPositive = document.querySelector(".btn1");
const btnNegative = document.querySelector(".btn2");
const reset = document.getElementById("reset");
const personagem = document.querySelector("#guerreiro");
const level = document.getElementById("lvl");
const strenght = document.getElementById("str");
let h2 = document.querySelector("h2");

//variavel que armazena o número do nivel
let count =0;


function LevelUp() {
    const AddLevel = () => {
        level.textContent = count + 1;
        count++;
    }
    const addStrength = () => {
        strenght.textContent = count * 100;
    }
    if (count === 0) {
        level.innerText = "0";
        strenght.innerText = "0";
    }
    else if (count === 14) {
        personagem.setAttribute("src", "./assets/img/vegeta-img/vegeta-adulto.png");
        h2.textContent = "Vegeta (Adulto)"
        personagem.style.width = "500px"
        personagem.style.height = "350px"
    } else if (count === 24) {
        personagem.setAttribute("src", "./assets/img/vegeta-img/vegeta-ssj1.png");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Vegeta (Ssj)";
        personagem.style.width = "200px";
    } else if (count === 29) {
        personagem.setAttribute("src", "./assets/img/vegeta-img/vegeta-majin.png");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Vegeta (Ssj majin)"
        personagem.style.width = "200px"
    } else if (count === 49) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-ssj2.jpg");
        h2.style.color = "rgb(191, 202, 27)";
        h2.textContent = "Vegeta (Ssj2)"
        personagem.style.width = "200px"

    } else if (count === 59) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-god.png");
        h2.style.color = "red";
        h2.textContent = "Vegeta (Ssj-god)"
        personagem.style.width = "150px"
    } else if (count === 79) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-blue.png");
        h2.style.color = "blue";
        h2.textContent = "Vegeta (Ssj-blue)"
        personagem.style.width = "180px"
    } else if (count === 99) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-blue-ev.png");
        h2.style.color = "blue";
        h2.textContent = "Vegeta (ISsj-blue evolution)"
        personagem.style.width = "200px"
    }
    else if (count === 119) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-ego.png");
        h2.style.color = "purple";
        h2.textContent = "Vegeta (Ultra Ego)"
        personagem.style.width = "200px"
    }
    else if (count >= 149) {
        personagem.setAttribute("src", "/assets/img/vegeta-img/vegeta-ultra-ego.png");
        h2.style.color = "purple";
        h2.textContent = "Vegeta (Ultra Ego)"
        personagem.style.width = "250px"
    }
    AddLevel();
    addStrength();
} function RemoveLevel() {
    const AddLevel = () => {
        level.textContent = count - 1;
        count--;
        if (count <= 0) {
            level.textContent = 0;
            strenght.textContent = 0;
            strenght.innerText = "0";
        }
    }
    const addStrength = () => {
        strenght.textContent = count * 80;
    }
    AddLevel();
    addStrength();
}


btnPositive.addEventListener("click", LevelUp);
btnNegative.addEventListener("click", RemoveLevel);

function trocarPersonagem() {
    const select = document.getElementById("escolha-personagem");
    const url = select.value; // Obtém o valor da opção selecionada
    if (url) {
        window.location.href = url; // Redireciona para a página correspondente
    }
}