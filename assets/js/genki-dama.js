const btnPositive = document.querySelector(".btn1");
const btnNegative = document.querySelector(".btn2");
const number = document.querySelector(".number");
const LogoDb = document.getElementById("db-logo");

// Recupera o valor salvo no Local Storage (se houver) ou inicia em 0
let count = localStorage.getItem("contador") ? parseInt(localStorage.getItem("contador")) : 0;
number.textContent = count; // Atualiza o valor na tela

const Aumentar = () => {
    count++; // Aumenta o contador
    number.textContent = count; // Atualiza o número na tela
    localStorage.setItem("contador", count); // Salva o novo valor no Local Storage
};

const Reduzir = () => {
    count--; // Diminui o contador
    number.textContent = count; // Atualiza o número na tela
    localStorage.setItem("contador", count); // Salva o novo valor no Local Storage
};

const Reset = () =>{
    number.textContent = 0;
    count = 0;
}

const trocarPersonagem = () => {
    const select = document.getElementById("escolha-personagem");
    const url = select.value; // Obtém o valor da opção selecionada
    if (url) {
        window.location.href = url; // Redireciona para a página correspondente
    }
};

// Eventos nos botões
btnPositive.addEventListener("click", Aumentar);
btnNegative.addEventListener("click", Reduzir);
LogoDb.addEventListener("click",Reset);
