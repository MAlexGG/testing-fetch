import { getApiData } from "./api.js";
import { addFavorite, cleanFavorites, deleteFavorite, favoritesList, printFavorites } from "./favorites.js";
import { appearStar, print, fillStar, emptyStar, disapearStar, openFav, closeFav } from "./print.js";

const button = document.getElementById('button');
button.addEventListener('click', function (){
    print(getApiData());
    disapearStar();
    appearStar();
});

const startStroke = document.getElementById('fav-stroke');
startStroke.addEventListener('click', function(){
    fillStar();
    const data = document.getElementById('facts').innerHTML;
    addFavorite(data);
});

const startFill = document.getElementById('fav-fill');
startFill.addEventListener('click', function(){
    emptyStar();
    deleteFavorite(favoritesList);
});

const openMenu = document.getElementById('nav');
openMenu.addEventListener('click', function(){
    openFav();
    printFavorites(favoritesList);
});

const closeMenu = document.getElementById('return');
closeMenu.addEventListener('click', function(){
    closeFav();
    cleanFavorites();
});