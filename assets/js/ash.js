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

//variavel que armazena o número do nivel
let count = 0;

const PokemonsDeAsh = [
    // Snivy
    {
        nome: "Snivy - Planta",
        src: "./assets/img/ash-img/pkm-snivy.png",
        largura: "250px",
        poder: 308,
    },
    // Pikachu
    {
        nome: "Pikachu - Elétrico",
        src: "./assets/img/ash-img/pkm-pikachu.jpg",
        largura: "500px",
        poder: 320,
    },
    // Charizard
    {
        nome: "Charizard - Fogo",
        src: "./assets/img/ash-img/pkm-charizard.png",
        largura: "300px",
        poder: 534,
    },
    // Lucario
    {
        nome: "Lucario - Lutador/Metal",
        src: "./assets/img/ash-img/pkm-lucario.png",
        largura: "180px",
        poder: 525,
    },
    // Greninja
    {
        nome: "Greninja - Água",
        src: "./assets/img/ash-img/pkm-greninja.png",
        largura: "250px",
        poder: 530,
    },
    // Infernape
    {
        nome: "Infernape - Fogo/Lutador",
        src: "./assets/img/ash-img/pkm-infernape.png",
        largura: "250px",
        poder: 534,
    },
    // Snorlax
    {
        nome: "Snorlax - Normal",
        src: "./assets/img/ash-img/pkm-snorlax.png",
        largura: "300px",
        poder: 540,
    },
    // Pidgeot
    {
        nome: "Pidgeot - Normal/Voador",
        src: "./assets/img/ash-img/pkm-pidgeot.png",
        largura: "300px",
        poder: 479,
    },
    // Dragonite
    {
        nome: "Dragonite - Dragão/Voador",
        src: "./assets/img/ash-img/pkm-dragonite.png",
        largura: "250px",
        poder: 700,
    },
    // Lycanroc
    {
        nome: "Lycanroc - Pedra",
        src: "./assets/img/ash-img/pkm-lycanroc.png",
        largura: "250px",
        poder: 487,
    },
    // Gengar
    {
        nome: "Gengar - Fantasma/Venenoso",
        src: "./assets/img/ash-img/pkm-gengar.png",
        largura: "250px",
        poder: 500,
    },
    // Kroodile
    {
        nome: "Krookodile - Terra/Sombrio",
        src: "./assets/img/ash-img/pkm-krokodile.png",
        largura: "250px",
        poder: 519,
    },
    // Hawlucha
    {
        nome: "Hawlucha - Lutador/Voador",
        src: "./assets/img/ash-img/pkm-hawlucha.png",
        largura: "300px",
        poder: 500,
    },
    // Sceptile
    {
        nome: "Sceptile - Planta",
        src: "./assets/img/ash-img/pkm-sceptile.png",
        largura: "300px",
        poder: 530,
    },
    // Primeape
    {
        nome: "Primeape - Lutador",
        src: "./assets/img/ash-img/pkm-premeape.png",
        largura: "300px",
        poder: 455,
    },
    // Noctwal
    {
        nome: "Noctwal - Normal/Voador",
        src: "./assets/img/ash-img/pkm-noctwal.png",
        largura: "300px",
        poder: 452,
    },
    // Heracross
    {
        nome: "Heracross - Inseto/Lutador",
        src: "./assets/img/ash-img/pkm-heracross.png",
        largura: "300px",
        poder: 500,
    },
    // Kingler
    {
        nome: "Kingler - Agua",
        src: "./assets/img/ash-img/pkm-kingler.png",
        largura: "300px",
        poder: 525,
    },
    // Swellow
    {
        nome: "Swellow - Normal/Voador",
        src: "./assets/img/ash-img/pkm-swellow.png",
        largura: "300px",
        poder: 430,
    },
    // Corpish
    {
        nome: "Corpish - Agua",
        src: "./assets/img/ash-img/pkm-corpish.png",
        largura: "300px",
        poder: 308,
    },
    // Torterra
    {
        nome: "Torterra - Planta/Terra",
        src: "./assets/img/ash-img/pkm-torterra.png",
        largura: "300px",
        poder: 525,
    },
    // Staraptor
    {
        nome: "Staraptor - Normal/Voador",
        src: "./assets/img/ash-img/pkm-staraptor.png",
        largura: "300px",
        poder: 525,
    },
    // Talonflame
    {
        nome: "Talonflame - Fogo/Voador",
        src: "./assets/img/ash-img/pkm-talonflame.png",
        largura: "300px",
        poder: 499,
    },
    // Gliscor
    {
        nome: "Gliscor - Voador/Terra",
        src: "./assets/img/ash-img/pkm-gliscor.png",
        largura: "300px",
        poder: 510,
    },
    // Scraggy
    {
        nome: "Scraggy - Lutador",
        src: "./assets/img/ash-img/pkm-scraggy.png",
        largura: "200px",
        poder: 510,
    },
    // Bayleef
    {
        nome: "Bayleef - Planta",
        src: "./assets/img/ash-img/bayleef.png",
        largura: "350px",
        poder: 405,
    },
    // Buizel
    {
        nome: "Buizel - Agua",
        src: "./assets/img/ash-img/buizel.png",
        largura: "350px",
        poder: 330,
    },
    // Glalie
    {
        nome: "Glalie - Gelo",
        src: "./assets/img/ash-img/glalie.png",
        largura: "300px",
        poder: 480,
    },
    // Goodra
    {
        nome: "Goodra - Dragão",
        src: "./assets/img/ash-img/goodra.png",
        largura: "300px",
        poder: 600,
    },
    //Rowtle
    {
        nome: "Rowtle - Grama/Voando",
        src: "./assets/img/ash-img/rowtle.png",
        largura: "300px",
        poder: 320,
    },
    // Lapras 
    {
        nome: "Lapras - Água/Gelo",
        src: "./assets/img/ash-img/lapras.png",
        largura: "300px",
        poder: 535,
    },
    // Butterfree
    {
        nome: "Butterfree - Inseto/Voador",
        src: "./assets/img/ash-img/butterfree.png",
        largura: "300px",
        poder: 535,
    },
    // Unfezant 
    {
        nome: "Unfezant - Normal/Voador",
        src: "./assets/img/ash-img/unfezant.png",
        largura: "300px",
        poder: 488,
    },
    // Oshawott
    {
        nome: "Oshawott - Água",
        src: "./assets/img/ash-img/oshawott.png",
        largura: "300px",
        poder: 308,
    },
    //Bulbasaur
    {
        nome: "Bulbasaur - Grama/Veneno",
        src: "./assets/img/ash-img/bulbasaur.png",
        largura: "350px",
        poder: 318,
    },
    // Squirtle
    {
        nome: "Squirtle - Água",
        src: "./assets/img/ash-img/squirtle.png",
        largura: "250px",
        poder: 314,
    },
    // Tauros
    {
        nome: "Tauros - Normal",
        src: "./assets/img/ash-img/tauros.png",
        largura: "350px",
        poder: 490,
    },
    //Torkoal
    {
        nome: "Torkoal - Fogo",
        src: "./assets/img/ash-img/torkoal.png",
        largura: "350px",
        poder: 470,
    },
    //Donphan
    {
        nome: "Donphan  - Terra",
        src: "./assets/img/ash-img/donphan.png",
        largura: "350px",
        poder: 500,
    },
    //Quilava
    {
        nome: "Quilava  - Fogo",
        src: "./assets/img/ash-img/quilava.png",
        largura: "250px",
        poder: 500,
    },
];

