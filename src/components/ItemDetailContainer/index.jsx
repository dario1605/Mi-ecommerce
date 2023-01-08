import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";

const notebook = { id: 1, image:"https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-V.jpg", title: "Notebook Asus"}

export const ItemDetailContainer = () => {
    const [datos, setearDatos] = useState({});

    useEffect (() => {
        const obtenerDatos = new Promise(resolve => {
          setTimeout(() => {
            resolve(notebook)
          }, 3000);  
        })
        obtenerDatos.then(res => setearDatos(res));
    }, [])

    return (
        <ItemDetail datos={datos} />
    );
}

export default ItemDetailContainer;