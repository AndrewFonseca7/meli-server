/**
 * Importamos los modelos que definen la información que
 * debe contener nuetra respuesta.
 */
const model = require("../models/items.model");

module.exports = {
  /**
   * Método que construye la respuesta de searchItems en base
   * a la data recibida por el servicio searhItems.
   * Devuelve un objeto que contiene autor, un arreglo de
   * categorías asociadas a la búsqueda realizada y un arreglo
   * de items.
   * @param {JSON} data respuesta del servico searchItems.
   */
  buildSearchItemsResponse: (data) => {
    /**
     * Obtenemos las categorías, en caso de que data.filters[0]
     * sea vacío las obtenemos de data.available_filters[0].values
     */
    const dataCategories = data.filters[0]
      ? data.filters[0].values[0].path_from_root
      : data.available_filters[0].values;

    /**
     * Obtenemos los primeros 4 ítems que devuelve el servicio
     * en data.results
     */
    const dataItems = data.results.slice(0, 4);
    /**
     * Creamos el objeto author.
     */
    const author = new model.Author("Andrew", "Fonseca");
    /**
     * Creamos el objeto categories de los datos almacenados
     * en dataCategories.
     */
    const categories = dataCategories.map((category) => category.name);
    /**
     * Creamos un arreglo de items de los datos almacenados
     * en dataItems.
     */
    const items = dataItems.map((item) => {
      /**
       * Creamos el objeto price.
       */
      //TODO revisar el servicio pues no trae níngun campo que permita "decimals".
      const price = new model.Price(item.currency_id, item.price, null);
      return new model.Item(
        item.id,
        item.title,
        price,
        item.thumbnail,
        item.condition,
        item.shipping.free_shipping,
        item.address.state_name
      );
    });
    /**
     * Creamos el objeto searchItemsResponse pasando como
     * parámetros los objetos author, categories e items
     * generados previamente.
     */
    const searchItemsResponse = new model.ItemsSearchResponse(
      author,
      categories,
      items
    );
    return searchItemsResponse;
  },

  /**
   * Método que construye la respuesta de itemDetail en base
   * a la data recibida por el servicio getItemInfoById y
   * getItemDescriptionById.
   * Devuelve un objeto que contiene autor y detalles del item
   * como id, título, precio, url de imagen, condición, envío
   * gratuito, cantidad vendida y descripción del item.
   * @param {JSON} data respuesta de los servicios getItemInfoById
   * y getItemDescriptionById.
   */
  buildItemDetailResponse: (data) => {
    /**
     * Extraemos los dos objetos que vienen dentro de data para
     * que sea más legíble el código.
     */
    const generalInfo = data.generalInfo;
    const detailedInfo = data.detailedInfo;
    const categoriesInfo = data.categoriesInfo;
    /**
     * Creamos el objeto author.
     */
    const author = new model.Author("Andrew", "Fonseca");
    /**
     * Creamos el objeto price.
     */
    //TODO revisar el servicio pues no trae níngun campo que permita "decimals".
    const price = new model.Price(
      generalInfo.currency_id,
      generalInfo.price,
      null
    );
    /**
     * Creamos el objeto itemDetailed.
     */
    const itemDetailed = new model.ItemDetailed(
      generalInfo.id,
      generalInfo.title,
      price,
      generalInfo.pictures[0].url,
      generalInfo.condition,
      generalInfo.shipping.free_shipping,
      generalInfo.sold_quantity,
      detailedInfo.plain_text
    );
    /**
     * Obtenemos las categorías, en caso de que data.filters[0]
     * sea vacío las obtenemos de data.available_filters[0].values
     */
    const dataCategories = categoriesInfo.filters[0]
      ? categoriesInfo.filters[0].values[0].path_from_root
      : categoriesInfo.available_filters[0].values;
    /**
     * Creamos el objeto categories de los datos almacenados
     * en dataCategories.
     */
    const categories = dataCategories.map((category) => category.name);
    /**
     * Creamos el objeto itemDetailedResponse pasando como
     * parámetros los objetos author e itemDetailed
     * generados previamente.
     */
    const itemDetailedResponse = new model.ItemDetailedResponse(
      author,
      itemDetailed,
      categories
    );
    return itemDetailedResponse;
  },
};
