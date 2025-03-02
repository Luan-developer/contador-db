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

let count = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 0;

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

function atualizarPersonagem() {

    switch (count) {
        case 1:
            h2.textContent = crossover[0].nome;
            personagem.setAttribute("src", crossover[0].src);
            personagem.style.width = crossover[0].largura;
            break;

        case 10:
            h2.textContent = crossover[1].nome;
            personagem.setAttribute("src", crossover[1].src);
            personagem.style.width = crossover[1].largura;
            break;


        case 20:
            h2.textContent = crossover[2].nome;
            personagem.setAttribute("src", crossover[2].src);
            personagem.style.width = crossover[2].largura;
            break;

        case 30:
            h2.textContent = crossover[3].nome;
            personagem.setAttribute("src", crossover[3].src);
            personagem.style.width = crossover[3].largura;
            break;

        case 40:
            h2.textContent = crossover[4].nome;
            personagem.setAttribute("src", crossover[4].src);
            personagem.style.width = crossover[4].largura;
            break;

        case 50:
            h2.textContent = crossover[5].nome;
            personagem.setAttribute("src", crossover[5].src);
            personagem.style.width = crossover[5].largura;
            break;

        case 60:
            h2.textContent = crossover[6].nome;
            personagem.setAttribute("src", crossover[6].src);
            personagem.style.width = crossover[6].largura;
            break;

        case 70:
            h2.textContent = crossover[7].nome;
            personagem.setAttribute("src", crossover[7].src);
            personagem.style.width = crossover[7].largura;
            break;

        case 80:
            h2.textContent = crossover[8].nome;
            personagem.setAttribute("src", crossover[8].src);
            personagem.style.width = crossover[8].largura;
            break;

        case 90:
            h2.textContent = crossover[9].nome;
            personagem.setAttribute("src", crossover[9].src);
            personagem.style.width = crossover[9].largura;
            break;

        case 100:
            h2.textContent = crossover[10].nome;
            personagem.setAttribute("src", crossover[10].src);
            personagem.style.width = crossover[10].largura;
            break;

        case 110:
            h2.textContent = crossover[11].nome;
            personagem.setAttribute("src", crossover[11].src);
            personagem.style.width = crossover[11].largura;
            break;

        case 120:
            h2.textContent = crossover[12].nome;
            personagem.setAttribute("src", crossover[12].src);
            personagem.style.width = crossover[12].largura;
            break;

        case 130:
            h2.textContent = crossover[13].nome;
            personagem.setAttribute("src", crossover[13].src);
            personagem.style.width = crossover[13].largura;
            break;

        case 140:
            h2.textContent = crossover[14].nome;
            personagem.setAttribute("src", crossover[14].src);
            personagem.style.width = crossover[14].largura;
            break;

        case 150:
            h2.textContent = crossover[15].nome;
            personagem.setAttribute("src", crossover[15].src);
            personagem.style.width = crossover[15].largura;
            break;


    }
}

function levelUp() {
    count++;
    localStorage.setItem("level", count);
    level.textContent = count;
    atualizarPersonagem();
}

function removeLevel() {
    count--;
    localStorage.setItem("level", count);
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
function Reset() {
    // Reinicia os valores, mas mantém a imagem atual
    count = 0;
    localStorage.setItem("level", count);
    level.textContent = "0"; // Atualiza o nível no HTML
    atualizarPersonagem(); // Mantém o personagem visível
}


// Atualiza a interface ao carregar a página
level.textContent = count;
atualizarPersonagem();

btnPositive.addEventListener("click", levelUp);
LogoDb.addEventListener("click", Reset);
btnNegative.addEventListener("click", removeLevel);

