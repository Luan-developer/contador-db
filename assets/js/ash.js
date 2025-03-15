// Selecionando os elementos HTML
const btnPositive = document.querySelector(".btn1");
const btnNegative = document.querySelector(".btn2");
const reset = document.getElementById("reset");
const personagem = document.querySelector("#guerreiro");
const level = document.getElementById("lvl");
const strenght = document.getElementById("str");
let h2 = document.querySelector("h2");
const body = document.querySelector(".body");
const LogoPkm = document.getElementById("logo-pkm");

// Variáveis que armazenam o número do nível e os índices dos Pokémon já exibidos
let count = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 0;
let usedIndices = localStorage.getItem("usedIndices")
    ? JSON.parse(localStorage.getItem("usedIndices"))
    : [];
let currentPokemonIndex = localStorage.getItem("currentPokemonIndex")
    ? parseInt(localStorage.getItem("currentPokemonIndex"))
    : null;

const PokemonsDeAsh = [
    { nome: "Snivy - Planta", src: "./assets/img/ash-img/pkm-snivy.png", largura: "250px", poder: 308 },
    { nome: "Pikachu - Elétrico", src: "./assets/img/ash-img/pkm-pikachu.jpg", largura: "500px", poder: 320 },
    { nome: "Charizard - Fogo", src: "./assets/img/ash-img/pkm-charizard.png", largura: "300px", poder: 534 },
    { nome: "Lucario - Lutador/Metal", src: "./assets/img/ash-img/pkm-lucario.png", largura: "180px", poder: 525 },
    { nome: "Greninja - Água", src: "./assets/img/ash-img/pkm-greninja.png", largura: "250px", poder: 530 },
    { nome: "Quilava - Fogo", src: "./assets/img/ash-img/quilava.png", largura: "250px", poder: 500 },
    { nome: "Donphan - Terra", src: "./assets/img/ash-img/donphan.png", largura: "350px", poder: 500 },
    { nome: "Torkoal - Fogo", src: "./assets/img/ash-img/torkoal.png", largura: "350px", poder: 470 },
    { nome: "Tauros - Normal", src: "./assets/img/ash-img/tauros.png", largura: "350px", poder: 490 },
    { nome: "Snorlax - Normal", src: "./assets/img/ash-img/pkm-snorlax.png", largura: "300px", poder: 540 },
    { nome: "Pidgeot - Normal/Voador", src: "./assets/img/ash-img/pkm-pidgeot.png", largura: "300px", poder: 479 },
    { nome: "Dragonite - Dragão/Voador", src: "./assets/img/ash-img/pkm-dragonite.png", largura: "250px", poder: 700 },
    { nome: "Lycanroc - Pedra", src: "./assets/img/ash-img/pkm-lycanroc.png", largura: "250px", poder: 487 },
    { nome: "Gengar - Fantasma/Venenoso", src: "./assets/img/ash-img/pkm-gengar.png", largura: "250px", poder: 500 },
    { nome: "Krookodile - Terra/Sombrio", src: "./assets/img/ash-img/pkm-krokodile.png", largura: "250px", poder: 519 },
    { nome: "Hawlucha - Lutador/Voador", src: "./assets/img/ash-img/pkm-hawlucha.png", largura: "300px", poder: 500 },
    { nome: "Sceptile - Planta", src: "./assets/img/ash-img/pkm-sceptile.png", largura: "300px", poder: 530 },
    { nome: "Primeape - Lutador", src: "./assets/img/ash-img/pkm-premeape.png", largura: "300px", poder: 455 },
    { nome: "Noctwal - Normal/Voador", src: "./assets/img/ash-img/pkm-noctwal.png", largura: "300px", poder: 452 },
    { nome: "Heracross - Inseto/Lutador", src: "./assets/img/ash-img/pkm-heracross.png", largura: "300px", poder: 500 },
    { nome: "Kingler - Água", src: "./assets/img/ash-img/pkm-kingler.png", largura: "300px", poder: 525 },
    { nome: "Swellow - Normal/Voador", src: "./assets/img/ash-img/pkm-swellow.png", largura: "300px", poder: 430 },
    { nome: "Corpish - Água", src: "./assets/img/ash-img/pkm-corpish.png", largura: "300px", poder: 308 },
    { nome: "Torterra - Planta/Terra", src: "./assets/img/ash-img/pkm-torterra.png", largura: "300px", poder: 525 },
    { nome: "Staraptor - Normal/Voador", src: "./assets/img/ash-img/pkm-staraptor.png", largura: "300px", poder: 525 },
    { nome: "Talonflame - Fogo/Voador", src: "./assets/img/ash-img/pkm-talonflame.png", largura: "300px", poder: 499 },
    { nome: "Gliscor - Voador/Terra", src: "./assets/img/ash-img/pkm-gliscor.png", largura: "300px", poder: 510 },
    { nome: "Scraggy - Lutador", src: "./assets/img/ash-img/pkm-scraggy.png", largura: "200px", poder: 510 },
    { nome: "Bayleef - Planta", src: "./assets/img/ash-img/bayleef.png", largura: "350px", poder: 405 },
    { nome: "Buizel - Água", src: "./assets/img/ash-img/buizel.png", largura: "350px", poder: 330 },
    { nome: "Glalie - Gelo", src: "./assets/img/ash-img/glalie.png", largura: "300px", poder: 480 },
    { nome: "Goodra - Dragão", src: "./assets/img/ash-img/goodra.png", largura: "300px", poder: 600 },
    { nome: "Rowtle - Grama/Voador", src: "./assets/img/ash-img/rowtle.png", largura: "300px", poder: 320 },
    { nome: "Lapras - Água/Gelo", src: "./assets/img/ash-img/lapras.png", largura: "300px", poder: 535 },
    { nome: "Butterfree - Inseto/Voador", src: "./assets/img/ash-img/butterfree.png", largura: "300px", poder: 535 },
    { nome: "Unfezant - Normal/Voador", src: "./assets/img/ash-img/unfezant.png", largura: "300px", poder: 488 },
    { nome: "Oshawott - Água", src: "./assets/img/ash-img/oshawott.png", largura: "300px", poder: 308 },
    { nome: "Bulbasaur - Grama/Veneno", src: "./assets/img/ash-img/bulbasaur.png", largura: "350px", poder: 318 },
    { nome: "Squirtle - Água", src: "./assets/img/ash-img/squirtle.png", largura: "250px", poder: 314 },
    { nome: "Darkrai - Sombrio", src: "./assets/img/ash-img/darkrai.png", largura: "350px", poder: 600 },
    { nome: "Palkia - Água/Dragão (Lendario)", src: "./assets/img/ash-img/palkia.png", largura: "350px", poder: 680 },
    { nome: "Zoroark - Sombrio", src: "./assets/img/ash-img/zoroark.png", largura: "350px", poder: 510 },
    { nome: "Hitmontop - Lutador", src: "./assets/img/ash-img/hitmotop.png", largura: "350px", poder: 455 },
    { nome: "Hitmontop - Lutador", src: "./assets/img/ash-img/hitmotchan.png", largura: "350px", poder: 455 },
    { nome: "Moltres - Fogo/Voador (Lendário)", src: "./assets/img/ash-img/moltres.png", largura: "350px", poder: 580 },
    { nome: "Sawk - Lutador", src: "./assets/img/ash-img/sawk.png", largura: "350px", poder: 465 },
];

