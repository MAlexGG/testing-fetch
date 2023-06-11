import { load } from "../helpers/helpers";
import { addFavorite, printFavorites } from "../src/favorites";
import assert from "node:assert";

describe('print llamando a JSDOM', () => {
    test('añade un favorito', () => {
        const favorites = addFavorite('es un hecho favorito');

        assert.deepStrictEqual(favorites, ['es un hecho favorito'])
    });

    test('función printFavorites imprime cuando hay favoritos', async () => {
        let { document } = await load("index.html");
        global.document = document;

        const array = ["primer hecho"]
        printFavorites(array);

        const element = document.querySelector(".fact");

        assert.equal(element.innerHTML, "primer hecho");   
    });

    test('función printFavorites imprime texto cuando no hay favoritos', async () => {
        let { document } = await load("index.html");
        global.document = document;

        const array = []
        printFavorites(array);

        const element = document.getElementById("fav-facts");

        assert.equal(element.innerHTML, "<h3>You don't have any favorite fact saved, go back and add at least one</h3>");   
    });
});