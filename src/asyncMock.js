import bandolera1 from './assets/bandolera1.jpg'
import mochila1 from './assets/mochila1.jpg'
import mochila2 from './assets/mochila2.jpg'
import mochila3 from './assets/mochila3.jpg'
import cartera1 from './assets/cartera1.jpg'
import bandolera2 from './assets/bandolera2.jpg'
import bandolera3 from './assets/bandolera3.jpg'
import bandolera4 from './assets/bandolera4.jpg'
import riñonera1 from './assets/riñonera1.jpg'
import riñonera2 from './assets/riñonera2.jpg'
import billetera1 from './assets/billetera1.jpg'
import billetera2 from './assets/billetera2.jpg'
import cosmeticos1 from './assets/cosmeticos1.jpg'

const products = [
    {id: '1', imagen: bandolera1, tipo: 'Bandolera', material: 'Poliéster reciclado', color: 'Negro', descripcion: 'Bandolera de material reciclado con bolsillo en el frente. Cierre, asa larga regulable y forro interior.', precio: 13500, stock: 10},
    {id: '2', imagen: mochila1, tipo: "Mochila", material: "Poliéster reciclado", color: "Negro", descripcion: "Mochila porta notebook de viaje con bolsillo frontal. Asa corta, doble asa larga regulable, cierre y forro interior.", precio: 15900, stock: 50},
    {id: '3', imagen: mochila2, tipo: "Mochila", material: "Poliéster reciclado", color: "Negro", descripcion: "Mochila de viaje de material reciclado con doble bolsillo en el frente. Doble asa regulable. Aplique decorativo, cierre y forro interior.", precio: 17500, stock: 50},
    {id: '4', imagen: mochila3, tipo: "Mochila", material: "77% poli+ester reciclado, 23% poliuretano", color: "Beige", descripcion: "Mochila con solapa y bolsillo en el frente. Cierre a presión y de tipo ahorque. Doble asa larga regulable y forro interior.", precio: 19000, stock: 50},
    {id: '5', imagen: cartera1, tipo: "Cartera", material: "Poliuretano", color: "Crudo", descripcion: "Cartera con detalle de cierres en el frente. Doble asa corta de mano, asa larga regulable y desmontable, cierre de cremallera, bolsillo interior y forro interior.", precio: 17500, stock: 50},
    {id: '6', imagen: bandolera2, tipo: "Bandolera", material: "Poliéster reciclado", color: "Rosa Claro", descripcion: "Bandolera de viaje con bolsillo frontal con cierre. Asa larga regulable, cierre, bolsillo intero y forro interior", precio: 15000, stock: 50},
    {id: '7', imagen: bandolera3, tipo: "Bandolera", material: "Cuerina", color: "Rojo", descripcion: "Bandolera con bolsillo frontal con cierre de imán. Asa regulable y desmontable", precio: 12800, stock: 50},
    {id: '8', imagen: bandolera4, tipo: "Bandolera", material: "75% poliéster reciclado, 25% poliuretano", color: "Beige", descripcion: "Bandolera de material reciclado con solapa con bolsillo de cierre de cremallera. Asa larga regulable y desmontable, cierre de broche imán, bolsillo interior y forro interior", precio: 13500, stock: 50},
    {id: '9', imagen: riñonera1, tipo: "Riñonera", material: "Nylon", color: "Celeste", descripcion: "Riñonera de viaje con bolsillo en el frente. Asa larga regulable, cierre y forro interior", precio: 14000, stock: 50},
    {id: '10', imagen: riñonera2, tipo: "Riñonera", material: "Poliuretano", color: "Negra", descripcion: "Riñonera con cierre. Asa larga regulable y forro interior", precio: 13500, stock: 50},
    {id: '11', imagen: billetera1, tipo: "Billetera", material: "Poliuretano", color: "Negro", descripcion: "Billetera con cierre y solapa. Compartimento para tarjetas y billetes, bolsillo interno con cierre y forro interior", precio: 9000, stock: 50},
    {id: '12', imagen: billetera2, tipo: "Billetera", material: "Poliuretano", color: "Negro", descripcion: "Billetera con rabillo con cierre a presión. Múltiples compartimento para tarjetas y billetes, compartimento para monedas con cierre y forro interior", precio: 8500, stock: 50},
    {id: '13', imagen: cosmeticos1, tipo: "Porta cosméticos", material: "Algodón", color: "Rosa Claro", descripcion: "Porta cosméticos con compartimentos en el interior, cierre y forro interior", precio: 9000, stock: 50} 
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