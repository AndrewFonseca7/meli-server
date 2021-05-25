const express = require("express");
/**
 * Importamos itemsApi que será el encargado de manejar
 * los request que lleguen al path de items.
 */
const itemsApi = require("../api/items.api");
/**
 * Importamos items controller que será el encargado
 * de construir los responses.
 */
const itemsController = require("../controllers/items.controller");

/**
 * Construimos un router.
 */
const router = express.Router();

/**
 * Le indicamos al router que los paths que comiencen
 * con "/items" serán manejados por el itemsRouter.
 */
router.route("/items").get((req, res) => {
  const query = req.query["q"];
  if (query && query != "" && query != " ") {
    /**
     * Llamamos a apiItems para que en base al request recibido
     * nos devuelva los datos necesarios (data) para construir el response.
     */
    itemsApi
      .searchItems(req)
      .then((data) => {
        /**
         * ItemsController.buildSearchItemsResponse recibe la data de
         * itemsApi.searchItems construye una respuesta y generamos
         * un response con status 200
         */
        res.status(200).send(itemsController.buildSearchItemsResponse(data));
      })
      .catch((err) => {
        /**
         * Si ocurre un error devolvemos un response con el error
         * y status 400.
         */
        res.status(400).send(err);
      });
  } else {
    res.status(200).send({ message: "El valor del id no puede ser vacío." });
  }
});
router.route("/items/:id").get((req, res) => {
  if (req.params["id"]) {
    itemsApi
      .itemDetail(req)
      .then((data) => {
        /**
         * ItemsController.buildItemDetailResponse recibe la data de
         * itemsApi.searchItems construye una respuesta y generamos
         * un response con status 200
         */
        res.status(200).send(itemsController.buildItemDetailResponse(data));
      })
      .catch((err) => {
        /**
         * Si ocurre un error devolvemos un response con el error
         * y status 400.
         */
        res.status(400).send(err);
      });
  } else {
    res.status(200).send({ message: "El valor del id no puede ser vacío." });
  }
});

// router.use("/items", itemsRouter);

/**
 * Exportamos nuestro router
 */

module.exports = router;
