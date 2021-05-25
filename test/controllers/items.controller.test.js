const itemsController = require('../../server/controllers/items.controller');
const api = require("../../server/api/items.api");

describe("Controladores que contruyen el body de las respuestas que entrega el servidor", ()=>{

    test("Body que responde al buscar items", async ()=>{

        const req = {query: { q: 'zelda' }}
        const data = await api.searchItems(req)
        const body = itemsController.buildSearchItemsResponse(data);

        expect(body.author.name).not.toBe(null);
        expect(body.author.lastname).not.toBe(null);
        expect(body.categories.length).toBeGreaterThan(0);
        expect(body.items.length).toEqual(4);

    });

    test("Body que responde al buscar items", async ()=>{

        const req = {query: { q: 'martillo' }}
        const data = await api.searchItems(req)
        const body = itemsController.buildSearchItemsResponse(data);

        expect(body.author.name).not.toBe(null);
        expect(body.author.lastname).not.toBe(null);
        expect(body.categories.length).toBeGreaterThan(0);
        expect(body.items.length).toEqual(4);

    });

    test("Body que responde al buscar el detalle de un item", async ()=>{

        const req = {params: {id:"MLA919035161"}};
        const data = await api.itemDetail(req)
        const body = itemsController.buildItemDetailResponse(data);

        expect(body.author.name).not.toBe(null);
        expect(body.author.lastname).not.toBe(null);
        expect(body.item.id).toEqual(req.params.id);
        expect(body.item.title).not.toBe(null);
        expect(body.item.price.currency).not.toBe(null);
        expect(body.item.price.amount).toBeGreaterThan(0);
        // expect(body.item.price.decimals).not.toBe(null);
        expect(body.item.picture).not.toBe(null);
        expect(body.item.condition).not.toBe(null);
        expect(body.item.free_shipping).not.toBe(null);
        expect(body.item.sold_quantity).not.toBe(null);
        expect(body.item.description).not.toBe(null);
        expect(body.categories.length).toBeGreaterThan(0);
    });
    test("Body que responde al buscar el detalle de un item", async ()=>{

        const req = {params: {id:"MLA871267376"}};
        const data = await api.itemDetail(req)
        const body = itemsController.buildItemDetailResponse(data);

        expect(body.author.name).not.toBe(null);
        expect(body.author.lastname).not.toBe(null);
        expect(body.item.id).toEqual(req.params.id);
        expect(body.item.title).not.toBe(null);
        expect(body.item.price.currency).not.toBe(null);
        expect(body.item.price.amount).toBeGreaterThan(0);
        // expect(body.item.price.decimals).not.toBe(null);
        expect(body.item.picture).not.toBe(null);
        expect(body.item.condition).not.toBe(null);
        expect(body.item.free_shipping).not.toBe(null);
        expect(body.item.sold_quantity).not.toBe(null);
        expect(body.item.description).not.toBe(null);
        expect(body.categories.length).toBeGreaterThan(0);
    });
});