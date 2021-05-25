const api = require("../../server/api/items.api");

describe("Consumo de APIs del servidor", ()=>{
    test("API searchItems", async ()=>{

        const req = {query: { q: 'zelda' }};
        const response = await api.searchItems(req);

        expect(response.site_id).toBe("MLA");
		expect(response.query).toBe(req.query.q);
		expect(response.results.length).toBeGreaterThan(4);
    });
    test("API searchItems cuyo query es vacio", async ()=>{

        const req = {query: { }};
        const response = await api.searchItems(req);

        expect(response.status).toBe(400);
		expect(response.data).not.toBe(null);
		expect(response.data.message).toBe("El valor del query no puede ser vacío.");

    });
    test("API itemDetail", async ()=>{

        const req = {params: {id:"MLA919035161"}};
        const response = await api.itemDetail(req);

        expect(response.generalInfo.site_id).toBe("MLA");
		expect(response.generalInfo.id).toBe(req.params.id);
        expect(response.generalInfo.price).not.toBe(null);
        expect(response.detailedInfo.plain_text).not.toBe(null);
        expect(response.categoriesInfo).not.toBe(null);
    });
    test("API itemDetail cuyo param es vacio", async ()=>{

        const req = {params: {}};
        const response = await api.itemDetail(req);

        expect(response.status).toBe(400);
		expect(response.data).not.toBe(null);
		expect(response.data.message).toBe("El valor del id no puede ser vacío.");

    });
})