/**
 * Este archivo almacena como constantes el host
 * y los paths necesarios para consumir los servicios
 * de Mercado Libre.
 */
module.exports = {
	HOST: "https://api.mercadolibre.com",
	PATH: {
		SEARCH_ITEMS: "/sites/MLA/search?q=",
		GET_ITEM_INFO_BY_ID: "/items/",
		GET_ITEM_DESCRIPTION: "/description",
		GET_ITEM_CATEGORIES: "/sites/MLA/search?category=",
	},
};
