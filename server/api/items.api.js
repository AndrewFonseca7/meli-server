const meliServices = require("../services/meliServices");
const api = {};

/**
 * Método que consulta los ítems asociados al parámetro recibido
 * consumiendo un servicio de Mercado Libre.
 * @param {request} req petición recibida, debe contener
 * el parámetro query que indica el item que se desea buscar.
 */
api.searchItems = async (req) => {
  const query = req.query["q"];
  if (query && query != "" && query != " ") {
    /**
     * Consumimos el servicio searchItemsByQuery pasando como
     * parámetro el query recibido y retornamos la data del servicio.
     */
    return meliServices
      .searchItemsByQuery(query)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  } else {
    return {
      status: 400,
      data: { message: "El valor del query no puede ser vacío." },
    };
  }
};

/**
 * Método que consulta los datos asociados al item recibido
 * como parámetro consumiendo dos servicio de Mercado Libre.
 * @param {request} req petición recibida, debe contener
 * el parámetro id que indica el item del que se desea
 * buscar información detallada.
 */
api.itemDetail = async (req) => {
  const id = req.params["id"];
  if (id && id != "" && id != " ") {
    /**
     * Consumimos el servicio getItemInfoById pasando como
     * parámetro el id recibido.
     */
    return meliServices
    .getItemInfoById(id)
    .then((generalInfo) => {
      /**
       * Consumimos el servicio getItemDescriptionById pasando como
       * parámetro el id recibido y retornamos la data del servicio
       * getItemInfoById y getItemDescriptionById.
       */
      return meliServices
      .getItemDescriptionById(id)
      .then((detailedInfo) => {
            return meliServices
              .getItemCategories(generalInfo.category_id)
              .then((categoriesInfo) => {
                return {
                  generalInfo: generalInfo,
                  detailedInfo: detailedInfo,
                  categoriesInfo: categoriesInfo,
                };
              })
              .catch((err) => {
                return err;
              });
          })
          .catch((err) => {
            return err;
          });
      })
      .catch((err) => {
        return err;
      });
  } else {
    return {
      status: 400,
      data: { message: "El valor del id no puede ser vacío." },
    };
  }
};

module.exports = api;
