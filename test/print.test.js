import { print } from "../src/print.js";
import { load } from "../helpers/helpers.js";
import assert from "node:assert";
import { JSDOM } from "jsdom";

describe('print llamando a JSDOM', () => {
    test('título existe', async () => {
        const dom = await JSDOM.fromFile("index.html");
        const element = dom.window.document.getElementById('title');
        assert.equal(element.innerHTML, 'Curious Facts');
    });
    
    test('botón existe', async () => {
        const dom = await JSDOM.fromFile("index.html");
        const element = dom.window.document.getElementById('button');
        assert.equal(element.innerHTML, 'Get Fact');
    }); 
    
    test('función print imprime data', async ()=>{
        const dom = await JSDOM.fromFile("index.html");
        global.document = dom.window.document;
    
        await print('hola');
    
        const element = global.document.getElementById('facts');
        assert.strictEqual(element.innerHTML, 'hola');
    });
});

describe('print llamando a JSDOM a través de function load', () => {
    test('título existe', async () => {
        let { document } = await load("index.html");
        const element = document.getElementById('title');
        assert.equal(element.innerHTML, 'Curious Facts');
    });
    
    test('botón existe', async () => {
        let { document } = await load("index.html");
        const element = document.getElementById('button');
        assert.equal(element.innerHTML, 'Get Fact');
    });
    
    test('función print imprime data', async ()=>{
        let { document } = await load("index.html");
        global.document = document;
    
        await print('hola');
    
        const element = document.getElementById('facts');
        assert.strictEqual(element.innerHTML, 'hola');
    });
});






  