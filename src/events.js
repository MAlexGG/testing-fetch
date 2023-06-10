import { getApiData } from "./api.js";
import { print } from "./print.js";

const button = document.getElementById('button');
button.addEventListener('click', function (){
print(getApiData());
});