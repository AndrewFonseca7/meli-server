/**
 * Modelo de datos para response itemsSearch.
 */
class ItemsSearchResponse {
	/**
	 * Constructor del objeto ItemsSearchResponse.
	 * @param {Author} author Autor.
	 * @param {[String]} categories Arreglo de categorías asociadas
	 * al ítem buscado.
	 * @param {[Items]} items Arreglos de items asociados al ítem
	 * buscado.
	 */
	constructor(author, categories, items) {
		this.author = author;
		this.categories = categories;
		this.items = items;
	}
}

/**
 * Modelo de datos para response itemDetailed.
 */
class ItemDetailedResponse {
	/**
	 * Constructor del objeto ItemDetailedResponse.
	 * @param {Author} author Autor.
	 * @param {ItemsDetailed} itemDetailed Objeto con información
	 * detallada del ítem buscado.
	 * @param {[String]} categories Arreglo de categorías asociadas
	 * al ítem buscado.
	 */
	constructor(author, itemDetailed, categories) {
		this.author = author;
		this.item = itemDetailed;
		this.categories = categories;
	}
}

/**
 * Modelo de datos del author
 */
//TODO no se tiene información detallada sobre de dónde sacar los datos.
class Author {
	/**
	 * Contructor del objeto Author.
	 * @param {String} name Nombre del autor.
	 * @param {String} lastname Apellido del autor.
	 */
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}
}

/**
 * Modelo de datos del objeto Item.
 */
class Item {
	/**
	 * Constructor del objeto Item.
	 * @param {String} id Id del ítem.
	 * @param {String} title Título de la publicación del ítem.
	 * @param {Number} price Precio del ítem.
	 * @param {String} picture Ruta de la imagen del ítem.
	 * @param {String} condition Condición del ítem.
	 * @param {Boolean} free_shipping Envío gratuito.
	 * @param {String} state_name Ciudad en la que se encuentra el producto.
	 */
	constructor(id, title, price, picture, condition, free_shipping, state_name) {
		this.id = id;
		this.title = title;
		this.price = price;
		this.picture = picture;
		this.condition = condition;
		this.free_shipping = free_shipping;
		this.state_name = state_name;
	}
}

/**
 * Modelo de datos del objeto Price.
 */
class Price {
	/**
	 * Constructor del objeto Price.
	 * @param {String} currency Tipo de moneda asociada al valor del ítem.
	 * @param {Number} amount Valor del ítem.
	 * @param {Number} decimals Decimales del valor del ítem.
	 */
	constructor(currency, amount, decimals) {
		this.currency = currency;
		this.amount = amount;
		this.decimals = decimals;
	}
}

/**
 * Modelo de datos del objeto ItemDetailed.
 */
class ItemDetailed extends Item {
	/**
	 * Constructor del objeto ItemDetailed.
	 * @param {String} id Id del ítem.
	 * @param {String} title Título de la publicación del ítem.
	 * @param {Number} price Precio del ítem.
	 * @param {String} picture Ruta de la imagen del ítem.
	 * @param {String} condition Condición del ítem.
	 * @param {Boolean} free_shipping Envío gratuito.
	 * @param {Number} sold_quantity Candidad de veces que
	 * se ha vendido el ítem.
	 * @param {String} description Descripción de ítem.
	 */
	constructor(
		id,
		title,
		price,
		picture,
		condition,
		free_shipping,
		sold_quantity,
		description
	) {
		super(id, title, price, picture, condition, free_shipping);
		this.sold_quantity = sold_quantity;
		this.description = description;
	}
}

module.exports = {
	Author,
	Item,
	ItemDetailed,
	Price,
	ItemsSearchResponse,
	ItemDetailedResponse,
};
