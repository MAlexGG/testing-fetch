export let favoritesList = [];

export function addFavorite(data){
    favoritesList.push(data);
    return favoritesList;
};

export function printFavorites(){
    for (const key in favoritesList) {
        if (favoritesList) {
            console.log(favoritesList[key])
            const favFacts = document.getElementById('fav-facts');
            favFacts.innerHTML += 
            `<div class="ctFav">
                <img src="../assets/star-fill.svg" alt="favorite fact"/>
                <p>${favoritesList[key]}</p>
            </div>`
        };
    };
};

export function cleanFavorites(){
    const favFacts = document.getElementById('fav-facts');
            favFacts.innerHTML = "";
}


