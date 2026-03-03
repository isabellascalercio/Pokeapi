const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const numero = document.getElementById("pokemon").value;

    if (numero === "") {
        alert("Digite um número!");
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;

    fetch(url)
        .then(res => res.json())
        .then(dados => {

            const nome = dados.name;
            const imagem = dados.sprites.versions["generation-v"]["black-white"].animated.front_default;
            const ataque1 = dados.moves[0].move.name;
            const ataque2 = dados.moves[1].move.name;

            resultado.innerHTML = `
                <h2>${nome} #${dados.id}</h2>
                <img src="${imagem}">
                <p><strong>Ataque 1:</strong> ${ataque1}</p>
                <p><strong>Ataque 2:</strong> ${ataque2}</p>
            `;
        })
        .catch(erro => {
            resultado.innerHTML = "Pokémon não encontrado!";
            console.log(erro);
        });
});