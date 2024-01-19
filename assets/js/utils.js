function toggleCardExpansion(pokemonNumber) {

    const pokemonCard = document.getElementById(`pokemonCard-${pokemonNumber}`);
        
            if (pokemonCard) {
                pokemonCard.classList.toggle('expanded');
                showStats(pokemonNumber)
            }


 }

 function showStats(pokemonNumber) {

    const statsContainer = document.getElementById(`stats-container-${pokemonNumber}`);
        
            if (statsContainer) {
                statsContainer.classList.toggle('show');               
            }


 }