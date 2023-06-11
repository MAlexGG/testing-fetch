export let favoritesList = [];

export function addFavorite(data){
    favoritesList.push(data);
    return favoritesList;
};

export function printFavorites(favorites){
    if (favorites) {
        for (const key in favorites) {
            const favFacts = document.getElementById('fav-facts');
            favFacts.innerHTML += 
            `<div class="ctFav">
                <img src="../assets/star-fill.svg" alt="favorite fact"/>
                <p class="fact">${favorites[key]}</p>
            </div>`
        }; 
    };
    if(favorites.length == 0){
        const favFacts = document.getElementById('fav-facts');
        favFacts.innerHTML += 
        `<h3>You don't have any favorite fact saved, go back and add at least one</h3>`
    };
};

export function cleanFavorites(){
    const favFacts = document.getElementById('fav-facts');
    favFacts.innerHTML = "";
}

export function deleteFavorite(favorites){
    favorites.pop();
    return favorites;
}


