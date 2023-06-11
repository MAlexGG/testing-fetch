import { addFavorite } from "../src/favorites";
import assert from "node:assert";

describe('print llamando a JSDOM', () => {
    test('añade un favorito', async () => {
        const favorites = addFavorite('es un hecho favorito');

        assert.deepStrictEqual(favorites, ['es un hecho favorito'])
    });
});