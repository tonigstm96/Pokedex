// Definición de las constantes
const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelector(".btn-header");

// Enlace a la API

let URL = "https://pokeapi.co/api/v2/pokemon/";

// Petición API

for (let i = 0; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json()
            .then((data) => mostrarPokemon(data)))
}

// Función de mostrar Pokemon

function mostrarPokemon(data) {
    let tipos = data.types.map((type) =>
        `<p class="${type.type.name} tipo"> ${type.type.name}</p>`);

    tipos = tipos.join('');

    let pokeId = data.id.toString();
    if(pokeId.length === 1){
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = 
        `<p class="pokemon-id-back"> ${pokeId} </p>
         <div class="pokemon-imagen">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
         </div>
         <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">${pokeId}</p>
                <h2 class="pokemon-nombre">${data.name}</h2>
                </div>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
                <div class="pokemon stats">
                    <p class="stat">${(data.height * 0.1).toFixed(1)}M</p>
                    <p class="stat">${(data.weight * 0.1).toFixed(1)}KG</p>
                </div>
                </div>`

    listaPokemon.append(div);

}
