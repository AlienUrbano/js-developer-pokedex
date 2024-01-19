const pokemonList = document.getElementById('pokemonList')
const pokemonCard = document.getElementById('pokemonCard')
const loadMoreBtn = document.getElementById('loadMoreBtn')
let offset = 0
let limit = 10
const maxRecords = 151


function convertPokemonToLi(pokemon){
    return `
    
    <li class="pokemon ${pokemon.type}" id="pokemonCard-${pokemon.number}" onclick = "toggleCardExpansion(${pokemon.number})">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    



   
        <div class="detail">
    
            <div class="stats-container" id= "stats-container-${pokemon.number}">
             
                <span class="PokemonStats">${pokemon.statsAsString}</span>
        
            </div>
        
            <ol class="types">
                ${pokemon.types.map((type) => 
                `<li class= "type ${type}">${type}</li>`).join('')}
            </ol>
    
            <img src="${pokemon.photo}" alt="${pokemon.name}">

    
        </div>
    </li>
    
    `
}


function loadPokemonItems (offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
        
    })    
}

loadPokemonItems(offset, limit)

loadMoreBtn.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecords){
        
        const newLimit = maxRecords-offset
        loadPokemonItems(offset, newLimit)
        loadMoreBtn.parentElement.removeChild(loadMoreBtn)

    } else {

        loadPokemonItems(offset, limit)

    }


})
