import { getApiData } from "./api.js";
import { appearStar, print, fillStar, emptyStar } from "./print.js";

const button = document.getElementById('button');
button.addEventListener('click', function (){
    print(getApiData());
    appearStar();
});

const startStroke = document.getElementById('fav-stroke');
startStroke.addEventListener('click', function(){
    fillStar();
});

const startFill = document.getElementById('fav-fill');
startFill.addEventListener('click', function(){
    emptyStar();
});