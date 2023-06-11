import { getApiData } from "./api.js";
import { addFavorite } from "./favorites.js";
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
});

const openMenu = document.getElementById('nav');
openMenu.addEventListener('click', function(){
    openFav();
});

const closeMenu = document.getElementById('return');
closeMenu.addEventListener('click', function(){
    closeFav();
});