const products = [
    {id: '1', imagen: "./assets/bandolera1.jpg", tipo: 'Bandolera', material: 'Poliéster reciclado', color: 'Negro', descripcion: 'Bandolera de material reciclado con bolsillo en el frente. Cierre, asa larga regulable y forro interior.', precio: 13500, stock: 10},
    {id: '2', imagen: "/asset/img/mochila1.jpg", tipo: "Mochila", material: "Poliéster reciclado", color: "Negro", descripcion: "Mochila porta notebook de viaje con bolsillo frontal. Asa corta, doble asa larga regulable, cierre y forro interior.", precio: 15900, stock: 50},
    {id: '3', imagen: "/asset/img/mochila2.jpg", tipo: "Mochila", material: "Poliéster reciclado", color: "Negro", descripcion: "Mochila de viaje de material reciclado con doble bolsillo en el frente. Doble asa regulable. Aplique decorativo, cierre y forro interior.", precio: 17500, stock: 50},
    {id: '4', imagen: "../asset/img/mochila3.jpg", tipo: "Mochila", material: "77% poli+ester reciclado, 23% poliuretano", color: "Beige", descripcion: "Mochila con solapa y bolsillo en el frente. Cierre a presión y de tipo ahorque. Doble asa larga regulable y forro interior.", precio: 19000, stock: 50},
    {id: '5', imagen: "../asset/img/cartera1.jpg", tipo: "Cartera", material: "Poliuretano", color: "Crudo", descripcion: "Cartera con detalle de cierres en el frente. Doble asa corta de mano, asa larga regulable y desmontable, cierre de cremallera, bolsillo interior y forro interior.", precio: 17500, stock: 50},
    {id: '6', imagen: "../asset/img/bandolera2.jpg", tipo: "Bandolera", material: "Poliéster reciclado", color: "Rosa Claro", descripcion: "Bandolera de viaje con bolsillo frontal con cierre. Asa larga regulable, cierre, bolsillo intero y forro interior", precio: 15000, stock: 50},
    {id: '7', imagen: "../asset/img/bandolera3.jpg", tipo: "Bandolera", material: "Cuerina", color: "Rojo", descripcion: "Bandolera con bolsillo frontal con cierre de imán. Asa regulable y desmontable", precio: 12800, stock: 50},
    {id: '8', imagen: "../asset/img/bandolera4.jpg", tipo: "Bandolera", material: "75% poliéster reciclado, 25% poliuretano", color: "Beige", descripcion: "Bandolera de material reciclado con solapa con bolsillo de cierre de cremallera. Asa larga regulable y desmontable, cierre de broche imán, bolsillo interior y forro interior", precio: 13500, stock: 50},
    {id: '9', imagen: "../asset/img/riñonera1.jpg", tipo: "Riñonera", material: "Nylon", color: "Celeste", descripcion: "Riñonera de viaje con bolsillo en el frente. Asa larga regulable, cierre y forro interior", precio: 14000, stock: 50},
    {id: '10', imagen: "../asset/img/riñonera2.jpg", tipo: "Riñonera", material: "Poliuretano", color: "Negra", descripcion: "Riñonera con cierre. Asa larga regulable y forro interior", precio: 13500, stock: 50},
    {id: '11', imagen: "../asset/img/billetera1.jpg", tipo: "Billetera", material: "Poliuretano", color: "Negro", descripcion: "Billetera con cierre y solapa. Compartimento para tarjetas y billetes, bolsillo interno con cierre y forro interior", precio: 9000, stock: 50},
    {id: '12', imagen: "../asset/img/billetera2.jpg", tipo: "Billetera", material: "Poliuretano", color: "Negro", descripcion: "Billetera con rabillo con cierre a presión. Múltiples compartimento para tarjetas y billetes, compartimento para monedas con cierre y forro interior", precio: 8500, stock: 50},
    {id: '13', imagen: "../asset/img/cosmeticos1.jpg", tipo: "Porta cosméticos", material: "Algodón", color: "Rosa Claro", descripcion: "Porta cosméticos con compartimentos en el interior, cierre y forro interior", precio: 9000, stock: 50} 
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.tipo === categoryId))
        }, 500)
    })
}