function LevelUp() {
    const AddLevel = () => {
        level.textContent = count + 1;
        count++;
    }
    if (count === 0) {
        level.innerText = "0";
        strenght.innerText = "0";
    } else if (count >= 1) {
        const pokemon = escolherPokemonAleatorio();
        // Atualiza as informações do Pokémon
        personagem.setAttribute("src", pokemon.src);
        h2.textContent = pokemon.nome;
        personagem.style.width = pokemon.largura;
        strenght.innerText = pokemon.poder;
    }
    // // else if (count === 14) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // } else if (count === 24) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // } else if (count === 29) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // } else if (count === 39) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // } else if (count === 49) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // } else if (count === 59) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // } else if (count === 69) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // }
    // // else if (count === 79) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // } else if (count === 99) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // }
    // // else if (count === 119) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // } else if (count === 139) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // }
    // // else if (count === 149) {
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // // }else if(count >= 150){
    // //     const pokemon = escolherPokemonAleatorio();
    // //     // Atualiza as informações do Pokémon
    // //     personagem.setAttribute("src", pokemon.src);
    // //     h2.textContent = pokemon.nome;
    // //     personagem.style.width = pokemon.largura;
    // //     strenght.innerText = pokemon.poder;
    // }
    AddLevel();
    addStrength();
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
    }
    AddLevel();
    addStrength();
}
function Reset() {
    // Reinicia os valores
    count = 0;
    level.textContent = "0"; // Atualiza o nível no HTML
    strenght.textContent = "0"; // Atualiza a força no HTML

    // Volta o personagem para o estado inicial
    personagem.setAttribute("src", "./assets/img/ash-img/ash-y-picachu-png.png"); // Caminho da imagem inicial
    h2.textContent = "Ash Ketchum"; // Título inicial
    h2.style.color = "#000"; // Cor inicial do texto
    personagem.style.width = "175px"; // Largura inicial
}
function trocarPersonagem() {
    const select = document.getElementById("escolha-personagem");
    const url = select.value; // Obtém o valor da opção selecionada
    if (url) {
        window.location.href = url; // Redireciona para a página correspondente
    }
}
function escolherPokemonAleatorio() {
    // Gera um índice aleatório entre 0 e o tamanho do array
    const indiceAleatorio = Math.floor(Math.random() * PokemonsDeAsh.length);

    // Retorna o Pokémon correspondente
    return PokemonsDeAsh[indiceAleatorio];
}


btnPositive.addEventListener("click", LevelUp);
LogoPkm.addEventListener("click", Reset);
btnNegative.addEventListener("click", RemoveLevel);

