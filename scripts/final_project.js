const pokemons = document.getElementById("pokemon_info");

function search_pokemon(){
    let pokemon_name = document.querySelector('input').value.toLowerCase();
    let pokemon_url = "https://pokeapi.co/api/v2/pokemon/";
    let pokemon_url_2 = "https://pokeapi.co/api/v2/pokemon-species/";
    let search_by = document.getElementById("type_search").value;
    if(search_by == "name"){
        pokemon_url += pokemon_name;
        my_pokemon = getPokemon(pokemon_url);
    }
    else if(search_by == "by_id"){
        pokemon_url_2 += pokemon_name;
        my_pokemon = getPokemon(pokemon_url_2);
        name_2 = my_pokemon.name;
        pokemon_url += pokemon_name;
        my_pokemon = getPokemon(pokemon_url);
    }
    else{
        pokemon_url += pokemon_name;
        my_pokemon = getPokemon(pokemon_url);
    }
}

function show_pokemon(pokemon, search_p){
    reset();
    info = pokemon;
    const pokemon_name = `This Pokemon's name is ${info.name}`;
    const pokemon_sprite = info.sprites.front_default;
    const habilities = `This Pokemon's ability is ${info.abilities[0].ability.name}`;
    let artic = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    h2.textContent = pokemon_name;
    img.src = pokemon_sprite;
    h3.textContent = habilities;
    artic.appendChild(h2);
    artic.appendChild(img);
    artic.appendChild(h3);
    pokemons.appendChild(artic);
}

async function getPokemon(url) {
    pokemon = [];
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      show_pokemon(data);
      return data;
    }
    else{
        let response = "Pokemon not found. Try again.";
        let artic = document.createElement('article');
        let h2 = document.createElement('h2');
        h2.textContent = response;
        artic.appendChild(h2);
        pokemons.appendChild(artic);
    }
  }

document.querySelector('#look').addEventListener('click', search_pokemon);

function reset(){
    const list = document.getElementById("pokemon_info");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}