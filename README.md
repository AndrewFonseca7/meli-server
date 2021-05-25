# MeLi Server

MeLi server es una aplicación en nodeJS que permite buscar productos en el stock de Mercado Libre y obtener su información detallada.

## Instalación

Instale [node](https://nodejs.org/es/)  v14.15.4 o superior.

Estando en la raíz del proyecto use el comando

```bash
npm install 
```

Una vez finalice la instalación puede usar los siguientes comandos:

* Iniciar el servidor:
```bash
npm run start
```
* Ejecutar pruebas unitarias:
```bash
npm run test
```
* Verificar cobertura de pruebas unitarias:
```bash
npm run test:coverage
```

## Uso

Puede realizar las siguientes peticiones REST en:

* Buscar el listado de productos dada una palabra:
```bash
GET localhost:8080/api/items?q=:query
````
* Obtener los detalles de un producto dado un id:
```bash
GET localhost:8080/api/items/:id
````

## Consejos

Si usa Visual Studio Code es recomendable instalar las siguientes extensiones para trabajar en el proyecto:

* [REST Client:](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) Permite realizar las peticiones directamente desde el editor. Puede encontrar las peticiones en la carpeta "requests".

* [Better Comments:](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) Facilitará la lectura de los comentarios puestos en el código. ​


## Author

👤 **Andrew Fonseca**

- Github: [@AndrewFonseca7](https://github.com/AndrewFonseca7