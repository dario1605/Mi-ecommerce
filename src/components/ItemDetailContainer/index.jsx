import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const productos = [
  { id: 1, image:"https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-V.jpg", category:"notebooks", title: "Notebook Asus"},
  { id: 2, image:"https://http2.mlstatic.com/D_NQ_NP_866212-MLA43250857318_082020-V.jpg", category:"notebooks", title: "Notebook EXO"},
  { id: 3, image:"https://http2.mlstatic.com/D_NQ_NP_665782-MLA51289168724_082022-V.jpg", category:"notebooks", title: "Notebook Alienware"},
  { id: 4, image:"https://http2.mlstatic.com/D_NQ_NP_796714-MLA42408174580_062020-W.jpg", category:"escritorio", title: "PC Armada Ryzen 5"},
  { id: 5, image:"https://http2.mlstatic.com/D_NQ_NP_781943-MLA48369886312_112021-W.jpg", category:"escritorio", title: "PC Armada Ryzen 7"},
  { id: 6, image:"https://http2.mlstatic.com/D_NQ_NP_716427-MLA51607119507_092022-W.jpg", category:"escritorio", title: "PC Armada Ryzen 9"},

]

export const ItemDetailContainer = () => {
    const [datos, setearDatos] = useState({});

    const { detalleId } = useParams();

    useEffect (() => {
        const obtenerDatos = new Promise(resolve => {
          setTimeout(() => {
            resolve(productos)
          }, 1000);  
        });
        obtenerDatos.then(res => setearDatos(res.find(producto => producto.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail datos={datos} />
    );
}

export default ItemDetailContainer;