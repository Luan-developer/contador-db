// Selecionando os elementos HTML
const btnPositive = document.querySelector(".btn1");
const btnNegative = document.querySelector(".btn2");
const reset = document.getElementById("reset");
const personagem = document.querySelector("img");
const level = document.getElementById("lvl");
const strenght = document.getElementById("str");
let h2 = document.querySelector("h2");

//variavel que armazena o número do nivel
let count = 14;

alert("Site em andamento")

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
        personagem.setAttribute("src", "./assets/img/goku-4.png");
        h2.style.color = "yellow";
        h2.textContent = "Son Goku (Ssj)"
        personagem.style.width = "200px"
    } else if (count === 39) {
        personagem.setAttribute("src", "./assets/img/goku-5.png");
        h2.style.color = "yellow";
        h2.textContent = "Son Goku (Ssj2)"
        personagem.style.width = "200px"
    } else if (count === 49) {
        personagem.setAttribute("src", "./assets/img/goku-7.png");
        h2.style.color = "yellow";
        h2.textContent = "Son Goku (Ssj3)"
        personagem.style.width = "200px"
    } else if (count === 59) {
        personagem.setAttribute("src", "./assets/img/goku-7.4.png");
        h2.style.color = "red";
        h2.textContent = "Son Goku (Ssj-god)"
        personagem.style.width = "200px"
    } else if (count === 69) {
        personagem.setAttribute("src", "./assets/img/goku-8.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Ssj-blue)"
        personagem.style.width = "270px"
    }
    else if (count === 79) {
        personagem.setAttribute("src", "./assets/img/goku-7.5.png");
        h2.style.color = "red";
        h2.textContent = "Son Goku (Ssj-blue kaioken)"
        personagem.style.width = "200px"
    } else if (count === 99) {
        personagem.setAttribute("src", "./assets/img/goku-11.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Instinto Superior)"
        personagem.style.width = "200px"
    }
    else if (count === 119) {
        personagem.setAttribute("src", "./assets/img/goku-12.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Instinto Superior)"
        personagem.style.width = "200px"
    } else if (count === 139) {
        personagem.setAttribute("src", "./assets/img/goku-13.png");
        h2.style.color = "#999";
        h2.textContent = "Son Goku (Instinto Superior)"
        personagem.style.width = "200px"
    }
    else if (count === 149) {
        personagem.setAttribute("src", "./assets/img/goku-14.png");
        h2.style.color = "#ccc";
        h2.textContent = "Son Goku (Instinto Superior Perfeito)"
        personagem.style.width = "200px"
    }
    AddLevel();
    addStrength();
}



btnPositive.addEventListener("click", LevelUp);