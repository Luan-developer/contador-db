const btnPositive = document.querySelector(".btn1");
const btnNegative = document.querySelector(".btn2");
const reset = document.getElementById("reset")
const personagem = document.querySelector("img")
const level = document.getElementById("lvl");
const strenght = document.getElementById("str");
let h2 = document.querySelector("h2");
let count = 149;


btnPositive.addEventListener("click", () => {
    const AddLevel = () => {
        level.textContent = count + 1;
        count++;
    }
    const addStrength = () => {
        strenght.textContent = count * 100;
    }
    if (count === 14) {
        personagem.setAttribute("src", "./assets/img/goku-2.png");
        h2.textContent = "Son Goku (Adulto)"
        personagem.style.width = "150px"
    } else if (count === 24) {
        personagem.setAttribute("src", "./assets/img/goku-3.png");
        h2.style.color = "rgb(70, 5, 5)";
        h2.textContent = "Son Goku (Kaioken)"
        personagem.style.width = "200px"
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
        h2.style.color = "blue";
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
});

btnNegative.addEventListener("click", () => {
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
    if (count <= 15) {
        personagem.setAttribute("src", "./assets/img/goku-1.png");
        h2.style.color = "#000"
        h2.textContent = "Son Goku (Criança)"
        personagem.style.width = "150px"
    } else if (count <= 25) {
        personagem.setAttribute("src", "./assets/img/goku-2.png");
        h2.style.color = "#000"
        h2.textContent = "Son Goku (Adulto)"
        personagem.style.width = "150px"
    } else if (count <= 30) {
        personagem.setAttribute("src", "./assets/img/goku-3.png");
        h2.style.color = "rgb(70, 5, 5)";
        h2.textContent = "Son Goku (Kaioken)"
        personagem.style.width = "200px"
    } else if (count <= 40) {
        personagem.setAttribute("src", "./assets/img/goku-4.png");
        h2.style.color = "yellow";
        h2.textContent = "Son Goku (Ssj)"
        personagem.style.width = "200px"
    } else if (count <= 50) {
        personagem.setAttribute("src", "./assets/img/goku-5.png");
        h2.style.color = "yellow";
        h2.textContent = "Son Goku (Ssj2)"
        personagem.style.width = "200px"
    } else if (count <= 60) {
        personagem.setAttribute("src", "./assets/img/goku-7.png");
        h2.style.color = "yellow";
        h2.textContent = "Son Goku (Ssj3)"
        personagem.style.width = "200px"
    } else if (count <= 70) {
        personagem.setAttribute("src", "./assets/img/goku-7.4.png");
        h2.style.color = "red";
        h2.textContent = "Son Goku (Ssj-god)"
        personagem.style.width = "200px"
    } else if (count <= 80) {
        personagem.setAttribute("src", "./assets/img/goku-8.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Ssj-blue)"
        personagem.style.width = "270px"
    } else if (count <= 90) {
        personagem.setAttribute("src", "./assets/img/goku-7.5.png");
        h2.style.color = "red";
        h2.textContent = "Son Goku (Ssj-blue kaioken)"
        personagem.style.width = "200px"
    } else if (count <= 100) {
        personagem.setAttribute("src", "./assets/img/goku-11.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Instinto Superior)"
        personagem.style.width = "200px"
    } else if (count <= 120) {
        personagem.setAttribute("src", "./assets/img/goku-11.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Instinto Superior)"
        personagem.style.width = "200px"
    } else if (count <= 140) {
        personagem.setAttribute("src", "./assets/img/goku-12.png");
        h2.style.color = "blue";
        h2.textContent = "Son Goku (Instinto Superior)"
        personagem.style.width = "200px"
    } else if (count <= 150) {
        personagem.setAttribute("src", "./assets/img/goku-13.png");
        h2.style.color = "#ccc";
        h2.textContent = "Son Goku (Instinto Superior)"
        personagem.style.width = "200px"
    }
    AddLevel();
    addStrength();
});

// Botao em teste
reset.addEventListener("click", () => {
    // Redefine o valor do contador para 0
    count = 0;

    // Atualiza os elementos na interface
    level.innerText = "0";
    strenght.innerText = "0";
    personagem.setAttribute("src", "./assets/img/goku-1.png");
});
