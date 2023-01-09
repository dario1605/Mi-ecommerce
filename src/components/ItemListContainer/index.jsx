import React, {useState, useEffect} from "react";
import '../ItemListContainer/itemListContainer.css';
import ItemCount from "../ItemCount";
import ItemList from '../ItemList';
import { useParams } from "react-router-dom";

const productos = [
    { id: 1, image:"https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-V.jpg", category:"notebooks", title: "Notebook Asus"},
    { id: 2, image:"https://http2.mlstatic.com/D_NQ_NP_866212-MLA43250857318_082020-V.jpg", category:"notebooks", title: "Notebook EXO"},
    { id: 3, image:"https://http2.mlstatic.com/D_NQ_NP_665782-MLA51289168724_082022-V.jpg", category:"notebooks", title: "Notebook Alienware"},
    { id: 4, image:"https://http2.mlstatic.com/D_NQ_NP_796714-MLA42408174580_062020-W.jpg", category:"escritorio", title: "PC Armada Ryzen 5"},
    { id: 5, image:"https://http2.mlstatic.com/D_NQ_NP_781943-MLA48369886312_112021-W.jpg", category:"escritorio", title: "PC Armada Ryzen 7"},
    { id: 6, image:"https://http2.mlstatic.com/D_NQ_NP_716427-MLA51607119507_092022-W.jpg", category:"escritorio", title: "PC Armada Ryzen 9"},

];

export const ItemListContainer = () => {

    const [datos, setearDatos] = useState ([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const obtenerDatos = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if (categoriaId){
            obtenerDatos.then(res => setearDatos(res.filter(producto => producto.category === categoriaId)));
        } else{
            obtenerDatos.then(res => setearDatos(res));
        }
    }, [categoriaId])
    
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