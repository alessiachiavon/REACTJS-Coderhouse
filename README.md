# e-commerce | ReactJS

Este prototipo de e-commerce se desarrolló para el curso de React JS de Coderhouse.

## Sobre el proyecto

El prototipo está orientado a una pequeña empresa de marroquinería. La tienda virtual, como la empresa, está en desarrollo. 
Está proyectado generar un login, poder modificar la cantidad de elementos de un ítem desde el carrito, y mejorar la estética.

## Instalación

Clonar el proyecto y entrar en el directorio:

git clone https://github.com/alessiachiavon/REACTJS-Coderhouse
cd ecommerce2

Instalar la versión de npm recomendada (instalar nvm si hace falta):

nvm install

Instalar las dependencias:

npm install

Duplicar el archivo .env.example como .env. Poner las claves de Firebase provistas por privado.

cp .env.example .env

Iniciar el servidor local:

npm start

## Comandos

### `npm start`

Se debe utilizar este comando para iniciar el servidor local.

## Objetivos

El objetivo es crear una tienda virtual accesible, fácil de utilizar por el usuario. Inicialmente, cumpliendo con las consigas estipuladas por el curso, luego, profundizando en ciertas funciones, para poder mejorar tanto la operatividad como la estética.

## Consideraciones y detalles

Dado que la marca se representa minimalista y con colores neutros, se decidió trabajar los estilos dentro de ReactJs, sin adoptar CSS. Es probable, que a futuro, con el crecimiento de la marca y la tienda, esto deba modificarse, intergrándose CSS al proyecto.

Como iniciar el servidor, nos encontramos con un imagen de portada, y todos los productos expuestos. Desde ese lugar, el usuario puede acceder directamente a los detalles de cada item o bien, desde el navegador, filtrar los productos por sus categorías. 
Una vez seleccionado el producto, puede elegirse la cantidad deseada (siempre y cuando no supere el stock) y agregarlo al carrito. Este último permanece visible desde toda la tienda, para poder acceder a él con facilidad.

Como base de datos se utilizó Firebase. Allí se guardan todos los productos, con sus especificaciones y su stock. También se almacenan allí los datos de los clientes cuando general su orden de compra. 

## Posibilidades concretas de mejora

La intención es desarrollar a futuro los siguientes temas:

-Un login para que los usuarios puedan ingresar con sus datos y guardar productos que deseen y facilite la finalización de la compra.

-Un filtro donde se muestren las ofertas (productos de un valor menor a X precio).

-Poder variar las cantidades de los productos desde el carrito (y no sólo desde el detalle del producto).

-Más información acerca de la marca (la historia de la misma, donde se encuentra ubicada, datos de contacto) y sobre los productos (que tipo de materiales se utilizan, conceptos de diseño, cuidado de los mismos).

-Posibilidad de pago desde la tienda.


