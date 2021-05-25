const axios = require("axios");

/**
 * Importamos las contantes que contienen el host y los
 * paths necesarios para consumir los servicios.
 */
const service = require("../constants/service.constants");

module.exports = {
  /**
   * Método que consume el servicio searchItems de Mercado Libre y
   * devuelve un listado de categorías e ítems asociados a la búsqueda.
   * @param {String} query Nombre del objeto que se desea buscar.
   */
  searchItemsByQuery: async (query) => {
    const url = `${service.HOST}${service.PATH.SEARCH_ITEMS}${query}`;
    const response = await axios.get(url);
    return response.data;
  },
  /**
   * Método que consume el servicio itemInfo de Mercado Libre y
   * devuelve la información asosciada al ítem buscado.
   * @param {String} id Id del ítem a buscar.
   */
  getItemInfoById: async (id) => {
    const url = `${service.HOST}${service.PATH.GET_ITEM_INFO_BY_ID}${id}`;
    const response = await axios.get(url);
    return response.data;
  },
  /**
   * Método que consume el servicio description de Mercado Libre y
   * devuelve la descripción asosciada al ítem buscado.
   * @param {String} id Id del ítem a buscar.
   */
  getItemDescriptionById: async (id) => {
    const url = `${service.HOST}${service.PATH.GET_ITEM_INFO_BY_ID}${id}${service.PATH.GET_ITEM_DESCRIPTION}`;
    const response = await axios.get(url);
    return response.data;
  },
  /**
   * Método que consume el servicio description de Mercado Libre y
   * devuelve la descripción asosciada al ítem buscado.
   * @param {String} id Id del ítem a buscar.
   */
  getItemCategories: async (id) => {
    const url = `${service.HOST}${service.PATH.GET_ITEM_CATEGORIES}${id}`;
    const response = await axios.get(url);
    return response.data;
  },
};
