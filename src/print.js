import { favoritesList } from "./favorites.js";

console.log(favoritesList);


export async function print(data){
    const facts = document.getElementById('facts');
    facts.innerHTML = await data;
}; 

export function appearStar(){
    const starStroke = document.getElementById('fav-stroke');
    starStroke.style.display = "block";
};

export function disapearStar(){
    const starStroke = document.getElementById('fav-stroke');
    starStroke.style.display = "none";
    const starFill = document.getElementById('fav-fill');
    starFill.style.display = "none";
};

export function fillStar(){
    const starStroke = document.getElementById('fav-stroke');
    starStroke.style.display = "none";
    const starFill = document.getElementById('fav-fill');
    starFill.style.display = "block";
};

export function emptyStar(){
    const starStroke = document.getElementById('fav-stroke');
    starStroke.style.display = "block";
    const starFill = document.getElementById('fav-fill');
    starFill.style.display = "none";
};

export function openFav(){
    const menu = document.querySelector('.favorites-page');
    menu.style.display = "flex";
}

export function closeFav(){
    const menu = document.querySelector('.favorites-page');
    menu.style.display = "none";
}