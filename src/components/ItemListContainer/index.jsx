import React, {useState, useEffect} from "react";
import '../ItemListContainer/itemListContainer.css';
import ItemCount from "../ItemCount";
import ItemList from '../ItemList';

const notebooks = [
    { id: 1, image:"https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-V.jpg", title: "Notebook Asus"},
    { id: 2, image:"https://http2.mlstatic.com/D_NQ_NP_866212-MLA43250857318_082020-V.jpg", title: "Notebook EXO"},
    { id: 3, image:"https://http2.mlstatic.com/D_NQ_NP_665782-MLA51289168724_082022-V.jpg", title: "Notebook Alienware"},
]

export const ItemListContainer = () => {

    const [datos, setearDatos] = useState ([]);

    useEffect(() => {
        const obtenerDatos = new Promise(resolve => {
            setTimeout(() => {
                resolve(notebooks);
            }, 3000);
        });
        obtenerDatos.then(res => setearDatos(res));
    }, [])
    
    const agregar = (cantidad) => {
        console.log (`compraste ${cantidad} unidades`)
    }

    return (
        <div className='contenedor'>
            <ItemCount inicio={1} stock={10}  agregar={agregar}/>
            <ItemList datos={datos} />
        </div>
    );
}

export default ItemListContainer;