// Função para gerar um índice aleatório sem repetir
function getRandomPokemonIndex() {
    const availableIndices = PokemonsDeAsh.map((_, index) => index).filter(index => !usedIndices.includes(index));
    if (availableIndices.length === 0) {
        return null; // Todos os Pokémon já foram exibidos
    }
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    usedIndices.push(randomIndex); // Adiciona o índice à lista de usados
    localStorage.setItem("usedIndices", JSON.stringify(usedIndices)); // Salva no localStorage
    return randomIndex;
}

// Função para atualizar o Pokémon baseado no nível
function atualizarPokemon() {
    const nivelAtual = Math.floor(count / 10); // Define o intervalo de nível (de 10 em 10)

    if (nivelAtual > 0 || count > 0) {
        if (currentPokemonIndex === null || count % 10 === 0) {
            // Escolhe um novo Pokémon aleatório se possível
            const randomIndex = getRandomPokemonIndex();
            if (randomIndex !== null) {
                currentPokemonIndex = randomIndex;
                localStorage.setItem("currentPokemonIndex", currentPokemonIndex); // Salva o índice atual
            }
        }

        // Recupera o Pokémon correspondente ao índice atual
        const pokemon = PokemonsDeAsh[currentPokemonIndex || usedIndices[usedIndices.length - 1]]; // Último usado se acabou
        personagem.setAttribute("src", pokemon.src);
        h2.textContent = pokemon.nome;
        personagem.style.width = pokemon.largura;
        strenght.innerText = pokemon.poder;
    } else {
        // Configuração inicial (Pokémon padrão)
        personagem.setAttribute("src", "./assets/img/ash-img/ash-y-picachu-png.png");
        h2.textContent = "Quem é esse Pokémon?";
        personagem.style.width = "175px";
        strenght.innerText = "0";
    }
}

// Função para aumentar o nível
function LevelUp() {
    count++;
    localStorage.setItem("level", count);
    level.textContent = count;
    atualizarPokemon();
}

// Função para diminuir o nível
function RemoveLevel() {
    if (count > 0) {
        count--;
        localStorage.setItem("level", count);
        level.textContent = count;
        atualizarPokemon();
    }
}

// Função para reiniciar o nível e os dados
function Reset() {
    count = 0;
    usedIndices = [];
    currentPokemonIndex = null;
    localStorage.setItem("level", count);
    localStorage.setItem("usedIndices", JSON.stringify(usedIndices));
    localStorage.removeItem("currentPokemonIndex");
    level.textContent = "0";
    strenght.textContent = "0";

    personagem.setAttribute("src", "./assets/img/ash-img/ash-y-picachu-png.png"); // Caminho da imagem inicial
    h2.textContent = "Quem é esse Pokémon?"; // Título inicial
    personagem.style.width = "175px"; // Largura inicial
}

// Atualiza a interface ao carregar a página
level.textContent = count;
atualizarPokemon();

// Adiciona eventos aos botões
btnPositive.addEventListener("click", LevelUp);
btnNegative.addEventListener("click", RemoveLevel);
LogoPkm.addEventListener("click", Reset);

function trocarPersonagem() {
    const select = document.getElementById("escolha-personagem");
    const url = select.value; // Obtém o valor da opção selecionada
    if (url) {
        window.location.href = url; // Redireciona para a página correspondente
    }
}
