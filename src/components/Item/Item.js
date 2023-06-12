import { Link } from "react-router-dom"

const Item = ({id, tipo, imagen, color, descripcion, precio}) => {

    return (
        <article style={{padding:10, width:300, margin:25}}>
            <picture>
                <img src={imagen} style={{width:300, marginBottom:20}}/>
            </picture>
            <header>
                <h2 style={{fontSize:25}}>
                    {tipo}
                </h2>
            </header>
            <section>
                <p>
                    Color: {color}
                </p>
                <p style={{height:120}}>
                    {descripcion}
                </p>
                <p style={{color:'grey', fontSize:20}}>
                    ${precio}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`} style={{padding:10, textDecoration:'none', color:'white', backgroundColor: 'grey', margin:25, borderRadius:10}}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item