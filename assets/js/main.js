const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// processamento assíncrono

fetch(url).then(function (response) {
    console.log(response);
})

