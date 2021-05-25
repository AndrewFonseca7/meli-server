const meliServices = require("../../server/services/meliServices");

describe("Consumo de servicios de Mercado Libre", () => {
	
	test("Busca un objeto por el nombre mediante el método searchItemsByQuery", async ()=>{

		const query = "zelda";
		const response = await meliServices.searchItemsByQuery(query);

		expect(response.site_id).toBe("MLA");
		expect(response.query).toBe(query);
		expect(response.results.length).toBeGreaterThan(4);
	});
	
	test("Busca un objeto por el id mediante el método getItemInfoById", async ()=>{
		
		const id = "MLA919035161"
		const response = await meliServices.getItemInfoById(id);
		expect(response.id).toBe(id);
		expect(response.site_id).toBe("MLA");
		expect(response.price).not.toBe(null);
	});

	test("Busca la descripción de un objeto por el id mediante el método getItemDescriptionById", async ()=>{
		
		const id = "MLA919035161"
		const response = await meliServices.getItemDescriptionById(id);

		expect(response.plain_text).not.toBe(null);
	});
});
