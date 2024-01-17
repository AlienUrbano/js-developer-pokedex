const pokeApi = {}

function convertPokeApiDetailToPokemon (pokeDetail){

    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name


    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.showdown.front_default

    //Pokemon Detail Stats

    pokemon.height = pokeDetail.height

    pokemon.weight = pokeDetail.weight

    const stats = pokeDetail.stats.map((statsSlot)=> statsSlot.stat.name)
    const [stat] = stats

    pokemon.stats = stats
    pokemon.stat = stat

    const statsBase = pokeDetail.stats.map((statsBaseSlot)=> statsBaseSlot.base_stat)
    const [statBase] = statsBase

    pokemon.statsValue = statsBase
    pokemon.statValue = statBase
    
    // pokemon.hp = pokeDetail.stats.stat.name



    return pokemon

}


pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset =0 , limit =10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
            
            


}