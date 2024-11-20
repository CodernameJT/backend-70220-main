

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
.gitignore
package.json
products.json
README.md
src/
	app.js
	config/
		mongoDB.config.js
		passport.config.js
	dao/
		mongo/
			cart.dao.js
			models/
				cart.model.js
				product.model.js
				user.model.js
			product.dao.js
			user.dao.js
	dirname.js
	middlewares/
		authorization.middleware.js
		checkEmail.middleware.js
		checkProductData.middleware.js
		isAdmin.middleware.js
		passport.middleware.js
	routes/
		carts.routes.js
		index.js
		products.routes.js
		session.routes.js
	utils/
		cookieExtractor.js
		hashPassword.js
		jwt.js
```

### Descripción de Archivos y Directorios

- **.gitignore**: Archivo que especifica qué archivos y directorios deben ser ignorados por Git.
- **package.json**: Archivo que contiene la configuración del proyecto y las dependencias necesarias.
- **products.json**: Archivo JSON que contiene una lista de productos con sus detalles.
- **README.md**: Archivo de documentación del proyecto.

#### Directorio 

- **app.js**: Archivo principal de la aplicación donde se configura y se inicia el servidor Express.
- **config/**: Directorio que contiene archivos de configuración.
  - **mongoDB.config.js**: Archivo de configuración para la conexión a MongoDB.
  - **passport.config.js**: Archivo de configuración para la autenticación con Passport.
- **dao/**: Directorio que contiene los objetos de acceso a datos (DAO).
  - **mongo/**: Directorio que contiene los DAOs específicos para MongoDB.
    - **cart.dao.js**: DAO para la gestión de carritos de compra.
    - **models/**: Directorio que contiene los modelos de Mongoose.
      - **cart.model.js**: Modelo de Mongoose para los carritos de compra.
      - **product.model.js**: Modelo de Mongoose para los productos.
      - **user.model.js**: Modelo de Mongoose para los usuarios.
    - **product.dao.js**: DAO para la gestión de productos.
    - **user.dao.js**: DAO para la gestión de usuarios.
- **dirname.js**: Archivo que exporta el directorio actual utilizando 
.
- **middlewares/**: Directorio que contiene los middlewares de la aplicación.
  - **authorization.middleware.js**: Middleware para la autorización de usuarios según su rol.
  - **checkEmail.middleware.js**: Middleware para verificar si un email ya está registrado.
  - **checkProductData.middleware.js**: Middleware para validar los datos de los productos.
  - **isAdmin.middleware.js**: Middleware para verificar si el usuario es administrador.
  - **passport.middleware.js**: Middleware para la autenticación con Passport.
- **routes/**: Directorio que contiene las rutas de la aplicación.
  - **carts.routes.js**: Rutas para la gestión de carritos de compra.
  - **index.js**: Archivo que centraliza todas las rutas de la aplicación.
  - **products.routes.js**: Rutas para la gestión de productos.
  - **session.routes.js**: Rutas para la gestión de sesiones de usuario.
- **utils/**: Directorio que contiene utilidades y funciones auxiliares.
  - **cookieExtractor.js**: Función para extraer el token de las cookies.
  - **hashPassword.js**: Funciones para hashear y validar contraseñas.
  - **jwt.js**: Funciones para crear y verificar tokens JWT.

Esta estructura permite una organización clara y modular del código, facilitando el mantenimiento y la escalabilidad del proyecto.

