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
    const favPage = document.querySelector('.favorites-page');
    favPage.style.display = "flex";
    const homePage = document.querySelector('.home-page');
    homePage.style.display = "none";
}

export function closeFav(){
    const favPage = document.querySelector('.favorites-page');
    favPage.style.display = "none";
    const homePage = document.querySelector('.home-page');
    homePage.style.display = "flex";
}